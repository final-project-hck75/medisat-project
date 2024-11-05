'use server'

import { revalidateTag } from "next/cache";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export async function login(token: string) {
    cookies().set("Authorization", `Bearer ${token}`)
}

// export async function logout() {
//     cookies().delete("Authorization")
//     redirect("/doctors/auth/login");
// }

export async function getPatientList(){
    try {
        console.log("masuk ke getPatientList");
        
        const response = await fetch(`${baseUrl}api/doctors/records`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Cookie: cookies().toString(),
            },
            next: {tags: ['getPatientList']}
        });

        console.log(response, "response========");

        if (!response.ok) {
            throw new Error("Gagal mengambil daftar pasien");
        }

        return response.json();
        
    } catch (error) {
        
    }
}

export async function getMedicalHistory(patientId: string) {
    try {
        console.log(patientId, "patientId di actions======");
        
        const response = await fetch(`${baseUrl}api/doctors/records/${patientId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Cookie: cookies().toString(),
            },
        });

        if (!response.ok) {
            throw new Error("Gagal mengambil daftar pasien");
        }

        const pasien = await response.json();
        return pasien;
    }
    catch (error) {
        console.log(error);
    }
}

export async function updateRekamMedis(recordId: string|null, form: Object){
    
    try {
        if (!recordId) {
            throw new Error("Record ID tidak valid");
        }

        const response = await fetch(`${baseUrl}api/doctors/updateRecord/${recordId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Cookie: cookies().toString(),

            },
            body: JSON.stringify(form),
        });

        if (!response.ok) {
            throw new Error("Gagal mengupdate rekam medis");
        }

        // revalidateTag('getPatientList');
        // redirect('/doctors');
    } catch (error) {
        console.log(error);
    }
}

export async function handleForm(formData: FormData) {
    'use server'

    const recordId = searchParams.recordId;

    // console.log(recordId, "param ========");


    // Update using server component
    const formRecord = {
        name: formData.get('name'),
        date: formData.get('date'),
        symptom: formData.get('symptom'),
        disease: formData.get('disease'),
        recipe: formData.get('recipe'),
        notes: formData.get('notes')
    }

    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('patientId', patientId);
    urlSearchParams.set('name', patientName);
    urlSearchParams.set('date', bookDate);
    urlSearchParams.set('recordId', recordId);

    if (!formRecord.name) {
        urlSearchParams.set('error', 'Nama tidak boleh kosong')
        redirect('/doctors/records?' + urlSearchParams.toString())
    }
    if (!formRecord.date) {
        urlSearchParams.set('error', 'Tanggal tidak boleh kosong')
        redirect('/doctors/records?' + urlSearchParams.toString())
    }
    if (!formRecord.symptom) {
        urlSearchParams.set('error', 'Gejala tidak boleh kosong')
        redirect('/doctors/records?' + urlSearchParams.toString())
    }
    if (!formRecord.disease) {
        urlSearchParams.set('error', 'Penyakit tidak boleh kosong')
        redirect('/doctors/records?' + urlSearchParams.toString())
    }
    if (!formRecord.recipe) {
        urlSearchParams.set('error', 'Resep tidak boleh kosong')
        redirect('/doctors/records?' + urlSearchParams.toString())
    }
    if (!formRecord.notes) {
        urlSearchParams.set('error', 'Catatan tidak boleh kosong')
        redirect('/doctors/records?' + urlSearchParams.toString())
    }

    updateRekamMedis(recordId, formRecord)
    revalidateTag('getPatientList')
    redirect('/doctors')
}