import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
	const todo = request.nextUrl.searchParams.get("title");
	return new Response(`added todo: ${todo}`, { status: 200 });
}
