"use client"

import { AppSidebar } from "@/components/app-sidebar"
import Navbar from "@/components/NavbarComponent"
import { usePathname } from "next/navigation"

import {
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"

export default function SidebarComponent({
  children
}) {
  const pathname = usePathname();

  const showAppShell =
    pathname === "/" ||
    pathname === "/products" ||
    pathname === "/customers";

  if (!showAppShell) {
    return <div className="min-h-screen bg-white">{children}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      
      <SidebarProvider className="flex-1 bg-white">
        <AppSidebar />
        
        <div className="flex-1 overflow-auto">
          <Navbar />
          <SidebarTrigger/>
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
