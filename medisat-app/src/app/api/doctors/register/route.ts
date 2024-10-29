import Doctor from "@/db/models/doctors";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    try {
        console.log("duer");
        
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