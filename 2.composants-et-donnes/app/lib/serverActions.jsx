'use server'

export async function getImg(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/photos/1')
    const imgObject = await resp.json()
    return imgObject
}

export async function getPosts(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await resp.json()
    return posts
}

export async function getPost(id){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await resp.json()
    return post
}