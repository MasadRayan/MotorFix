"use client";
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavBar = () => {
    const pathName = usePathname();
    const { data: session, status } = useSession();
    const [openBtn, setOpenBtn] = useState(false);
    const email = session?.user?.email;
    const [role, setRole] = useState(null);
    const getRole = async () => {
    if (!session?.user?.email) return; 

    try {
        const res = await axios.get(
            `https://motofix-server.vercel.app/api/user/role/${session.user.email}`
        );

        setRole(res.data.role);
    } catch (err) {
        console.error("Role fetch failed:", err);
    }
};

    const links = (
        <>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/">Home</Link></li>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/services">Services</Link></li>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/about">About</Link></li>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/about">Blog</Link></li>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/contact">Contact</Link></li>
        </>
    )
    const authLinks = (
        <>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/">Home</Link></li>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/services">Services</Link></li>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/about">About</Link></li>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/auth-login">Login</Link></li>
            <li><Link className='hover:text-[#FF3811] text-xl font-semibold' href="/auth-register">Register</Link></li>
        </>
    )

    if (pathName.includes('auth')) {
        return (
            <div className='sticky top-0 z-50 bg-transparent backdrop-blur-2xl '>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {authLinks}
                            </ul>
                        </div>
                        <Link href="/">
                            <Image loading="eager" src="/assets/logo.svg" alt="Vercel Logo" width={80} height={80} className='h-[60px] w-auto' />
                        </Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-2">
                            {authLinks}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    if (pathName.includes('Dashboard')) {
        return <></>
    }
    else {
        return (
            <div className='sticky top-0 z-50 bg-transparent backdrop-blur-2xl '>
                <div className="navbar container mx-auto">
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
                            <Image loading="eager" src="/assets/logo.svg" alt="Vercel Logo" width={80} height={80} className='h-[60px] w-auto' />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <div className='flex justify-center items-center gap-3'>
                            {
                                status == 'authenticated' ? (
                                    <>
                                        <div className='flex justify-center items-center gap-3'>
                                            <div onClick={() =>{ setOpenBtn(!openBtn), getRole() }}>
                                                <Image loading="eager" src={session?.user.image} alt="Vercel Logo" width={40} height={40} className='h-10 w-10 rounded-full' />
                                                {
                                                    openBtn && (
                                                        <div className='absolute top-17 right-13 bg-white p-2 rounded-lg shadow-md'>
                                                            {
                                                                role === 'admin' ? (
                                                                    <Link href={'/adminDashboard/adminHome'}>
                                                                        <button className='btn text-white bg-[#FF3811] '>Dashboard</button>
                                                                    </Link>
                                                                ) : (
                                                                    <Link href={'/userDashboard/userHome'}>
                                                                        <button className='btn text-white bg-[#FF3811]'>Dashboard</button>
                                                                    </Link>
                                                                )
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <button onClick={() => signOut()} className='btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-white'>
                                                LogOut
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link href={'/auth-login'}>
                                            <button className='btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-white'>Login</button>
                                        </Link>
                                        <Link href={'/auth-register'}>
                                            <button className='btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-white'>Register</button>
                                        </Link>
                                    </>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;