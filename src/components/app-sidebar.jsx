"use client"


import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { AudioLinesIcon, TerminalIcon, TerminalSquareIcon, Cog , ChartBarStacked, Settings2Icon, FrameIcon, PieChartIcon, MapIcon ,Boxes ,UsersRound} from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "SokryPes",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: `HRD`,
      lastName : 'SHOP',
      logo: (
        <Image src="/favicon.ico" alt="HRD SHOP logo" width={20} height={20} className="size-4" />
      ),
      plan: "ADMIN V 2.0",
      
    },
    {
      name: "Acme Corp.",
      logo: (
        <AudioLinesIcon />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <TerminalIcon />
      ),
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Products",
      url: "/products",
      icon: (
        <Boxes className="text-sky-500"/>
      ),
    },
    {
      title: "Customers",
      url: "/customers",
      icon: (
        <UsersRound className="text-sky-500"/>
      )
    },
    {
      title: "Documentation",
      url: "/documentation",
      icon: (
        <ChartBarStacked className="text-sky-500"/>
      ),
    
    },
    {
      title: "Settings",
      url: "/settings",
      icon: (
        <Cog className="text-sky-500"/>
      ),
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <FrameIcon />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <PieChartIcon />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <MapIcon />
      ),
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
