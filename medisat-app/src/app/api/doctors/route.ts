import Doctor from "@/db/models/doctors";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params:{id:string}}) {
    try {
        const doctors = await Doctor.getAll()
        return NextResponse.json(doctors, {status:200})
    } catch (error) {
        console.log(error);
    }
}