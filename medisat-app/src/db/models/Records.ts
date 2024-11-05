import { ObjectId } from "mongodb";
import { db } from "../config";

type RecordTypeToday = {
  doctorId: string;
  bookDate: string;
};

class RecordsModel {
  static collection() {
    return db.collection("records");
  }

  static async getRecordHistoryPatientIdFromParams(patientId: string) {
    const pipeline = [
      {
        $match: {
          patientId: new ObjectId(patientId),
          status:{ $in : ["paid", "done"] }
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
        $unwind: "$patient",
      },
      {
        $project: {
          "patient.password": 0,
        }
      },
      {
        $sort: { createdAt: -1 },
      },
    ];
    const record = await this.collection().aggregate(pipeline).toArray();
    return record;
  }

  static async getRecordByPatientId(patientId: string) {
    const record = await this.collection()
      .find({ patientId: new ObjectId(patientId) })
      .toArray();
    return record;
  }

  static async getRecordByDoctorIdToday(doctorId: string) {

    // console.log(doctorId, "ini di models ");
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${date}`;
    console.log(formattedDate, "formattedDate");


    const pipeline = [
      {
        $match:
        {
          doctorId: new ObjectId(
            doctorId
          ),
          status: "booked",
          bookDate: formattedDate,
        },
      },
      {
        $lookup:
        {
          from: "patients",
          localField: "patientId",
          foreignField: "_id",
          as: "patient",
        },
      },
      {
        $unwind:
        {
          path: "$patient",
        },
      }
    ]
    const records = await this.collection().aggregate(pipeline).toArray();
    return records;
  }

  static async getRecordHistoryPatientId(patientId: string) {
    console.log(new ObjectId(patientId));

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
    // const record = await this.collection()
    //   .find({ patientId: new ObjectId(patientId) })
    //   .toArray();
    return record;
  }
}

export default RecordsModel;
