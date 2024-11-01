// import PatientModel from "@/db/models/Patients";
import RecordsModel from "@/db/models/Records";

// GET API RECORD PATIENTS
export async function GET(request: Request) {
  const patientId = request.headers.get("id") as string;
  const patients = await RecordsModel.getRecordByPatientId(patientId);
  return Response.json(patients);
}
