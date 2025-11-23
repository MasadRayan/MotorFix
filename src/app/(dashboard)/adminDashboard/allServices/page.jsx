import { authOptions } from '@/lib/authOptions';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import React from 'react';
import AllServicesTable from '../components/AllServicesTable';

const AllServicesPages = async () => {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email
    const res = await fetch(`https://motofix-server.vercel.app/api/service/admin/${email}`, {
        next: { revalidate: 0 }, 
    });
    const data = await res.json();
    // console.log(data);
    return (
        <div>
            <AllServicesTable data={data}></AllServicesTable>
        </div>
    );
};

export default AllServicesPages;