'use client'
import React, { useState } from 'react'
import { getPost } from '../lib/serverActions'
function Page() {
    const [inputValue, setInputValue] = useState('')
    // console.log(new Date().getTime())
    async function handleGetArticle(){
      const post = await getPost(1)
      console.log(post)
    }
    return (
    <div>
        <input type="text" placeholder="Nom" className="border-2 border-gray-600 rounded-md p-2" value={inputValue || ''} onChange={(e) => setInputValue(e.target.value)}/>
        <p>tu as écris : {inputValue}</p>
        <button 
          className='p-4 bg-green-500 text-white rounded-md'
          onClick={handleGetArticle}
          >Récupérer un article</button>
    </div>
  )
}

export default Page