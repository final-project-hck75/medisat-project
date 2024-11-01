'use server'

import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function getMedicalHistory() {
    try {
        const response = await fetch(`${baseUrl}api/patients/records`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Cookie: cookies().toString(),
            },
        });
    }
    catch (error) {
        console.log(error);
    }
}

export async function updateRekamMedis(recordId: string, data: any) {
    try {
        const response = await fetch(`${baseUrl}api/doctors/updateRecord/${recordId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Cookie: cookies().toString(),

            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Gagal mengupdate rekam medis");
        }
    } catch (error) {
        console.log(error);
    }
}