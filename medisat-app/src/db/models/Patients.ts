import { z } from "zod";
import { db } from "../config";
import { hashPassword } from "@/helpers/bcrypt";
import { PatientType } from "@/app/types";

const PatientSchema = z.object({
  nik: z.string().min(5),
  name: z.string().min(5),
  email: z.string().email().min(5),
  password: z.string().min(6),
  birthDate: z.string().min(5),
  address: z.string().min(5),
  phoneNumber: z.string().min(5),
});

// export type PatientType = z.infer<typeof PatientSchema>;

class PatientModel {
  static collection() {
    return db.collection("patients");
  }

  static async create(patient: PatientType) {
    await PatientSchema.parseAsync(patient);
    patient.password = hashPassword(patient.password);

    const existingPatient = await this.collection().findOne({
      $or: [{ email: patient.email }, { nik: patient.nik }],
    });

    if (existingPatient)
      throw { message: "Email or NIK already exists", status: 400 };
    return await this.collection().insertOne(patient);
  }

  static async findByEmail(email: string) {
    return await this.collection().findOne({ email });
  }
}

export default PatientModel;
