import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface GridSectionProps {
    reverse: boolean,
    image: string | StaticImport,
    heading: string,
    description: string
}

export default function GridSection(props: GridSectionProps) {
    return (
        <section className='px-6 md:px-12 lg:px-24 py-20'>
            <div className="grid md:grid-cols-2 items-center gap-6">
                <div className={`space-y-4 ${props.reverse ? 'order-2' : 'order-1'}`}>
                    <h4 className='text-5xl font-semibold tracking-tight'>{props.heading}</h4>
                    <p className='text-xl'>{props.description}</p>
                    <Link href={''}
                        className='inline-block text-center bg-[#32CD32] py-3 px-7 max-w-sm w-full md:max-w-[230px] text-xl text-black font-medium rounded-lg'
                    >
                        Rent a car
                    </Link>
                </div>
                <div className={props.reverse ? 'order-1' : 'order-2'}>
                    <Image
                        src={props.image}
                        alt='Car'
                        sizes='100%'
                        className={`h-full w-fit object-center ${props.reverse ? 'xl:max-w-lg' : ''} object-contain`}
                    />
                </div>
            </div>
        </section>
    )
}
