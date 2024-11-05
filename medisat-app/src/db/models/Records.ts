import { ObjectId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

export const RecordSchema = z.object({
    _id : z.instanceof(ObjectId).optional(),
    bookDate:z.string({message:"Book Date is required"}),
    status:z.string({message:"Status is required"}),
    symptom:z.string({message:"Symptom is required"}).optional(),
    disease:z.string({message:"Disease is required"}).optional(),
    recipe:z.string({message:"Recipe is required"}).optional(),
    notes:z.string().optional(),
    checkupDate:z.string({message:"Checkup Date is required"}).optional(),
    patientId:z.instanceof(ObjectId,{message:"Patient Id is required"}),
    doctorId:z.instanceof(ObjectId,{message:"Doctor Id is required"}),
    createdAt:z.date().default(new Date()).optional(),
    updatedAt:z.date().default(new Date()).optional()
})

class RecordsModel {
  static collection() {
    return db.collection("records");
  }

  static async getRecordByPatientId(patientId: string) {
    const pipeline = [
      {
        $match: {
          patientId: new ObjectId(patientId),
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "patientId",
          foreignField: "_id",
          as: "patient",
        },
      },
      {
        $lookup: {
          from: "doctors",
          localField: "doctorId",
          foreignField: "_id",
          as: "doctor",
        },
      },
      {
        $unwind: "$patient",
      },
      {
        $unwind: "$doctor",
      },
    ];
    const record = await this.collection().aggregate(pipeline).toArray();
    return record;
  }

  static async getRecordByDoctorIdToday(doctorId: string) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${date}`;    
    const pipeline = [
      {
        $match: {
          doctorId: new ObjectId(doctorId),
          status: "booked",
          bookDate: formattedDate,
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "patientId",
          foreignField: "_id",
          as: "patient",
        },
      },
      {
        $unwind: {
          path: "$patient",
        },
      },
      {
        $project:{
          "patient.password": false,
        }
      },
    ];
    const records = await this.collection().aggregate(pipeline).toArray();
    return records;
  }

  static async getRecordHistoryPatientId(patientId: string) {

    const pipeline = [
      {
        $match: {
          patientId: new ObjectId(patientId),
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "patientId",
          foreignField: "_id",
          as: "patient",
        },
      },
      {
        $lookup: {
          from: "doctors",
          localField: "doctorId",
          foreignField: "_id",
          as: "doctor",
        },
      },
      {
        $unwind: "$patient",
      },
      {
        $unwind: "$doctor",
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $limit: 3,
      },
    ];
    const record = await this.collection().aggregate(pipeline).toArray();
    return record;
  }

  static async getRecordHistoryPatientIdFromParams(patientId: string){
    const pipeline = [
      {
        $match: {
          patientId: new ObjectId(patientId),
          status: { $in: ["paid", "done"] },
        },
      },
      {
        $lookup: {
          from: "patients",
          localField: "patientId",
          foreignField: "_id",
          as: "patient",
        },
      },
      {
        $lookup: {
          from: "doctors",
          localField: "doctorId",
          foreignField: "_id",
          as: "doctor",
        },
      },
      {
        $unwind: "$patient",
      },
      {
        $unwind: "$doctor",
      },
      {
        $project:{
          "patient.password": false,
        }
      },
      {
        $project:{
          "doctor.password": false,
        }
      },
      {
        $sort: { createdAt: -1 },
      },
    ];
    const record = await this.collection().aggregate(pipeline).toArray();
    return record;
  }
}

export default RecordsModel;
