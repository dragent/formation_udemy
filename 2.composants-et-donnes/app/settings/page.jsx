"use client"
import React from 'react'
import { useContext } from "react"
import { DarkModeContext } from "@/context/DarkModeContext"

function Page() {
    const { theme, toggleTheme } = useContext(DarkModeContext)
    return (
        <div>
            <h1 className="text-3xl mb-4 font-bold underline">Parametres</h1>
            <button className='p-2 rounded-md border-2 border-violet-500' onClick={toggleTheme} >Mode : {theme}</button>

        </div>
    )
}

export default Page