import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Audi from '@/assets/brands/Audi Logo.svg'
import Citroen from '@/assets/brands/Citroen Logo.svg'
import Dacia from '@/assets/brands/Dacia Logo.svg'
import Huyndai from '@/assets/brands/Huyndai Logo.svg'
import Jeep from '@/assets/brands/Jeep Logo.svg'
import Land from '@/assets/brands/Land Rover Logo.svg'
import MB from '@/assets/brands/MB Logo.svg'
import Opel from '@/assets/brands/Opel Logo.svg'
import Reault from '@/assets/brands/Renault Logo.svg'
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';



export default function Carousel() {
    return (
        <section className='py-14 px-6 md:px-12 lg:px-20 flex items-center justify-center'>

            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop
                breakpoints={{
                    640: {
                      slidesPerView: 6,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 7,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 8,
                      spaceBetween: 50,
                    },
                  }}
                modules={[Autoplay]}
                className="mySwiper w-[85vw]"
            >
                {
                    Brands.map((item, idx) => (
                        <SwiperSlide key={idx} className='flex items-center justify-center'>
                            <Image
                                src={item}
                                alt='Brands'
                                sizes='100%'
                                className='h-11 w-auto'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}

const Brands = [Audi, Citroen, Dacia, Huyndai, Jeep, Land, MB, Opel, Reault]