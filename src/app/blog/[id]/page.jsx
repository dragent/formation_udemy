import React from 'react'
import Link from 'next/link'

async function page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <main className="mt-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.body}</p>
      <Link href="/blog" className="text-blue-500 hover:text-blue-700 hover:underline">← Retour à la liste de blog</Link>
    </main>
  )
}

export default page