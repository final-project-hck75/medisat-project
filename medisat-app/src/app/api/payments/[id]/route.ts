import RecordsModel from "@/db/models/Records";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log(params.id);
    const id: string = params.id;
    await RecordsModel.updateRecord(id);
    // const data = await RecordsModel.getRecordHistoryPatientIdFromParams(id);
    // console.log(der);
    return NextResponse.json(
      { message: `Record updated successfully` },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
