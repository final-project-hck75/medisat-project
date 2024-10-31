// MedicalRecordCard.js

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function MedicalRecordCard() {
    return (
        <div className="w-full bg-white rounded-lg shadow border p-6 dark:bg-gray-800 border-gray-200">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                Rekam Medis dan Resep Obat
            </h1>
            <div className="space-y-4 mt-4">
                <div>
                    <Label htmlFor="patientId">Nama Pasien</Label>
                    <Input type="text" id="patientId" />
                </div>
                <div>
                    <Label htmlFor="address">Alamat</Label>
                    <Input type="text" id="address" />
                </div>
                <div>
                    <Label htmlFor="symptom">Gejala</Label>
                    <Textarea id="symptom" placeholder="Tuliskan gejala pasien" />
                </div>
                <div>
                    <Label htmlFor="disease">Diagnosa</Label>
                    <Input type="text" id="disease" placeholder="Diagnosa" />
                </div>
            </div>

        
            <div className="border-t border-gray-200 my-4"></div>

         
            <div className="space-y-4">
                <div>
                    <Label htmlFor="prescription">Resep Obat</Label>
                    <Textarea id="prescription" placeholder="Tuliskan resep obat" />
                </div>
                <div>
                    <Label htmlFor="note">Keterangan</Label>
                    <Input type="text" id="note" placeholder="Keterangan" />
                </div>
            </div>
            <Button className="mt-6 w-full">Simpan</Button>
        </div>
    );
}
