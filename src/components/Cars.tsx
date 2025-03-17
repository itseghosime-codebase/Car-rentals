import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CarProp {
    image: string | StaticImport,
    type: string,
    description: string
    home: boolean
}

export default function Cars(prop: CarProp) {
    return (
        <div className='bg-[#111111] p-3 pb-6 text-center rounded-4xl space-y-2'>
            <div className={`w-auto ${prop.home ? 'h-72 rounded-3xl' : 'h-52 rounded-2xl'} overflow-hidden`}>
                <Image
                    src={prop.image}
                    alt={'Car Image'}
                    sizes='100%'
                    className='h-full w-full object-center object-cover'
                />
            </div>
            <h4 className={prop.home ? 'text-3xl' : 'text-2xl'}>{prop.type}</h4>
            <p className={prop.home ? 'text-lg hidden' : 'text-base hidden'}>{prop.description}</p>
            <Link href={'/contact'} className='bg-[#32CD32] py-2 px-10 inline-block rounded-lg text-lg text-black font-medium max-w-40 w-full'>Rent</Link>
        </div>
    )
}
