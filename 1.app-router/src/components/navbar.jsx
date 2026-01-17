"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className='flex gap-x-2 '>
        <Link href='/' className="underline">Accueil</Link>   
        <Link href='/blog' className="underline">Blog</Link>
        <Link href='/utilisateurs' className="underline">Utilisateurs</Link>
        <Link href='/dashboards' className="underline">Dashboards</Link>
        <Link href='/contact' className={`underline ${pathname === '/contact' ? 'bg-red-500' : ''}`}>Contact</Link>
    </nav>
  )
}

export default Navbar