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
}

export default RecordsModel;
