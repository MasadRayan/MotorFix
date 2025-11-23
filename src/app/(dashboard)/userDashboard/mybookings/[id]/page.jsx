import BookingUpdateForm from '@/components/BookingUpdateForm';
import axios from 'axios';
import React from 'react';

const UpdateBookingPage = async ({ params }) => {
    const {id} = await params;
    const res = await axios.get(`https://motofix-server.vercel.app/api/booking/single/${id}`);
    const data = res.data;
    return (
        <div>
            <BookingUpdateForm data={data}></BookingUpdateForm>
        </div>
    );
};

export default UpdateBookingPage;