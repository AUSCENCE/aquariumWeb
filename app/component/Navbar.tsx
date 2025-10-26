'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import { FolderGit2, GlassWater, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { checkAndAddUser } from '../action'

const Navbar = () => {

  const {user} = useUser()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if(user?.primaryEmailAddress?.emailAddress && user?.fullName){
      checkAndAddUser(user.primaryEmailAddress?.emailAddress,user.fullName)
    }
  },[user])

  const navLinks = [
    {label: 'Gazon', href: '/gazon'},
    {label: 'Tâche', href: '/task'},
    {label: 'Client', href: '/client'},
    {label: 'Utilisateur', href: '/utilisateur'},
  ]
  const isActiveLink = (href: string) =>  pathname.replace(/\/$/, "") === href.replace(/\/$/, "");

  const renderNavLinks = (className : string ) => {
    return navLinks.map((link) => (

      <Link key={link.href} href={link.href} className={`btn btn-sm ${className} ${isActiveLink(link.href) ? 'btn-primary' : ''}`}>
        {link.label}
      </Link>

    ))
  }



  return (
    <div className="border-b border-base-300 px-5 md:px[10%] py-4 relative">
      <div className=" flex justify-between ittems-center">
        <div className="flex items-center">
          <div className="bg-primary-content text-primary rounded-full p-2">
            <GlassWater className="w-6 h-6" />
          </div>
          <span className="text-3xl font-bold ml-3">
             AQUA<span className="text-primary">RIUM</span>
          </span>
        </div>

        <button className="btn w-fit btn-sm sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-4"/>
        </button>

        <div className="hidden sm:flex space-x-4 items-center">
          {renderNavLinks("")}
          <UserButton />
        </div>
      </div>
      <div
        className={`absolute top-0 w-full h-screen flex flex-col gap-2 p-4 transition-all duration-300 sm:hidden bg-white z-50 ${
          isMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex justify-between">
          <UserButton />
          <button className="btn w-fit btn-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <X className="w-4" />
          </button>
        </div>
        {renderNavLinks("btn-lg my-2")}
      </div>
    </div>
  );
}

export default Navbar