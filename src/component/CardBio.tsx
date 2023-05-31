import React from 'react'
import Image from 'next/image'


interface ItemProps {
    icon?: string
    value?: string
    label?: string
}

const Item = ({ icon = "", value = "value", label = "label" }: ItemProps) => (
    <div className='inline-flex gap-[8px] text-sm'>
    <Image
        alt='icon'
        src={icon}
        width={20}
        height={20}
        className=""
    />
    <span className='font-bold'>{value}</span>
    <span>{label}</span>
    </div>
)

const CardBio = () => {
    return (
        <div className='inline-flex gap-[27px] items-center w-[600px] h-[134px]'>
        <Image
        alt='my-photo'
        src={"/img/photo.jpg"}
        className='relative h-20 w-20 rounded-full'
        width={200}
        height={200}
        />
        <div className='flex flex-col gap-2'>
        <Item
            icon='/img/project.png'
            value='140'
            label='Project selesai' />
        <Item
            icon='/img/github.png'
            value='120'
            label='Stars di repo ini' />
        <Item
            icon='/img/deal.png'
            value='42'
            label='Client'
        />
        </div>
    </div>
    )
}

export default CardBio