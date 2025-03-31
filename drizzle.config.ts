import { Config } from "drizzle-kit";
import dotenv from "dotenv"

dotenv.config({ path: ".env.development.local" })

const config: Config = {
	out: ".drizzle",
	schema: "./src/lib/db/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url:
			process.env.POSTGRES_URL!
	},
}

export default config satisfies Config
