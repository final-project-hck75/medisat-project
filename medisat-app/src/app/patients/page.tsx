"use client"

import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RecordType } from "@/app/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "./loading";


export default function Medis() {

    const searchParams = useSearchParams()
    const order_id = searchParams.get("order_id")
    const status_code = searchParams.get("status_code")
    const [record, setRecord] = useState<RecordType[]>([]);
    const [show, setShow] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        if (status_code === "200") {
            fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/payments/${order_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            }).then(() => {
                router.push("/patients")
            })
        }
    }, [status_code, order_id])

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

    useEffect(
        () => {
          let timer1 = setTimeout(() => setShow(true), 3 * 1000);
    
          return () => {
            clearTimeout(timer1);
          };
        },
        [show]
      );
    

    return (
        <div>
            
            <div className="flex flex-wrap justify-center p">
                <div>
                    {show? record.length === 0 ? <h1 className="text-xl font-bold text-emerald-700 text-center">Selamat datang di Medisat</h1> : record.map(el => (
                        <Card el={el} key={el._id} />
                    )) : <Loading/>}

                </div>
            </div>
        </div>
    );
}