import React from 'react'
import DoorD from './../assets/doordash.png';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from './magicui/blur-fade';

export default function DoorDash() {
    return (
        <section className='relative xl:h-screen min-h-[700px] px-6 md:px-12 lg:px-20 flex items-center '>
            <Image
                src={DoorD}
                alt='DoorDash Image'
                fill
                sizes='100%'
                className='object-center object-cover z-0'
            />
            <div className="relative z-10 flex items-start justify-center flex-col gap-5">
                <BlurFade inView>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold max-w-5xl '>
                        Need a Car for Rideshare
                        or Food Delivery?
                    </h1>
                </BlurFade>
                <BlurFade delay={0.25} inView>
                    <p className='max-w-2xl lg:max-w-4xl text-lg lg:text-2xl'>
                        No car? No problem! At GET N GO, we offer affordable, road-ready rentals for gig
                        workers. Get fast approval, flexible terms, and insured vehicles—so you can
                        start earning today.
                    </p>
                </BlurFade>
                <BlurFade delay={0.35} inView>
                    <Link href={'/contact'}
                        className='inline-block text-center bg-[#32CD32] py-3 px-7 max-w-sm w-full md:max-w-[230px] text-xl text-black font-medium rounded-lg'
                    >
                        Rent a car
                    </Link>
                </BlurFade>
            </div>
        </section>
    )
}
