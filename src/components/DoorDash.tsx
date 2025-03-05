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
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold max-w-4xl '>
                        Do you need a car <br />
                        for Door dashing?
                    </h1>
                </BlurFade>
                <BlurFade delay={0.25} inView>
                    <p className='max-w-2xl lg:max-w-4xl text-lg lg:text-2xl'>
                        Want to start DoorDashing but don’t have a car? No problem! With our
                        easy rental options, you can get on the road fast and start earning
                        money without the hassle of owning a vehicle.
                    </p>
                </BlurFade>
                <BlurFade delay={0.35} inView>
                    <Link href={''}
                        className='inline-block text-center bg-[#32CD32] py-3 px-7 max-w-sm w-full md:max-w-[230px] text-xl text-black font-medium rounded-lg'
                    >
                        Rent a car
                    </Link>
                </BlurFade>
            </div>
        </section>
    )
}
