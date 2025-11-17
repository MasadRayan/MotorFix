"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function MybookingTable({ data }) {

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-[300px] mt-12 text-center">
                <p className="text-xl font-semibold text-gray-500">
                    You have no bookings yet.
                </p>
            </div>
        );
    }

    return (
        <section className="my-10">
            <h1 className="text-center text-4xl font-extrabold mb-8">
                My Bookings
            </h1>

            <div className="w-11/12 mx-auto rounded-xl  bg-white shadow-lg">
                <div className="overflow-x-auto rounded-xl">
                    <table className="table w-full">
                        <thead className="bg-gray-100 sticky top-0 z-10 text-gray-700">
                            <tr>
                                <th className="py-4">Service</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    
                                    {/* SERVICE IMAGE + NAME */}
                                    <td className="flex items-center gap-3 py-4">
                                        <Image
                                            src={item.serviceImg}
                                            alt={item.serviceName}
                                            width={600}
                                            height={600}
                                            className="rounded-lg shadow-sm object-cover h-20 w-26"
                                        />
                                        <span className="font-semibold">
                                            {item.serviceName}
                                        </span>
                                    </td>

                                    {/* DATE */}
                                    <td className="font-medium">{item.date}</td>

                                    {/* PRICE */}
                                    <td className="text-green-600 font-bold">
                                        ${item.servicePrice}
                                    </td>

                                    {/* PHONE */}
                                    <td>{item.phone}</td>

                                    {/* ADDRESS */}
                                    <td className="max-w-[150px] truncate">
                                        {item.address}
                                    </td>

                                    {/* ACTION BUTTONS */}
                                    <td className="flex items-center justify-center gap-5">
                                        
                                        {/* EDIT BUTTON */}
                                        <Link
                                            href={`/my-bookings/${item._id}`}
                                            className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                                        >
                                            <FaRegEdit className="text-blue-600 text-xl" />
                                        </Link>

                                        {/* DELETE BUTTON */}
                                        <button
                                            className="p-3 rounded-full bg-red-100 hover:bg-red-200 transition"
                                        >
                                            <MdDeleteForever className="text-red-600 text-2xl" />

                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
}
