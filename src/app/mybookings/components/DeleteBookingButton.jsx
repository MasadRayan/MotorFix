"use client";
import { MdDeleteForever } from "react-icons/md";
import React from 'react';
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteBookingButton = ({ id }) => {
    const { data: session } = useSession();
    const router  = useRouter();
    const handleBookingDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/booking/${id}`,
                {
                    data : {
                        email: session?.user?.email
                    }
                }
            );
            router.refresh();
            toast.success("Booking Deleted");
        } catch (error) {
            
        }
    }
    return (
        <div>
            <MdDeleteForever onClick={handleBookingDelete} className="text-red-600 text-2xl" />
        </div>
    );
};

export default DeleteBookingButton;