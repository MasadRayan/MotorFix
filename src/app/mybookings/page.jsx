import MybookingTable from '@/components/MybookingTable';
import { authOptions } from '@/lib/authOptions';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import React from 'react';

let data = null;
const MyBookingPage = async () => {
    const session = await getServerSession(authOptions);
    if (session) {
        const email = session?.user?.email;
        const res = await axios.get(`http://localhost:5000/api/booking/user/${email}`);
        const datas = res.data;
        data = datas;
    }
    return (
        <div>
            <MybookingTable data={data}></MybookingTable>
        </div>
    );
};

export default MyBookingPage;