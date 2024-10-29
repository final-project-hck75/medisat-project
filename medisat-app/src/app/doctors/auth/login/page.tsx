import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Login() {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-gray-200">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>

                        <div>
                            <Label htmlFor="doctorsId">Id Dokter</Label>
                            <Input type="doctorsId" placeholder="Id Dokter" />
                        </div>

                        <div>
                            <Label htmlFor="password">Sandi</Label>
                            <Input type="password" placeholder="Sandi" />
                        </div>
                        <Link href={"/doctors"}>
                            <Button className="mt-5" variant="auth">Login</Button>
                        </Link>

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Belum punya akun? <Link href="#" className="font-medium text-primary-600 hover:underline text-emerald-500">Registrasi</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}