"use client"
import React from 'react'

function error(error, reset) {
  return (
    <div className="mt-2">
        <h1 className="text-2xl font-bold text-red-500">Message d&apos;erreur : {error.message}</h1>
        <p className="text-gray-600">Veuillez réessayer plus tard</p>
        <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 rounded-md">Réessayer</button>
    </div>
  )
}

export default error