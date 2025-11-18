import BookingUpdateForm from '@/components/BookingUpdateForm';
import axios from 'axios';
import React from 'react';

const UpdateBookingPage = async ({ params }) => {
    const {id} = await params;
    const res = await axios.get(`http://localhost:5000/api/booking/single/${id}`);
    const data = res.data;
    return (
        <div>
            <BookingUpdateForm data={data}></BookingUpdateForm>
        </div>
    );
};

export default UpdateBookingPage;