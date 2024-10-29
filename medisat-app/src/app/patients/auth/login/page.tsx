import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Login() {
    return (
        <>
        <div className="p-10">
        <form>
            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Masukkan alamat email anda" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="********"/>
            </div>

            <div className="flex flex-wrap gap-10 items-center">
                <Button variant="auth">Log In</Button>
                <p><Link className="text-blue-600" href={"/patients/auth/register"}>Registrasi disini!</Link></p>
            </div>
        </form>
        </div>
        </>
    )
}

