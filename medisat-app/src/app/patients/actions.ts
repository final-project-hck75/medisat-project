"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // console.log(body);
  
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/patients/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
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

export async function register(formData:FormData){
  const body = {
    nik: formData.get("nik"),
    name : formData.get("name"),
    email : formData.get("email"),
    password : formData.get("password"),
    birthDate : formData.get("birthDate"),
    address : formData.get("address"),
    phoneNumber : formData.get("phoneNumber"),
  }

  const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/patients/register",{
    method:"POST",
    body:JSON.stringify(body),
    headers : {
      "Content-Type" : "application/json"
    },
  })

  await response.json()

  if(!response.ok){
    redirect("/patients/auth/register");
  }

  redirect("/patients/auth/login?alert=Account created successfully");


}

export const handleLogout = async () => {
  cookies().delete("Authorization")
  redirect("/patients/auth/login")
}