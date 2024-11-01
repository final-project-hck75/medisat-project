import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { DoctorType } from "@/app/types";

export default function CardSchedule({el}:{el:DoctorType}) {
    return (
        <>
            <div className="flex flex-wrap justify-between bg-emerald-50 rounded-xl py-5 my-3">
                <div className="w-1/2 flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <img src={el.image}className="w-20 h-20"/>
                    </div>
                    <div className="w-full flex justify-center">
                        <p>{el.name}</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <p>{el.polyclinic}</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-wrap justify-center">
                    <div className="w-full flex flex-wrap justify-center items-center">
                        <Label>Jadwal Praktek</Label>
                    </div>
                    <div className="w-full flex flex-wrap justify-center">
                        {el.schedule.map((el,i)=>(
                            <Label key={i}>{el}</Label>
                        ))}
                    </div>
                    <div>
                        <Button variant={"ghost"} className="text-blue-600 hover:text-xl hover:text-blue-600 rounded-xl">Jadwalkan sekarang!</Button>
                    </div>
                </div>
            </div>
        </>
    )
}