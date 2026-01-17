import React from 'react'
import Navbar from '@/components/navbar'

function layout({ children }) {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default layout