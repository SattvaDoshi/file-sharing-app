import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
    return (
        <div className='flex p-6 border-b items-center justify-between md:justify-end'>
            <AlignJustify className='md:hidden' />
            <a
                href="/"
                className="flex gap-2 items-center md:hidden">
                <Image src='/logo.svg' height={35} width={40} alt='img' />
                <span className='text-primary font-extrabold md:text-xl text-lg'>Ease Share</span>
            </a>
            <UserButton />
        </div>
    )
}

export default TopHeader