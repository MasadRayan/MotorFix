import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const AllBookingPage = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const res = await fetch(`http://localhost:5000/api/booking/admin/${email}`, {
        next: { revalidate: 0 }, 
    });
    const data = await res.json();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default AllBookingPage;