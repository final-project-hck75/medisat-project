"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function login(formData: FormData) {
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

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
    redirect("/patients/auth/login");
  }

  cookies().set("Authorization", `Bearer ${data.accessToken}`);

  redirect("/patients/medis");
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

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/patients/register",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(body, "BODY")

  await response.json();

  if (!response.ok) {
    redirect("/patients/auth/register");
  }

  redirect("/patients/auth/login?alert=Account created successfully");
}

export const handleLogout = async () => {
  cookies().delete("Authorization");
  redirect("/patients/auth/login");
};

export async function handleSchedule(formData: FormData) {
  try {
    // Get form data
    const doctorId = formData.get("doctor");
    const formattedSchedule = formData.get("formattedSchedule");
    const appointmentDate = formData.get("appointmentDate");
    const timeRange = formData.get("timeRange");

    if (!doctorId || !formattedSchedule || !appointmentDate || !timeRange) {
      throw new Error("Missing required fields");
    }

    // Format untuk API
    const appointmentData = {
      doctorId: doctorId.toString(),
      bookDate: formattedSchedule.toString(),
    };

    // Kirim ke API

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/doctors/insertRecord",
      {
        method: "POST",
        headers: {
          Cookie: cookies().toString(),
        },
        body: JSON.stringify(appointmentData),
      }
    );

    console.log(cookies().toString(), "COOKIES")

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create appointment");
    }

    const data = await response.json();

    // Revalidate dan redirect
    revalidatePath("/patients/medis");
    redirect("/patients/medis");
  } catch (error) {
    console.error("Schedule error:", error);
    throw error;
  }
}
