import Doctor, { RecordType } from "@/db/models/doctors";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export type UpdateRecordType = {
    _id:ObjectId,
    symptom:string,
    disease:string,
    recipe:string,
    notes:string,
}

// ? Untuk update record pasien
export async function PUT(request: NextRequest, {params}:{params:{id:string}}) {
    try {
        console.log(params, "params =======");
        
        const _id = new ObjectId(params.id);

    const { symptom, disease, recipe, notes } =
      await request.json();

    console.log(_id);

    await Doctor.updateRecord({
      _id,
      symptom,
      disease,
      recipe,
      notes,
    } as UpdateRecordType);

    return NextResponse.json(
      { message: "Record updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
