import { authOptions } from '@/lib/authOptions';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import React from 'react';

const MyBookingPage = async () => {
    const session = await getServerSession(authOptions);
    if (session) {
        const email = session?.user?.email;
        const res = await axios.get(`http://localhost:5000/api/booking?email=${email}`);
        const data = res.data;
        
    }
    return (
        <div>
            
        </div>
    );
};

export default MyBookingPage;