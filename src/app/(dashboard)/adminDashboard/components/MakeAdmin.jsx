"use client";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const MakeAdmin = ({ id }) => {
    const userID = id;
    const session = useSession();
    const router = useRouter()
    const email = session?.data?.user?.email;

    const handleUpdate = async () => {
        toast.loading('Updating...');
        try {
            await axios.patch(`https://motofix-server.vercel.app/api/user/makeAdmin/${email}`, { userID });
            toast.dismiss();
            toast.success('Admin Updated');
            router.refresh();
        }
        catch (error) {
            toast.error(error.message);
        }

    }
    return (
        <button onClick={handleUpdate} className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-white transition-all ">
            Make Admin
        </button>

    );
};

export default MakeAdmin;