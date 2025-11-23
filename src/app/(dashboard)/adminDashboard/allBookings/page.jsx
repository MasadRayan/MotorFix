import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';
import AllBooking from '../components/AllBooking';

const AllBookingPage = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const res = await fetch(`https://motofix-server.vercel.app/api/booking/admin/${email}`, {
        next: { revalidate: 0 }, 
    });
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <AllBooking data={data}></AllBooking>
        </div>
    );
};

export default AllBookingPage;