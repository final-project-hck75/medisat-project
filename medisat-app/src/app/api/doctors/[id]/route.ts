import Doctor from "@/db/models/doctors";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, {params}:{params:{id:string}}) {
    try {
        const doctor = await Doctor.getByDoctorId(params.id)
        return NextResponse.json(doctor, {status: 200})
    } catch (error) {
        console.log(error);
    }
}