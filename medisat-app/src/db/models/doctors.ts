import { hash } from "bcryptjs";
import { db } from "../config";
import { ObjectId } from "mongodb";
import { z } from "zod";

export const DoctorSchema = z.object({
    employeeId:z.string({message:"Employee Id is required"}),
    name:z.string({message:"Name is required"}),
    password:z.string({message:"Password is required"}),
    image:z.string({message:"Image is required"}),
    phoneNumber:z.string({message:"Phone Number is required"}),
    polyclinic:z.string({message:"Polyclinic is required"}),
    schedule:z.array(z.string({message:"Schedule is required"})),
    createdAt:z.date().default(new Date()).optional(),
    updatedAt:z.date().default(new Date()).optional()
})

export type DoctorType = z.infer<typeof DoctorSchema>

export const RecordSchema = z.object({
    name:z.string({message:"Name is required"}),
    bookDate:z.string({message:"Book Date is required"}),
    status:z.string({message:"Status is required"}),
    symptom:z.string({message:"Symptom is required"}),
    disease:z.string({message:"Disease is required"}),
    recipe:z.string({message:"Recipe is required"}),
    notes:z.string().optional(),
    checkupDate:z.string({message:"Checkup Date is required"}),
    patientId:z.string({message:"Patient Id is required"}),
    doctorId:z.string({message:"Doctor Id is required"}),
    createdAt:z.date().default(new Date()).optional(),
    updatedAt:z.date().default(new Date()).optional()
})

export type RecordType = z.infer<typeof RecordSchema>


export default class Doctor {
    static collDoc = db.collection<DoctorType>('doctors')
    static collRec = db.collection<RecordType>('records')

    static async getAll(){
        const doctors = await this.collDoc.find().toArray();
        return doctors
    }

    static async insertRecord(newRecord:RecordType){
        await RecordSchema.parseAsync(newRecord);

        const data = {
            ...newRecord,
            status:"done"
        }
        data.createdAt = data.updatedAt = new Date();
        await this.collRec.insertOne(data)
    }

    static async findByEmployeeId(id:string){
        const doctor = await this.collDoc.findOne({
            employeeId: id
        })

        return doctor
    }

    static async newDoctor(newDoctor:DoctorType){
        await DoctorSchema.parseAsync(newDoctor);

        const data = {
            ...newDoctor,
            password: await hash(newDoctor.password, 10)
        }
        data.createdAt = data.updatedAt = new Date()
        await this.collDoc.insertOne(data);
    }
}