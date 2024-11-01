'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function login(token: string) {
    cookies().set("Authorization", `Bearer ${token}`)
}

export async function logout() {
    cookies().delete("Authorization")
    redirect("/doctors/auth/login");
}

export async function getPatientList(doctorId: string){
    try {
        const response = await fetch(`${baseUrl}api/doctors/${doctorId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        
    }
}

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

export async function updateRekamMedis(
    // recordId: string, 
    formData: FormData) {
    try {
        const date = formData.get('date')
        console.log(date);
        
        // const response = await fetch(`${baseUrl}api/doctors/updateRecord/${recordId}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Cookie: cookies().toString(),

        //     },
        //     body: JSON.stringify(data),
        // });

        // if (!response.ok) {
        //     throw new Error("Gagal mengupdate rekam medis");
        // }
    } catch (error) {
        console.log(error);
    }
}