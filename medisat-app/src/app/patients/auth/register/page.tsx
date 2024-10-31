import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { register } from "../../actions";

export default function Register(){
    return(
        <>
        <div className="p-10">
        <form action={register}>
            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="nik">NIK</Label>
                <Input type="nik" id="nik" name="nik" placeholder="1234567890123456" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="nama">Nama</Label>
                <Input type="text" id="nama" name="nama" placeholder="Masukkan Nama anda" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="email">Email</Label>
                <Input type="text" id="email" name="email" placeholder="Masukkan email anda" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" placeholder="Masukkan password anda" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="birthdate">Tanggal Lahir</Label>
                <Input type="date" id="birthdate" name="birthdate" placeholder="Masukkan tanggal lahir anda" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" name="address" placeholder="Masukkan alamat anda" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5 pb-5">
                <Label htmlFor="birthdate">No Hp</Label>
                <Input type="text" id="phoneNumber" name="phoneNumber" placeholder="Masukkan nomor telpon yang dapat dihubungi" />
            </div>

            <div className="flex flex-wrap gap-10 items-center">
                <Button variant="auth">Register</Button>
                <p><Link className="text-blue-600" href={"/patients/auth/login"}>Login disini!</Link></p>
            </div>
        </form>
        </div>
        </>
    )
}