export default function Card() {
    return (
        <>
            <div className="bg-white rounded-xl border border-solid border-emerald-800 p-3 my-2">
                <div className="flex flex-wrap justify-between ">
                    <div className="p-3 w-1/3">
                        <p className="text-sm text-gray-500">Status</p>
                        <p className="text-emerald-700">Booked</p>

                    </div>
                    <div className="p-3 w-2/3 flex flex-wrap justify-end">
                        <p className="text-sm text-gray-500">Tanggal Pemeriksaan</p>
                        <p className="text-emerald-700">10/10/2024</p>

                    </div>
                </div>
                <div className="flex flex-wrap justify-between ">
                    <div>
                        <div className="p-3">
                            <p className="text-sm text-gray-500">Penyakit yang diderita</p>
                            <p className="text-emerald-700">Demam</p>

                        </div>
                        <div className="p-3">
                            <p className="text-sm text-gray-500">Keluhan</p>
                            <p className="text-emerald-700">Meriang</p>

                        </div>
                        <div className="p-3">
                            <p className="text-sm text-gray-500">Dokter yang menangani</p>
                            <p className="text-emerald-700">Dr. Abdul Hamid</p>
                        </div>
                    </div>
                    <div>
                        <div className="p-3">
                            <p className="text-sm text-gray-500">Resep Obat</p>
                            <p className="text-emerald-700">Obat 1</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}