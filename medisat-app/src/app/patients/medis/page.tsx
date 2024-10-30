import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function () {
    return (
        <>
            <div>
                <div className="flex flex-wrap justify-between items-center my-5">
                    {/* <Sidebar/> */}
                    <h1>REKAM MEDIS</h1>
                    <Button variant={"auth"}>Logout</Button>
                </div>
                <div className="flex flex-wrap justify-center">
                    <Link href={"/patients/schedule/"}>Antrian baru</Link>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

                </div>
            </div>
        </>
    )
}