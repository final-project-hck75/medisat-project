import { ObjectId } from "mongodb";
import { db } from "../config";

class RecordsModel {
  static collection() {
    return db.collection("records");
  }

  static async getRecordByPatientId(patientId: string) {
    const record = await this.collection()
      .find({ patientId: new ObjectId(patientId) })
      .toArray();
    // const record = await this.collection().aggregate(pipeline).toArray();
    // console.log("REDOCRS");
    return record;
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
        $unwind: "$patient",
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
