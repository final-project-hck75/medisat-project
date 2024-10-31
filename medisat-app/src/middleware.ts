import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyWithJose } from "./helpers/jwt";
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {
    const authorization = cookies().get("Authorization")
    // console.log(authorization, "author==========");
    
    const isLogin = !!authorization;

    if (request.nextUrl.pathname.startsWith("/api/doctors")) {

        if (request.nextUrl.pathname.startsWith("/api/doctors/login")) {
            return NextResponse.next();
        }

        if (!authorization)
            return Response.json({ message: "Unauthorized" }, { status: 401 });

        const [type, token] = authorization.value.split(" ");

        if (type !== "Bearer")
            return Response.json({ message: "Unauthorized" }, { status: 401 });

        const verifyJose = await verifyWithJose<{ _id: string }>(token);
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("doctorId", verifyJose._id);


        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
        return response;
    }

    if (request.nextUrl.pathname === "/doctors") {
        if (!authorization) {
            return NextResponse.redirect(new URL("/doctors/auth/login", request.url));
        }
    }

    if (request.nextUrl.pathname === "/doctors/auth/login") {
        if (isLogin) {
            return NextResponse.redirect(new URL("/doctors", request.url));
        }
    }
}