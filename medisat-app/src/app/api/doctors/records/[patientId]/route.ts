import RecordsModel from "@/db/models/Records";
import { NextRequest, NextResponse } from "next/server";


export  async function GET(request: NextRequest, {params}: {params: {patientId: string}}) {
    try {
        console.log(params.patientId, "patientId");
        
        const patients = await RecordsModel.getRecordHistoryPatientIdFromParams(params.patientId);
        return NextResponse.json(patients, {status:200})
    } catch (error) {
        console.log(error);
    }
}