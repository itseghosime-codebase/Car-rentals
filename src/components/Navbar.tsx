'use client'
import React from 'react'
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import Logo from '@/assets/logo-white.svg'
import Image from 'next/image';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowDown } from "react-icons/io";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export default function Navbar() {
    const [clicked, setClicked] = React.useState(true);
    const changeToggle = () => {
        setClicked(!clicked);
    };
    return (
        <header className='fixed z-40 top-0 bg-[#1E1E1E] inset-x-0 flex items-center md:justify-center'>
            <nav className="w-full lg:px-16 lg:flex lg:items-center lg:justify-between">
                <div className='flex items-center justify-between py-4 bg-[#1E1E1E] px-6 relative z-10'>
                    <Link href="/">
                        <Image sizes='100%' src={Logo} alt="Logo"
                            className='w-auto h-10 md:h-14' />
                    </Link>
                    <button
                        className='lg:hidden'
                        onClick={changeToggle}
                    >
                        {!clicked ? <IoClose className="text-2xl" /> :
                            <FaBarsStaggered className="text-xl" />}
                    </button>
                </div>
                <ul className={`flex flex-col lg:flex-row fixed transition-all ease-in-out duration-500 ${clicked
                    ? "-translate-x-[100vh] lg:translate-x-0"
                    : "translate-x-0"
                    } top-0 left-0 -z-0 w-screen items-start justify-start pt-20 md:pt-28 lg:pt-0 gap-3 px-6 lg:gap-10 h-screen bg-[#1E1E1E] lg:relative lg:bg-transparent lg:w-auto lg:h-auto`}>
                    <li>
                        <Link className='hover:text-[#32CD32]' href="/" >
                            <span className='text-lg '>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#32CD32]' href="/rent" >
                            <span className='text-lg '>Rent</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#32CD32]' href="/contact" >
                            <span className='text-lg '>Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='hover:text-[#32CD32]' href="/doordash" >
                            <span className='text-lg '>Doordash</span>
                        </Link>
                    </li>
                    <li className='w-full lg:w-fit hidden lg:block'>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='hover:text-[#32CD32] flex items-center justify-between md:justify-start gap-2 w-full'>
                                <span className='text-lg '>Location</span>
                                <IoIosArrowDown />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-[#1E1E1E] border-[#1e1e1e]/80 relative w-40 py-5">

                                <DropdownMenuItem>
                                    <Link className='hover:text-[#32CD32]' href="/tx" >
                                        <span className='text-lg '>Texas</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className='hover:text-[#32CD32]' href="/nc" >
                                        <span className='text-lg '>North Carolina</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link className='hover:text-[#32CD32]' href="/my" >
                                        <span className='text-lg '>Maryland</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li className='w-full lg:w-fit lg:hidden'>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='p-0 w-full'>
                                    <button className='hover:text-[#32CD32] p-0'>
                                        <span className='text-lg '>Location</span>
                                    </button>
                                </AccordionTrigger>
                                <AccordionContent className='pt-4 space-y-3 pl-3'>
                                    <Link className='hover:text-[#32CD32] block' href="/tx">
                                        <span className='text-lg '>Texas</span>
                                    </Link>
                                    <Link className='hover:text-[#32CD32] block' href="/nc">
                                        <span className='text-lg '>North Carolina</span>
                                    </Link>
                                    <Link className='hover:text-[#32CD32] block' href="/my">
                                        <span className='text-lg '>Maryland</span>
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
