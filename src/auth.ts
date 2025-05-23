import NextAuth, { Session, User } from "next-auth"
import Github from "next-auth/providers/github"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import jwt from "jsonwebtoken"

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Github],
	adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
		secret: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		// secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
	}),
	callbacks: {
		async session({ session, user }: {
			session: Session, user: User
		}) {
			const signingSecret = process.env.SUPABASE_JWT_SECRET
			if (signingSecret) {
				const payload = {
					aud: "authenticated",
					exp: Math.floor(new Date(session.expires).getTime() / 1000),
					sub: user.id,
					email: user.email,
					role: "authenticated",
				}
				session.supabaseAccessToken = jwt.sign(payload, signingSecret)
			}
			return session
		}
	},
})
