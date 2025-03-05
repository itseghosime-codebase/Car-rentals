'use client'
import React from 'react'
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import Logo from '@/assets/logo.svg'
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [clicked, setClicked] = React.useState(true);
    const changeToggle = () => {
        setClicked(!clicked);
    };
    return (
        <header className='fixed z-40 top-0 bg-[#1E1E1E] inset-x-0 flex items-center md:justify-center'>
            <nav className="max-w-2xl w-full md:py-3 md:px-16">
                <div className='md:hidden flex items-center justify-between py-4 bg-[#1E1E1E] px-6 relative z-10'>
                    <Link href="/">
                        <Image sizes='100%' src={Logo} alt="Logo"
                            className='w-auto h-10' />
                    </Link>
                    <button
                        onClick={changeToggle}
                    >
                        {!clicked ? <IoClose className="text-2xl" /> :
                            <FaBarsStaggered className="text-xl" />}
                    </button>
                </div>
                <ul className={`flex flex-col md:flex-row fixed transition-all ease-in-out duration-500 ${clicked
                    ? "-translate-x-[100vh] md:translate-x-0"
                    : "translate-x-0"
                    } top-0 left-0 -z-0 w-screen items-center justify-center gap-10 h-screen bg-[#1E1E1E] md:relative md:bg-transparent md:w-auto md:h-auto`}>
                    <li>
                        <Link href="/" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg '>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/rent" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg '>Rent</span>
                        </Link>
                    </li>
                    <li className='hidden md:block'>
                        <Link href="/">
                            <Image sizes='100%' src={Logo} alt="Logo"
                                className='h-10 w-auto md:h-14 cloud-nine' />
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg '>Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/doordash" onClick={changeToggle}>
                            <span className='text-4xl md:text-lg '>Doordash</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
