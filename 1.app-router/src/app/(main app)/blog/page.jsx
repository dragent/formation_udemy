import React from 'react'
import Link from 'next/link'

async function page({  }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Blog</h1>
      <p className='text-lg mb-8' >Dernier posts</p>	
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/blog/${post.id}`} key={post.id} className="block p-4 bg-white shadow-lg rounded-lg hover:bg-gray-100 transition duration-200"> 
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default page