'use client'
import React, { useState } from 'react'

function Page() {
    const [inputValue, setInputValue] = useState('')
    console.log(new Date().getTime())
  return (
    <div>
        <input type="text" placeholder="Nom" className="border-2 border-gray-600 rounded-md p-2" value={inputValue || ''} onChange={(e) => setInputValue(e.target.value)}/>
        <p>tu as écris : {inputValue}</p>

    </div>
  )
}

export default Page