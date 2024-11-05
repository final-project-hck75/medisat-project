import RecordsModel from "@/db/models/Records";
import { NextRequest, NextResponse } from "next/server";


//? Untuk melihat semua data yang daftar dengan dokter tesebut pada hari yang sama
export async function GET(request: NextRequest) { 
    try {
        // console.log("masuk api");
        
        const doctorId = request.headers.get('id') as string;
        console.log(doctorId, "doctorId");
        
        const patients = await RecordsModel.getRecordByDoctorIdToday(doctorId);
        return NextResponse.json(patients,{status:200})
    } catch (error) {
        console.log(error);       
    }
}