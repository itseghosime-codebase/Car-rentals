import React from 'react'
import Booking from '@/assets/icon/booking.svg'
import Calendar from '@/assets/icon/calendar.svg'
import Location from '@/assets/icon/location.svg'
import Image from 'next/image'
import { TextAnimate } from './magicui/text-animate'
import { BlurFade } from './magicui/blur-fade'


export default function Howitworks() {
    return (
        <section className='px-6 md:px-12 lg:px-20 py-14 md:py-20 flex items-center justify-center flex-col gap-7'>

            <BlurFade inView>
                <div className="bg-[#32CD32]/[7%] py-3 w-fit mx-auto px-10 rounded-lg">
                    <span className='md:text-lg text-base text-[#32CD32] font-medium'>HOW IT WORK</span>
                </div>
            </BlurFade>
            <TextAnimate animation="slideLeft" by="word" className='text-3xl md:text-5xl font-medium text-center'>
                Rent with following 3 working steps
            </TextAnimate>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full justify-center gap-10 lg:justify-between items-center pt-5">
                {
                    Features.map((item, idx) => (
                        <div key={idx} className='text-center font-medium space-y-4 md:space-y-6'>

                            <BlurFade delay={0.25 * (idx + 1)} inView>
                                <div className="h-24 w-24 lg:h-44 lg:w-44 rounded-3xl bg-[#32CD32]/[7%] flex items-center justify-center mx-auto">
                                    <Image
                                        src={item.icon}
                                        alt='Icon'
                                        sizes='100%'
                                        className='h-16 w-auto'
                                    />
                                </div>
                            </BlurFade>
                            <BlurFade delay={0.35 * (idx + 1)} inView>
                                <h5 className='text-2xl md:text-3xl text-[#E8E8E8]'>{item.title}</h5>
                            </BlurFade>
                            <BlurFade delay={0.45 * (idx + 1)} inView>
                                <p className='text-lg xl:text-xl text-[#A4A4A4]'>{item.label}</p>
                            </BlurFade>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}


const Features = [
    {
        icon: Location,
        title: 'Choose location',
        label: <span>Choose your and find <br />your best car</span>
    },
    {
        icon: Calendar,
        title: 'Pick-up date',
        label: <span>Select your pick up date and <br />time to book your car</span>
    },
    {
        icon: Booking,
        title: 'Book your car',
        label: <span>Book your car and we will<br /> deliver it directly to you</span>
    }
]