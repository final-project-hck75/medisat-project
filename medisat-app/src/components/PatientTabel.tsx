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


export default function PatientTabel() {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-emerald-500">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Daftar Pasien
                        </h1>

                        <div>
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
                                        <Link href="/patient/detail">
                                            <TableCell className="font-medium">Fani</TableCell>
                                        </Link>
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
                </div>
            </div>
        </>
    )
}