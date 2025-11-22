"use client";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import DeleteService from "./DeleteService";

export default function AllServicesTable({ data }) {

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-[300px] mt-12 text-center">
                <p className="text-xl font-semibold text-gray-500">
                    No services found.
                </p>
            </div>
        );
    }

    const shorten = (text, max) => {
        if (!text) return "";
        return text.length > max ? text.slice(0, max) + "..." : text;
    };

    return (
        <section className="my-10">
            <h1 className="text-center text-4xl font-extrabold mb-8">
                All Services
            </h1>

            <div className="w-11/12 mx-auto rounded-xl bg-white shadow-lg">
                <div className="overflow-x-auto rounded-xl">
                    <table className="table w-full">

                        <thead className="bg-gray-100 sticky top-0 z-10 text-gray-700">
                            <tr>
                                <th className="py-4">Service</th>
                                <th>Price</th>
                                <th>Service ID</th>
                                <th>Description</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map(service => (
                                <tr key={service._id} className="hover:bg-gray-50">

                                    <td className="flex items-center gap-3 py-4">
                                        <Image
                                            src={service.img}
                                            alt={service.title}
                                            width={60}
                                            height={60}
                                            className="rounded-xl h-16 w-16 object-cover"
                                        />
                                        <span className="font-semibold">{service.title}</span>
                                    </td>

                                    <td className="font-semibold">${service.price}</td>

                                    <td className="pl-10">{service.service_id}</td>

                                    <td className="max-w-[300px] text-gray-600">
                                        {shorten(service.description, 60)}
                                    </td>

                                    <td className="text-center">
                                        <DeleteService id = {service._id}></DeleteService>
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
