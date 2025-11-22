import { authOptions } from '@/lib/authOptions';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import React from 'react';

const AllServicesPages = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email
    const res = await fetch(`http://localhost:5000/api/service/admin/${email}`, {
        next: { revalidate: 0 }, 
    });
    const data = await res.json();
    // console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default AllServicesPages;