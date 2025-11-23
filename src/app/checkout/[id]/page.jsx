import CheckoutForm from '@/components/CheckoutForm';
import axios from 'axios';
import React from 'react';

let service = null;
const CheckOutPage = async ({params}) => {
    const { id } = await params;
    const res = await axios.get(`https://motofix-server.vercel.app/api/service/${id}`);
    service = res.data;
    return (
        <div>
            <CheckoutForm data={service}></CheckoutForm>
        </div>
    );
};

export default CheckOutPage;