"use client"

import { DoctorType } from "@/app/types";
import CardSchedule from "@/components/CardSchedule";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

export default function Schedule(){

    const [schedule, setSchedule] = useState<DoctorType[]>([]);

    async function getSchedule(){
        const schedules = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/doctors",{
            method: "GET",
            cache: "no-store",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        if(!schedules.ok){
            throw new Error(`API Request failed : ${schedules.status}`);
        }
        const response = await schedules.json();
        return response
    }

    useEffect(() => {
        getSchedule().then(setSchedule)
    }, [])

    return(
        <>
            <div>
                <div className="w-full flex flex-wrap justify-center py-5">
                    <Label>JADWAL DOKTER PRAKTEK</Label>
                </div>
                {schedule.map(el=>(
                    <CardSchedule key={el._id} el={el}/>
                ))}
            </div>
        </>
    )
}