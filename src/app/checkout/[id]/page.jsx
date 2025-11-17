import axios from 'axios';
import React from 'react';

let service = null;
const CheckOutPage = async ({params}) => {
    const { id } = await params;
    const res = await axios.get(`http://localhost:5000/api/service/${id}`);
    service = res.data;
    console.log(id);
    return (
        <div>
            
        </div>
    );
};

export default CheckOutPage;