import Doctor from "@/db/models/doctors";
import RecordsModel from "@/db/models/Records";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {

    const patientId = request.headers.get('id')!
    
    const {
         bookDate,
         doctorId} = await request.json()

    // console.log(bookDate, doctorId, "BOOK DATE")
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

export async function GET(id: string) {
  const patient = await RecordsModel.getRecordByPatientId(id);
  if (!patient) throw { message: "Patient tidak terdaftar", status: 404 };
}