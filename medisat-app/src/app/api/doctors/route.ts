import Doctor from "@/db/models/doctors";
import { NextResponse } from "next/server";

//? Untuk mendapatkan data semua dokter
export async function GET() {
    try {
        const doctors = await Doctor.getAll()
        return NextResponse.json(doctors, {status:200})
    } catch (error) {
        console.log(error);
    }
}