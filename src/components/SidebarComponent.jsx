
import { AppSidebar } from "@/components/app-sidebar"
import Navbar from "@/components/NavbarComponent"

import {
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"

export default function SidebarComponent({
  children
}) {
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
