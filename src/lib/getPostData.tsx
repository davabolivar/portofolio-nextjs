
import React from 'react'

export async function getPostData() {
  const res = await fetch('https://dummyjson.com/posts')
    return res.json()
}
