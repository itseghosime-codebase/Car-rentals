import Image from 'next/image'
import React from 'react'
import BannerImage from './../assets/banner-img.png';
import Link from 'next/link';
import { TextAnimate } from './magicui/text-animate';
import { BlurFade } from './magicui/blur-fade';



export default function Banner() {
    return (
        <section className='xl:h-screen min-h-[700px] px-6 md:px-12 relative flex items-center justify-center'>
            <Image
                src={BannerImage}
                alt='Banner Image'
                fill
                sizes='100%'
                className='object-center object-cover z-0'
            />
            <div className="relative z-10 text-center flex items-center justify-center flex-col gap-3">
                <TextAnimate animation="slideLeft" by="word" className='xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold max-w-3xl xl:max-w-4xl'>
                    Veteran owned private
                    rental cars
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="line" once className='max-w-5xl lg:text-xl xl:text-2xl'>
                    Find the ideal car for your journey—affordable rates, top-quality vehicles, and hassle-free booking.
                    Whether it’s a weekend getaway or a business trip, we’ve got you covered.
                </TextAnimate>
                <BlurFade inView>
                    <Link href={''}
                        className='inline-block bg-[#32CD32] py-3 px-10 max-w-sm w-full md:max-w-[250px] text-lg lg:text-xl text-black font-medium rounded-lg'
                    >
                        Rent a car
                    </Link>
                </BlurFade>

            </div>
        </section>
    )
}
