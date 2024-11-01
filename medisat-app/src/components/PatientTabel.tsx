'use server'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"
import Link from "next/link"
import { getPatientList } from "@/app/doctors/actions"
import { cookies } from "next/headers"

export default async function PatientTabel() {

    // const auth = cookies().get('Authorization')

    // console.log(auth, "auth ==========");

    // const doctorId = request.headers("id")
    
    // const patients = await getPatientList()

    return (
        <>
            <div className="flex flex-col items-center justify-center w-screen mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow w-screen border md:mt-0 sm:max-w-md xl:p-0 border-emerald-500">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Daftar Pasien
                        </h1>

                        <Table>
                            <TableCaption>List pasien anda akan diupdate, tolong diupdate secara berkala</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Nama</TableHead>
                                    <TableHead>Jadwal</TableHead>
                                    <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <Link href="/patient/detail">
                                            Fani
                                        </Link>
                                    </TableCell>
                                    <TableCell>Jum'at 09:00 - 12:00</TableCell>
                                    <TableCell className="text-right">
                                        <Link href="/doctors/records">
                                            <Button variant="auth">Tangani</Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Ridwan</TableCell>
                                    <TableCell>Senin 12:00 - 15:00</TableCell>
                                    <TableCell className="text-right">
                                        <Link href="/doctors/records">
                                            <Button variant="auth">Tangani</Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div >
        </>
    )
}