import RecordsModel from "@/db/models/Records";
import { NextRequest, NextResponse } from "next/server";


//? Untuk melihat semua data yang daftar dengan dokter tesebut pada hari yang sama
export async function GET(request: NextRequest) { 
    try {
        const doctorId = request.headers.get('id') as string;
        const patients = await RecordsModel.getRecordByDoctorIdToday(doctorId);
        return NextResponse.json(patients,{status:200})
    } catch (error) {
        console.log(error);       
    }
}