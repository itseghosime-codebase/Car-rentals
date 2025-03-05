'use client'
import React from 'react'
import Cars from './Cars'
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface AvailableCarsProps {
    cars: {
        img: StaticImageData;
        carType: string;
        carDescription: string;
    }[],
    home: boolean
}

export default function AvaCar(props: AvailableCarsProps) {
    return (
        <section className='px-6 md:px-12 lg:px-20 py-14 space-y-6'>
            <div className={`flex items-center ${props.home ? 'justify-center md:justify-between' : 'justify-center'}`}>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-medium '>Available cars </h2>
                {
                    props.home ? <Link href={''} className='bg-[#32CD32] hidden md:inline-block text-lg py-2.5 lg:py-3 max-w-52 w-full text-center rounded-lg font-medium text-black'>
                        See all cars</Link> : ''
                }
            </div>
            <div className={`grid md:grid-cols-2 ${props.home ? 'md:grid-cols-2 xl:grid-cols-3 gap-6' : 'lg:grid-cols-3 xl:grid-cols-4 gap-4'}`}>
                {
                    props.cars.map((items, index) => (
                        <Cars
                            key={index}
                            home={props.home}
                            image={items.img}
                            type={items.carType}
                            description={items.carDescription}
                        />
                    ))
                }
            </div>
            {
                props.home ? <Link href={''} className='bg-[#32CD32] md:hidden text-lg py-3 w-full inline-block text-center rounded-lg font-medium text-black'>
                    See all cars</Link> : ''
            }
        </section>
    )
}


