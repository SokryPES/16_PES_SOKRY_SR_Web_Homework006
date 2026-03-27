"use client"

import React from 'react'
import { Search, Bell , ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


export default function NavbarComponent() {
  return (
    <nav className=" top-0 z-50 flex items-center justify-end px-6 py-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-4">
        <Button  className="text-gray-600 hover:text-sky-500 bg-white">
          <Bell className="w-5 h-5" />
        </Button>
        <Button  className="text-gray-600 hover:text-sky-500 relative bg-white">
  <ShoppingCart className="w-5 h-5" />
  <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
    3
  </span>
</Button>
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <Image src="https://i.pinimg.com/736x/75/aa/99/75aa99159ccc7ed7db9f519af4aafffa.jpg" alt="" width={35} height={35} className="rounded-full" />
          <div className="text-start">
            <p className="text-sm font-medium text-gray-900">ADMIN USER</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          
        </div>
      </div>
    </nav>
  )
}
