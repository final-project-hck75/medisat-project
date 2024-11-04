"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  
export default function Alert() {
    const searchParams = useSearchParams()
    const alert = searchParams.get("alert")
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (alert) {
                Toast.fire({
                    icon: "error",
                    title: alert
                  });
                router.replace(pathname)
        }
    }, [alert])

    return (
        <>
           
        </>
    )
}