import Image from 'next/image'
import React from 'react'
import RentBan from './../assets/rent-baner.png';

export default function Rental() {
    return (
        <section className='relative h-80 flex items-center justify-center'>
            <Image
                src={RentBan}
                sizes='100%'
                alt='Banner'
                fill
                className='h-full w-full object-center object-conver z-0'
            />
            <h1 className='relative z-10 text-4xl md:text-5xl lg:text-6xl font-semibold text-[#32CD32]'>Rent cars</h1>
        </section>
    )
}
