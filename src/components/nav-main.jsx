"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar"

export function NavMain({
  items
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu >
        {items.map((item) => {
          const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)

          return (
          <SidebarMenuItem key={item.title} >
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              isActive={isActive}
              className="mt-2 py-5 duration-300 hover:bg-sky-100 data-[active=true]:!bg-sky-200 data-[active=true]:!text-sky-900 "
            >
              <Link href={item.url}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )})}
      </SidebarMenu>
    </SidebarGroup>
  );
}
