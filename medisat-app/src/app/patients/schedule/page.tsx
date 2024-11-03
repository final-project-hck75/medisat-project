"use client"

import { DoctorType } from "@/app/types";
import CardSchedule from "@/components/CardSchedule";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState, useEffect } from "react";
import { handleSchedule } from "../actions";

export default function Schedule() {
    const [schedule, setSchedule] = useState<DoctorType[]>([]);

    async function getSchedule() {
        const schedules = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/doctors", {
            method: "GET",
            cache: "no-store",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (!schedules.ok) {
            throw new Error(`API Request failed : ${schedules.status}`);
        }
        const response = await schedules.json();
        return response;
    }

    useEffect(() => {
        getSchedule().then(setSchedule);
    }, []);

    return (
        <div>
            <div className="w-full flex flex-wrap justify-center py-5">
                <Label className="text-xl font-bold">JADWAL DOKTER PRAKTEK</Label>
            </div>
            {schedule.map(el => (
                <form action={handleSchedule} className="my-3">
                    {/* <input type="text" name="doctorId" value={el._id} /> */}
                        <div key={el._id} className="flex flex-wrap justify-between bg-emerald-50 rounded-xl p-5">
                            <div className="flex items-start space-x-4 w-full">
                                {/* <RadioGroupItem value={el._id} id={el._id} /> */}
                                <div className="flex-1">
                                    <CardSchedule key={el._id} el={el} />
                                </div>
                            </div>
                            <div className="w-full flex justify-end mt-4">
                                <Button
                                    type="submit"
                                    variant="ghost"
                                    className="text-blue-600 hover:text-xl hover:text-blue-600 rounded-xl"
                                >
                                    Jadwalkan sekarang!
                                </Button>
                            </div>
                        </div>
                </form>
            ))}
        </div>
    );
}