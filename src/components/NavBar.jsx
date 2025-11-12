import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
    const links = (
        <>
            <li><Link className='hover:text-[#FF3811] font-semibold' href="/">Home</Link></li>
            <li><Link className='hover:text-[#FF3811] font-semibold' href="/services">About</Link></li>
            <li><Link className='hover:text-[#FF3811] font-semibold' href="/about">Services</Link></li>
            <li><Link className='hover:text-[#FF3811] font-semibold' href="/about">Blog</Link></li>
            <li><Link className='hover:text-[#FF3811] font-semibold' href="/contact">Contact</Link></li>
        </>
    )
    return (
        <div className='sticky top-0 z-50 bg-transparent backdrop-blur-2xl container mx-auto'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link href="/">
                        <Image src="/assets/logo.svg" alt="Vercel Logo" width={80} height={80}/>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className='flex justify-center items-center gap-3'>
                        <FaShoppingCart size={20}/>
                        <FaSearch size={20}/>
                        <button className='btn btn-outline text-[#FF3811]'>Appointment</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;