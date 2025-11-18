import Link from 'next/link';
import Image from 'next/image';
import { FiX } from "react-icons/fi";

export default function DashboardLayout({ children }) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                {/* Small screen navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden shadow-md">
                    <div className="flex-none">
                        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">Dashboard</div>
                </div>

                {children}
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 shadow-lg rounded-r-2xl space-y-2">
                    <div className="flex items-center justify-between mb-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                loading="eager"
                                src="/assets/logo.svg"
                                alt="Logo"
                                width={80}
                                height={80}
                                className='h-[60px] w-auto'
                            />
                        </Link>

                        {/* close button is a pure label (no JS needed) */}
                        <label
                            htmlFor="dashboard-drawer"
                            className="cursor-pointer p-2 rounded-full hover:bg-base-300 transition lg:hidden"
                        >
                            <FiX className="text-2xl text-gray-600" />
                        </label>
                    </div>

                    {/* Sidebar items go here */}
                </ul>
            </div>
        </div>
    );
}
