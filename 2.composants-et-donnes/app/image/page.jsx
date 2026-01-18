import React from 'react'
import { getImg } from '../lib/serverActions'
async function page() {

    const imgObject = await getImg()
    console.log(imgObject)

  return (
    <div>
        <h1 className="text-3xl font-bold underline">{imgObject.title}</h1>
        <img src={imgObject.url} alt={imgObject.title} />
    </div>
  )
}

export default page