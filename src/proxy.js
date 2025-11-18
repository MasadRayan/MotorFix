import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function proxy(req) {
    const token = await getToken({ req });
    if (token) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(
            new URL(`/auth-login?callbackUrl=${encodeURIComponent(req.url)}`, req.url)
        );
    }
}

export const config = {
    matcher: [
        '/checkout/:path*',
        '/mybookings',
        '/mybookings/:path*',
        '/dashboard/:path*'
    ],
}
