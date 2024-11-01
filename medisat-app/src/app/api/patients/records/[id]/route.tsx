import RecordsModel from "@/db/models/Records";

export async function GET(request: Request) {
  const patientId = request.headers.get("patientId")!;
  const patients = await RecordsModel.getRecordHistoryPatientId(patientId);
  return Response.json(patients);
}
