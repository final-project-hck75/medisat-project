import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

export default function () {
    return (
        <>
            <div>
                <div className="flex flex-wrap justify-between items-center my-5">
                    {/* <Sidebar/> */}
                    <h1>REKAM MEDIS</h1>
                    <Button variant={"auth"}>Logout</Button>
                </div>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}