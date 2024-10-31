import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyWithJose } from "./helpers/jwt";
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {

    const whiteList = ["/patients/auth/login",
        "/patients/auth/register",
        "/doctors/auth/login",
        "/api/doctors/login",
        "/api/patients/login",
        "/api/patients/register"
    ]

    if (whiteList.includes(request.nextUrl.pathname)) {
        return NextResponse.next();

    }

    const authorization = cookies().get("Authorization")
    // console.log(authorization, "author==========");
    const isLogin = !!authorization;

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

    if (!authorization) {
        return Response.json({ message: "Unauthorized" }, { status: 401 });
    }
    const [type, token] = authorization.value.split(" ");

    if (type !== "Bearer")
        return Response.json({ message: "Unauthorized" }, { status: 401 });

    const verifyJose = await verifyWithJose<{ _id: string }>(token);

    if (request.nextUrl.pathname.startsWith("/doctors") && verifyJose.role !== "doctor") {
        return NextResponse.redirect("/doctors/auth/login?unauthorized")
    }

    if (request.nextUrl.pathname.startsWith("/patients") && verifyJose.role !== "patients") {
        return NextResponse.redirect("/patients/auth/login?unauthorized")
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("doctorId", verifyJose._id);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    return response;
}