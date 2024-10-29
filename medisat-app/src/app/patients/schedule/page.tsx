import CardSchedule from "@/components/CardSchedule";
import { Label } from "@/components/ui/label";

export default function Schedule(){
    return(
        <>
            <div>
                <div className="w-full flex flex-wrap justify-center py-5">
                    <Label>JADWAL DOKTER PRAKTEK</Label>
                </div>
                <CardSchedule/>
                <CardSchedule/>
                <CardSchedule/>
                <CardSchedule/>
                <CardSchedule/>
            </div>
        </>
    )
}