import Doctor, { DoctorSchema } from "@/db/models/doctors";
import { compareSync } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";


const LoginSchema = DoctorSchema.pick({
    employeeId:true,
    password:true
})

export async function POST(request: NextRequest) {
    const {employeeId, password} = await request.json()
    try {
        LoginSchema.parse({employeeId, password})
        // console.log("<<<<<<");
        
        const doctor = await Doctor.findByEmployeeId(employeeId)


        if (!doctor?.employeeId) {
            throw{message:"Invalid Employee Id / Password", status:401}
        }

        if (!compareSync(password, doctor.password)) {
            throw{message:"Invalid Employee Id / Password", status:401}
        }

        const payload = {
            _id: doctor._id.toString(),
            role: "doctor"
        }

        const access_token = jwt.sign(payload, process.env.JWT_SECMEDI)

        cookies().set('Authorization', `Bearer ${access_token}`)

        return NextResponse.json(
            {access_token},
            {status:200}
        )
    } catch (error) {
        console.log(error);
        return error
    }
}