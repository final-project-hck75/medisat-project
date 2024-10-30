import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"


export default function Records() {
    return (
        <>
            <div className="flex flex-row mt-48">
                <div className="flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-gray-200">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div>
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Rekam Medis
                                </h1>
                                <div>
                                    <div>
                                        <Label htmlFor="patientId">Nama Pasien</Label>
                                        <Input type="text" />
                                    </div>

                                    <div>
                                        <Label htmlFor="address">Alamat</Label>
                                        <Input type="password" />
                                    </div>

                                    <div>
                                        <Label htmlFor="symptom">Gejala</Label>
                                        <Textarea placeholder="Tuliskan gejala pasien" />
                                    </div>

                                    <div>
                                        <Label htmlFor="disease">Diagnosa</Label>
                                        <Input type="text" placeholder="Diagnosa" />
                                    </div>
                                    <Button className="mt-5" variant="auth">Simpan</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-gray-200">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div>
                                <h1 className="item-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Resep Obat
                                </h1>

                                <div>
                                    <div>
                                        <Label htmlFor="symptom">Resep Obat</Label>
                                        <Textarea placeholder="Tuliskan resep obat" />
                                    </div>

                                    <div>
                                        <Label htmlFor="disease">Keterangan</Label>
                                        <Input type="text" placeholder="Keterangan" />
                                    </div>
                                    <Button className="mt-5" variant="auth">Simpan</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}