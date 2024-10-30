export default function Card() {
    return (
        <>
            <div className="bg-white rounded-xl border border-solid border-emerald-800 p-3 my-2">
                <div className="flex flex-wrap justify-between ">
                    <p>Status Booked</p>
                    <p>Tanggal Pemeriksaan 10/10/2024</p>
                </div>
                <div className="flex flex-wrap justify-between ">
                    <div>
                        <div>
                            <p>Penyakit yang diderita</p>
                            <p>Demam</p>

                        </div>
                        <div>
                            <p>Keluhan</p>
                            <p>Meriang</p>

                        </div>
                        <div>
                            <p>Dokter yang menangani</p>
                            <p>Dr. Abdul Hamid</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Resep Obat</p>
                            <p>Obat 1</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}