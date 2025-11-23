import { Indent } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight  } from 'react-icons/fa';

const ServiceSection = async () => {
    const res = await fetch('https://motofix-server.vercel.app/api/service')
    const data = await res.json();

    return (
        <section className="py-20 bg-white text-center">
            {/* Section Header */}
            <div className="mb-10">
                <p className="text-[#FF3811] text-[20px] font-bold">Service</p>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
                    Our Service Area
                </h2>
                <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm md:text-base">
                    We take pride in delivering trusted car care, combining expert service,
                    transparent pricing, and a commitment to your complete satisfaction.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-10">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={300}
                            loading="eager"
                            className="w-full h-56 object-cover"
                        />
                        <div className='flex items-center justify-between px-4'>
                            <div className="p-5 text-left">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-[#FF3811] font-medium mt-2 flex items-center gap-2">
                                    Price : ${item.price}
                                </p>
                            </div>
                            <div>
                                <Link href={`/services/${item._id}`}>
                                    <FaArrowRight className='text-[#FF3811]'></FaArrowRight>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="mt-12">
                <button className="btn btn-outline  text-[#FF3811] hover:bg-[#FF3811] hover:text-white rounded-md px-6">
                    More Services
                </button>
            </div>
        </section>
    );
};

export default ServiceSection;