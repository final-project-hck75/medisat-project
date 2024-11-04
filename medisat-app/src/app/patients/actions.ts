declare global {
  interface Window {
    snap: {
      pay: (token: string, options: { onSuccess: (result: any) => void }) => void;
    }
  }
}

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function login(formData: FormData) {
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if(!body.email) {
    redirect("/patients/auth/login?alert=Email tidak boleh kosong")
  }

  if(!body.password) {
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

  if(!body.email) {
    redirect("/patients/auth/register?alert=Email tidak boleh kosong")
  }

  if(!body.password) {
    redirect("/patients/auth/register?alert=Password tidak boleh kosong")
  }

  if(!body.name) {
    redirect("/patients/auth/register?alert=Nama tidak boleh kosong")
  }

  if(!body.nik) {
    redirect("/patients/auth/register?alert=NIK tidak boleh kosong")
  }

  if(!body.birthDate) {
    redirect("/patients/auth/register?alert=Tanggal lahir tidak boleh kosong")
  }

  if(!body.address) {
    redirect("/patients/auth/register?alert=Alamat tidak boleh kosong")
  }

  if(!body.phoneNumber) {
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
  console.log(body, "BODY");

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

    if(!doctorId) {
      redirect("/patients/schedule?alert=Undefined")
    }

    if(!timeRange) {
      redirect("/patients/schedule?alert=Mohon untuk memilih jadwal terlebih dahulu")
    }

    if(!appointmentDate) {
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
    revalidatePath("/patients/medic");
    redirect("/patients/medic");
  
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