"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdateBooking = ({ id, status }) => {
    const session = useSession();
    const email = session?.data?.user?.email;
    const router = useRouter();

    const handleStatusUpdate = async (newStatus) => {
        toast.loading("Updating status...");
        try {
            await axios.patch(
                `http://localhost:5000/api/booking/bookingUpdate/${id}/${email}`,
                { status: newStatus }
            );

            toast.dismiss();
            router.refresh();
            toast.success(`Booking ${newStatus.toLowerCase()}.`);
        } catch (error) {
            toast.dismiss();
            toast.error("Failed to update status.");
            console.log(error);
        }
    };

    return (
        <>
            {status === "Pending" && (
                <>
                    <button
                        onClick={() => handleStatusUpdate("Accepted")}
                        className="btn btn-success text-white px-5"
                    >
                        Accept
                    </button>

                    <button
                        onClick={() => handleStatusUpdate("Rejected")}
                        className="btn btn-error text-white px-5"
                    >
                        Reject
                    </button>
                </>
            )}

            {status === "Accepted" && (
                <button
                    onClick={() => handleStatusUpdate("Rejected")}
                    className="btn btn-error text-white px-5"
                >
                    Reject
                </button>
            )}

            {status === "Rejected" && (
                <button
                    onClick={() => handleStatusUpdate("Accepted")}
                    className="btn btn-success text-white px-5"
                >
                    Accept
                </button>
            )}
        </>
    );
};

export default UpdateBooking;
