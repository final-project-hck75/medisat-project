"use client"

import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { handleLogout } from "./actions";
import { RecordType } from "@/app/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation";
import { revalidatePath } from "next/cache";
const logo = require('@/app/assets/MEDISAT.png')


export default function Medis() {

    const searchParams = useSearchParams()
    const order_id = searchParams.get("order_id")
    const status_code = searchParams.get("status_code")
    const [record, setRecord] = useState<RecordType[]>([]);


    if (status_code === "200") {
        fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/payments/${order_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async function getRecord() {
        const records = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/patients/records", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            cache: "no-store"
        })
        if (!records.ok) {
            throw new Error(`API Request failed : ${records.status}`);
        }

        const response = await records.json();
        return response
    }

    useEffect(() => {
        getRecord().then(setRecord)
    }, [])



    return (
        <div>
            <div className="flex flex-wrap justify-between items-center my-5">
                {/* <Sidebar/> */}
                <Image
                    src={logo}
                    alt="MEDISAT Logo"
                    width={150}
                    height={50}
                />
                <form action={handleLogout}>
                    <Button variant={"auth"}>Logout</Button>

                </form>
            </div>
            <div className="flex flex-wrap justify-center">
                <div>
                    <div className="flex flex-wrap justify-center gap-5">
                    <div className="flex flex-wrap justify-center">
          <Link
            href={"/patients/geminiAI/"}
            className="text-xl font-bold text-blue-500 hover:text-blue-700"
          >
                Tanya Medisat
          </Link>
        </div>
                        <div>
                            <Link href={"/patients/schedule/"} className="text-xl font-bold text-blue-500 hover:text-blue-700">Antrian baru</Link>
                        </div>

                    </div>
                    {record.map(el => (
                        <Card el={el} key={el._id} />
                    ))}

                </div>
            </div>
        </div>
    );
}