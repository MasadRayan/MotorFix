"use client";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AcceptBooking = ({ id }) => {
    const session = useSession();
    const email = session?.data?.user?.email;
    const router = useRouter();

    const handleStatusUpdate = async () => {
        const status = "Accepted";
        toast.loading("Updating status...");
        try {
            await axios.patch(`http://localhost:5000/api/booking/bookingUpdate/${id}/${email}`, { status });
            toast.dismiss();
            router.refresh();
            toast.success("Booking accepted.");
        } catch (error) {
            toast.error("Failed to update status.");
            console.log(error);
        }
    }

    return (
        <button onClick={handleStatusUpdate}
            className="btn btn-success text-white px-5"
        >
            Accept
        </button>
    );
};

export default AcceptBooking;