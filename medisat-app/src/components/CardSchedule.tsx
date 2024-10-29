import { Button } from "./ui/button";
import { Label } from "./ui/label";

export default function CardSchedule() {
    return (
        <>
            <div className="flex flex-wrap justify-between bg-emerald-50 rounded-xl py-5 my-3">
                <div className="w-1/2 flex flex-wrap justify-center">
                    <div className="w-full flex justify-center">
                        <img src="https://cdn1-production-images-kly.akamaized.net/2PH1A8V07tl-QWHVTijc4Oxwb9g=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3257940/original/021306300_1601874324-pexels-gustavo-fring-4173251.jpg" className="w-20 h-20"/>
                    </div>
                    <div className="w-full flex justify-center">
                        <p>Dr. Andreas</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <p>Poli Umum</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-wrap justify-center">
                    <div className="w-full flex flex-wrap justify-center items-center">
                        <Label>Jadwal Praktek</Label>
                    </div>
                    <div className="w-full flex flex-wrap justify-center">
                        <Label>
                            Senin, 09.00 - 12.00 <br/>
                            Senin, 19.00 - 21.00</Label>
                    </div>
                    <div>
                        <Button variant={"ghost"} className="text-blue-600 hover:text-xl hover:text-blue-600 rounded-xl">Jadwalkan sekarang!</Button>
                    </div>
                </div>
            </div>
        </>
    )
}