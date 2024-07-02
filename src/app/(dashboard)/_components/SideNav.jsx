"use client"
import { File, Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const SideNav = () => {
    const menulist = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: File,
            path: '/file'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className='shadow-sm border-r h-full'>
            <div className='p-5 border-b'>
                <a
                    href="/"
                    className="flex gap-2 items-center ">
                    <Image src='/logo.svg' height={35} width={36} alt='img' />
                    <span className='text-primary font-extrabold md:text-xl text-lg'>Ease Share</span>
                </a>
            </div>
            <div className='flex flex-col float-left w-full'>
            {menulist.map((item,idx)=>(
                <button className={`flex gap-2 p-4 px-6 w-full
                    ${activeIndex == idx ?'text-primary bg-blue-50':null} `}
                onClick={()=>setActiveIndex(idx)}
                >
                <item.icon/>
                <h2>{item.name}</h2>
            </button>
            ))}
            </div>
        </div>
    )
}

export default SideNav