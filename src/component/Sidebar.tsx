import Link from 'next/link'
import React from 'react'
import Image from 'next/image'



const Sidebar = () => {
  return (
    <div className = 'flex flex-col '>
        <Image
        alt='Logo'
        width={54}
        height={54}
        className="mx-4 mb-4"
        src="img/logo.svg" />

        <Link className = 'text-sm px-4 py-2 text-zinc-900 hover:bg-zinc-100 rounded-md font-bold' href={"/"}>Home</Link>
        <Link className = 'text-sm px-4 py-2 text-zinc-900 hover:bg-zinc-100 rounded-md font-bold' href={"/blog"}>Blog</Link>

        

    </div>
  )
}

export default Sidebar