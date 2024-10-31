import PatientModel from "@/db/models/Patients";

export async function POST(request: Request) {
  try {
    const { nik, name, email, password, birthDate, address, phoneNumber } =
      await request.json();
    await PatientModel.create({
      nik,
      name,
      email,
      password,
      birthDate,
      address,
      phoneNumber,
    });

    return Response.json(
      { message: "Patient created successfully" },
      { status: 201 }
    );
  } catch (rawError: unknown) {
    const error = rawError as { message: string; status: number };
    return Response.json({ message: error.message }, { status: error.status });
  }
}
