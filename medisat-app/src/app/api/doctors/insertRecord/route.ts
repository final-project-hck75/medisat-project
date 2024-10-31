import Doctor from "@/db/models/doctors";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {

        const patientId = request.headers.get('patientId')!
        
        const {
             bookDate,
             doctorId} = await request.json()

        await Doctor.insertRecord({
             bookDate,
             status:"booked",
             patientId: new ObjectId(patientId),
             doctorId:new ObjectId(doctorId)
        });

        return NextResponse.json(
            {message: "Schedule created successfully"},
            {status:201}
        )
    } catch (error) {
        console.log(error);
    }
}