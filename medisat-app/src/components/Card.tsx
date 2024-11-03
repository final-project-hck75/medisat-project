
import { handlePayment } from "@/app/patients/actions";
import { RecordType } from "@/app/types";

export default function Card({ el }: { el: RecordType }) {

    return (
        <>
            <div className="bg-white rounded-xl border border-solid border-emerald-800 p-3 my-2">
                <form action={handlePayment}>
                    <div className="flex flex-wrap justify-between ">
                        <input type="hidden" name="id" value={el._id} />
                        <div>
                            <div className="p-3 w-1/3">
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="text-emerald-700">{el.status}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Biaya</p>
                                <p className="text-emerald-700">Rp. {el.price}</p>
                            </div>
                        </div>

                        <div className="p-3 w-2/3 flex flex-wrap justify-end">
                            <p className="text-sm text-gray-500">Tanggal Pemeriksaan</p>
                            <p className="text-emerald-700">{el.bookDate}</p>

                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between ">
                        <div>
                            <div className="p-3">
                                <p className="text-sm text-gray-500">Penyakit yang diderita</p>
                                <p className="text-emerald-700">{el.disease}</p>

                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-500">Keluhan</p>
                                <p className="text-emerald-700">{el.symptom}</p>

                            </div>
                            <div className="p-3">
                                <p className="text-sm text-gray-500">Dokter yang menangani</p>
                                <p className="text-emerald-700">Nama Dokter disini</p>
                            </div>
                        </div>
                        <div>
                            <div className="p-3">
                                <p className="text-sm text-gray-500">Resep Obat</p>
                                <p className="text-emerald-700">{el.recipe}</p>
                            </div>
                            <button type="submit" className="bg-emerald-700 text-white px-3 py-2 rounded-md">Bayar</button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}