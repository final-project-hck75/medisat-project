// import PatientModel from "@/db/models/Patients";
import RecordsModel from "@/db/models/Records";

// GET API RECORD PATIENTS
export async function GET(request: Request) {
  const patientId = request.headers.get("patientId")!;
  const patients = await RecordsModel.getRecordByPatientId(patientId);
  return Response.json(patients);
}
