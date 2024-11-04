import RecordsModel from "@/db/models/Records";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: Request, {params}: {params: {patientId: string}}) {
    try {
        
        const patients = await RecordsModel.getRecordHistoryPatientIdFromParams(params.patientId);
        
        return NextResponse.json(patients, {status:200})
    } catch (error) {
        console.log(error);
    }
}