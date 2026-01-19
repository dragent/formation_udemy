"use client"

import { useContext } from "react"
import { DarkModeContext } from "@/context/DarkModeContext"

function SwitchThemeBtn() {
    const { theme, toggleTheme } = useContext(DarkModeContext)

    return (
            <button className='p-2 rounded-md fixed top-5 right-5 border-2 border-violet-500' onClick={toggleTheme} >Mode : {theme}</button>
    )
}

export default SwitchThemeBtn