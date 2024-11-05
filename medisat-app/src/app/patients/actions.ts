declare global {
  interface Window {
    snap: {
      pay: (token: string, options: {
        onSuccess: (result: any) => void,
        onPending: (result: any) => void,
        onError: (result: any) => void,
        onClose: () => void,
      }) => void;
    }
  }
}

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function setCookieOauth(token: string) {
  cookies().set("Authorization", `Bearer ${token}`);
  redirect("/patients")
}

export async function login(formData: FormData) {
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (!body.email) {
    redirect("/patients/auth/login?alert=Email tidak boleh kosong")
  }

  if (!body.password) {
    redirect("/patients/auth/login?alert=Password tidak boleh kosong")
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/patients/login",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = (await response.json()) as {
    accessToken?: string;
    message?: string;
  };

  if (!response.ok) {
    redirect(`/patients/auth/login?alert=${data.message}`);
  }

  cookies().set("Authorization", `Bearer ${data.accessToken}`);

  redirect("/patients/");
}

export async function register(formData: FormData) {
  const body = {
    nik: formData.get("nik"),
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    birthDate: formData.get("birthDate"),
    address: formData.get("address"),
    phoneNumber: formData.get("phoneNumber"),
  };

  if (!body.email) {
    redirect("/patients/auth/register?alert=Email tidak boleh kosong")
  }

  if (!body.password) {
    redirect("/patients/auth/register?alert=Password tidak boleh kosong")
  }

  if (!body.name) {
    redirect("/patients/auth/register?alert=Nama tidak boleh kosong")
  }

  if (!body.nik) {
    redirect("/patients/auth/register?alert=NIK tidak boleh kosong")
  }

  if (!body.birthDate) {
    redirect("/patients/auth/register?alert=Tanggal lahir tidak boleh kosong")
  }

  if (!body.address) {
    redirect("/patients/auth/register?alert=Alamat tidak boleh kosong")
  }

  if (!body.phoneNumber) {
    redirect("/patients/auth/register?alert=Nomor telepon tidak boleh kosong")
  }


  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/patients/register",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    }
  );
  await response.json();

  if (!response.ok) {
    redirect("/patients/auth/register?alert=Email sudah terdaftar");
  }

  redirect("/patients/auth/login?alert=Account created successfully");
}

export const handleLogout = async () => {
  cookies().delete("Authorization");
  redirect("/patients/auth/login");
};

export async function handleSchedule(formData: FormData) {
  // Get form data
  const doctorId = formData.get("doctorId");
  const appointmentDate = formData.get("appointmentDate");
  const timeRange = formData.get("timeRange");

  if (!doctorId) {
    redirect("/patients/schedule?alert=Undefined")
  }

  if (!timeRange) {
    redirect("/patients/schedule?alert=Mohon untuk memilih jadwal terlebih dahulu")
  }

  if (!appointmentDate) {
    redirect("/patients/schedule?alert=Mohon untuk memilih tanggal terlebih dahulu")
  }

  // Format untuk API
  const body = {
    doctorId: doctorId.toString(),
    bookDate: appointmentDate.toString(),
    schedule: timeRange.toString(),
  };

  // Kirim ke API

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/patients/insertRecord",
    {
      method: "POST",
      headers: {
        Cookie: cookies().toString(),
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create appointment");
  }

  const data = await response.json();

  // Revalidate dan redirect
  revalidatePath("/patients");
  redirect("/patients");

}

export const handlePayment = async (formData: FormData) => {
  try {
    const body = {
      _id: formData.get("id")
    }

    // console.log(body, "body");

    const response = await fetch("http://localhost:3000/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server response:', errorText);
      throw new Error(`Payment failed with status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Payment processing error:', error);
    throw error;
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