import RecordsModel from "@/db/models/Records";
import { NextRequest, NextResponse } from "next/server";


export default async function GET(patientId:string) {
    try {
        const patients = await RecordsModel.getRecordHistoryPatientIdFromParams(patientId);
        return NextResponse.json(patients, {status:200})
    } catch (error) {
        console.log(error);
    }
}