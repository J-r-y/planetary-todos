import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zdiuadbpyqmnrxljqtjz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkaXVhZGJweXFtbnJ4bGpxdGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMDM2MTMsImV4cCI6MjA1ODU3OTYxM30.6l-hdDG7FkgaZXj6JUoSCBo2jtN1mhseYNhuNRO3dho";

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	db: {
		schema: "next_auth"
	}
});

export async function GET(req: Request, res) {
	const { data, error } = await supabase.from("users").select("*");
	console.log(await supabase.schema("next_auth").from("users").select("*"))

	if (error) {
		console.error("Supabase error:", error);
		return Response.json({ error: "Failed to fetch users" });
	}

	return Response.json(data);
}
