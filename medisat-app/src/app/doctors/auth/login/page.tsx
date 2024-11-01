"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react";
import Swal from 'sweetalert2'
import { redirect, useRouter } from "next/navigation";
import { login } from "../../actions"


export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState({
        employeeId: "",
        password: ""
    })

    const handleSubmit = async (element: FormEvent<HTMLFormElement>) => {
        // console.log(user.employeeId, "ini employeeId");
        // console.log(user.password, "ini password");
        
        element.preventDefault();
        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/doctors/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            // console.log(res, "ini res");
            const data = await res.json();
            console.log(data, "ini data=======");

            // console.log(data, "ini data token login=====");
            

            if (!res.ok) {
                redirect("/doctors/auth/login")
            }

            login(data.access_token)

            Swal.fire(
                {
                    title: 'Success!',
                    text: 'Login successful!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#007bff',
                    customClass: {
                        confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'
                    }
                }).then(() => {
                    router.push("/doctors");
                });
        } catch (error) {
            // console.log(error,"KSJDSHFHJSF");

            Swal.fire(
                {
                    title: 'Error!',
                    text: 'Login failed! Ivalid email or password',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#007bff',
                    customClass: {
                        confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'
                    }
                });
        }
    }

    const handleChange = (element: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = element.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-gray-200">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="employeeId">Id Dokter</Label>
                                <Input
                                    type="text"
                                    name="employeeId"
                                    value={user.employeeId}
                                    onChange={handleChange}
                                    placeholder="Id Dokter"
                                />
                            </div>

                            <div>
                                <Label htmlFor="password">Sandi</Label>
                                <Input type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    placeholder="Sandi"
                                />
                            </div>

                            <Button type="submit" className="mt-5" variant="auth">Login</Button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Belum punya akun? <Link href="#" className="font-medium text-primary-600 hover:underline text-emerald-500">Registrasi</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}