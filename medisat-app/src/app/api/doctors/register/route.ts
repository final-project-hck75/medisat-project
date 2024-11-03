import Doctor from "@/db/models/doctors";
import PatientMail from "@/helpers/mail";
import { NextRequest, NextResponse } from "next/server";



//? Untuk registrasi dokter
export async function POST(request: NextRequest) {
    try {
        const {employeeId, name, password, image, phoneNumber, polyclinic, schedule} = await request.json()

        await Doctor.newDoctor({
            employeeId, name, password, image, phoneNumber, polyclinic, schedule
        })    
        return NextResponse.json(
            {message:"Doctor registered"},
            {status:201}
        )
    } catch (error) {
        console.log(error);
        return error
    }
}