import React from 'react'
import Link from 'next/link'

function layout({ children }) {
  return (
    <div>
        <nav className='flex gap-x-2 '>
            <Link href='/dashboards/finance' classname="underline">Dashboard Finance</Link>   
            <Link href='/dashboards/rh' className="underline">Dashboard Rh</Link>
        </nav>
        {children}
    </div>
  )
}

export default layout