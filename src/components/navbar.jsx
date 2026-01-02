import React from 'react'
import Link from 'next/link'

function navbar() {
  return (
    <nav className='flex gap-x-2 '>
        <Link href='/' classname="underline">Accueil</Link>   
        <Link href='/blog' className="underline">Blog</Link>
        <Link href='/dashboards' className="underline">Dashboards</Link>
        <Link href='/contact' className="underline">Contact</Link>
    </nav>
  )
}

export default navbar