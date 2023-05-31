import getPostData from '@/lib/getPostData'
import Link from 'next/link'
import React from 'react'

type Post = {
    "id": number,
    "title": string,
    "body": string,
    "userId": number,
    "tags": string,
    "reactions": number
}

async function getProduct(){
    const res = await fetch('https://dummyjson.com/posts')
    return res.json()
}
export default async function page() {

    const postData: Post[] = await getProduct()
    return (
        <div>{postData.map((product) => (
            <p key={product.id}>{product.title}</p>
        ))}</div>
    )

    
    // return (
    // <>
    //     { postsss.map(posts => {
    //         <p key={posts.id}>
    //             <Link href={'/posts/${posts.id}'}>{posts.title}</Link>
    //         </p>
    //     }) 
    //     }
    // </>
    // )
}
