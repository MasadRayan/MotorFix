"use client";
import Image from "next/image";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathName = usePathname();
    if (pathName.includes('Dashboard')) {
        return <></>
    }
    else {
        return (
            <footer className="bg-[#111] text-gray-300 py-16 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo + Description */}
                    <div>
                        {/* Logo Section */}
                        <div className="flex items-center gap-2 mb-4">
                            <Image loading="eager" src='/assets/images/checkout/whiteLogo.png' alt="Vercel Logo" width={80} height={80} className="h-auto w-auto" />

                        </div>
                        <p className="text-sm leading-relaxed mb-4">
                            Edwin Diaz is a software and web technologies engineer, a life coach trainer
                            who is also a serial.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-2">
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-all"
                            >
                                <FaGoogle className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-all"
                            >
                                <FaTwitter className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-all"
                            >
                                <FaInstagram className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-all"
                            >
                                <FaLinkedinIn className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">About</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link className='hover:text-[#FF3811] font-semibold' href="/">Home</Link></li>
                            <li><Link className='hover:text-[#FF3811] font-semibold' href="/services">About</Link></li>
                            <li><Link className='hover:text-[#FF3811] font-semibold' href="/about">Services</Link></li>
                            <li><Link className='hover:text-[#FF3811] font-semibold' href="/about">Blog</Link></li>
                            <li><Link className='hover:text-[#FF3811] font-semibold' href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Why Car Doctor</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white">Support Center</a></li>
                            <li><a href="#" className="hover:text-white">Feedback</a></li>
                            <li><a href="#" className="hover:text-white">Accessibility</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Masad Rayan. All Rights Reserved.
                </div>
            </footer>
        );
    }
};

export default Footer;
