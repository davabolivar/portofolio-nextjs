import CardBio from '@/component/CardBio'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='mx-10 flex flex-col gap-[36px]'>
      <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Dava Alifio Bolivar</h2>
      <CardBio />
      <p>Saya Dava, seorang Fullstack Developer yang sedang belajar NextJS dan juga senang untuk belajar hal baru</p>
    <div className='inline-flex gap-8'>
      <Link href={"/"}>Github</Link>
      <Link href={"/"}>LinkedIn</Link>
    </div>
    </div>
  )
}
