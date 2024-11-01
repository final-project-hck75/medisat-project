import { CalendarDays, Home, LogOut, NotepadText } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { handleLogout } from "@/app/patients/actions"
const logo = require('../app/assets/MEDISAT.png')

// Menu items.
const items = [
  {
    title: "Beranda",
    url: "#",
    icon: Home,
  },
  {
    title: "Daftar Pasien",
    url: "#",
    icon: NotepadText,
  },
  {
    title: "Kalender",
    url: "#",
    icon: CalendarDays,
  },
  {
    title: "Keluar",
    url: "#",
    icon: LogOut
  }
]

export function SidebarDoctor() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image
              src={logo}
              alt="MEDISAT Logo"
              width={150}
              height={50}
            />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon color="#3e9392" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
