import React from 'react'
import FLogo from '@/assets/logo.svg'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='py-5 flex items-center justify-center bg-[#131313]'>
            <Image
                src={FLogo}
                alt='Logo'
                sizes='100%'
                className='h-20'
            />
        </footer>
    )
}
