import Doctor from "@/db/models/doctors";
import RecordsModel from "@/db/models/Records";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log(request);

    const {
      name,
      bookDate,
      status,
      symptom,
      disease,
      recipe,
      notes,
      checkupDate,
      patientId,
      doctorId,
    } = await request.json();

    await Doctor.insertRecord({
      name,
      bookDate,
      status,
      symptom,
      disease,
      recipe,
      notes,
      checkupDate,
      patientId,
      doctorId,
    });

    return NextResponse.json(
      { message: "Patient record saved" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function GET(id: string) {
  const patient = await RecordsModel.getRecordByPatientId(id);
  if (!patient) throw { message: "Patient tidak terdaftar", status: 404 };
}
