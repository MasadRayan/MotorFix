import Link from 'next/link';
import React from 'react';

const Sidebar = ({ role }) => {
    // console.log(role);
    return (
        <div>
            {/* ROLE BASED LINKS */}
            {role === "admin" ? (
                <>
                    <div className='flex flex-col justify-center gap-5 pl-5 w-full '>
                        <Link href="/adminDashboard/adminHome">
                            <button className='btn btn-outline w-full text-[#FF3811] hover:bg-[#FF3811] hover:text-white'>
                                User Home
                            </button>
                        </Link>
                        <Link href="/adminDashboard/allUsers">
                            <button className='btn btn-outline w-full text-[#FF3811] hover:bg-[#FF3811] hover:text-white'>
                                All Users
                            </button>
                        </Link>
                    </div>


                </>
            ) : (
                <>
                    <div className='flex flex-col justify-center gap-5 pl-5 w-full '>
                        <Link href="/dashboard/userDashboard">
                            <button className='btn btn-outline w-full text-[#FF3811] hover:bg-[#FF3811] hover:text-white'>
                                User Home
                            </button>
                        </Link>
                        <Link href="/userDashboard/mybookings">
                            <button className='btn btn-outline w-full text-[#FF3811] hover:bg-[#FF3811] hover:text-white'>
                                My Bookings
                            </button>
                        </Link>

                    </div>

                </>
            )}
        </div>
    );
};

export default Sidebar;