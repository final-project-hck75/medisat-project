import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { handleLogout } from "../actions";

export default function () {
    return (
        <>
            <div>
                <div className="flex flex-wrap justify-between items-center my-5">
                    {/* <Sidebar/> */}
                    <h1>REKAM MEDIS</h1>
                    <form action={handleLogout}>
                    <Button variant={"auth"}>Logout</Button>

                    </form>
                </div>
                <div className="flex flex-wrap justify-center">
                    <Link href={"/patients/schedule/"} className="text-xl font-bold text-blue-500 hover:text-blue-700">Antrian baru</Link>
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