"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

export function AuthButton() {
	const { data: session } = useSession()
	const clicked = async () => {
		if (session?.user)
			await signOut()
		else
			await signIn("github")
	}
	return (
		<Button onClick={clicked}>{session?.user ? "Sign Out" : "Sign In"}</Button>
	)
}
