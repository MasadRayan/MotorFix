import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";


const DeleteService = ({ id }) => {
    const serviceID = id;
    const router = useRouter();
    const session = useSession();
    const email = session?.data?.user?.email;


    const handleDelete = async () => {
        toast.loading('Deleting...');
        try {
            await axios.delete(`https://motofix-server.vercel.app/api/service/admin/${email}/${serviceID}`);
            toast.dismiss();
            router.refresh();
            toast.success('Service Deleted');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <button onClick={handleDelete} className="text-red-600 hover:text-red-800 cursor-pointer">
            <MdDelete size={24} />
        </button>
    );
};

export default DeleteService;