'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const slides = [
    
    {
        id: 2,
        title: "Expert Mechanics You Can Trust",
        desc: "Our certified team provides the best service with genuine parts and professional care.",
        img: "/assets/images/banner/2.jpg",
    },
    {
        id: 3,
        title: "Drive Smooth, Stay Safe",
        desc: "Your comfort and safety are our top priority — book your maintenance today.",
        img: "/assets/images/banner/3.jpg",
    },
    {
        id: 4,
        title: "Fast & Reliable Car Service",
        desc: "We deliver quality work on time, every time — no compromises.",
        img: "/assets/images/banner/4.jpg",
    },
    {
        id: 5,
        title: "Engine Check, Oil Change & More",
        desc: "All-in-one car servicing solution with transparent pricing.",
        img: "/assets/images/banner/5.jpg",
    },
    {
        id: 6,
        title: "Your Car, Our Care",
        desc: "Experience premium service at affordable rates with top-notch professionals.",
        img: "/assets/images/banner/6.jpg",
    },
];


const Banner = () => {

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-full"
            >
                <SwiperSlide className='relative w-full h-full backdrop-brightness-20 rounded-2xl'>
                    <Image
                        src="/assets/images/banner/5.jpg"
                        alt="Vercel Logo"
                        width={1200}
                        height={600}
                        className='w-full h-[500px] object-fill rounded-2xl' />
                    <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'></div>

                    <div className="absolute top-1/2 md:top-55 left:1/2 md:left-102 transform -translate-x-1/2 -translate-y-1/2 ">
                        <h1 className='text-4xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-gray-300 mt-6'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                        <div className='flex justify-start items-center gap-5 mt-6'>
                            <button className='btn bg-[#FF3811] text-white border-0 hover:scale-105 transition-all'>Discover More</button>
                            <button className='btn btn-outline text-white hover:bg-[#FF3811] hover:text-white hover:scale-105 transition-all'>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/assets/images/banner/1.jpg"
                        alt="Vercel Logo"
                        width={1200}
                        height={600}
                        className='w-full h-[500px] object-fill rounded-2xl' />
                    <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'></div>

                    <div className="absolute top-1/2 md:top-55 left:1/2 md:left-102 transform -translate-x-1/2 -translate-y-1/2 ">
                        <h1 className='text-4xl font-bold text-white'>Expert Mechanics You Can Trust</h1>
                        <p className='text-gray-300 mt-6'>Our certified team provides the best service <br /> with genuine parts and professional care.</p>
                        <div className='flex justify-start items-center gap-5 mt-6'>
                            <button className='btn bg-[#FF3811] text-white border-0 hover:scale-105 transition-all'>Discover More</button>
                            <button className='btn btn-outline text-white hover:bg-[#FF3811] hover:text-white hover:scale-105 transition-all'>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/assets/images/banner/2.jpg"
                        alt="Vercel Logo"
                        width={1200}
                        height={600}
                        className='w-full h-[500px] object-fill rounded-2xl' />
                    <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'></div>

                    <div className="absolute top-1/2 md:top-55 left:1/2 md:left-102 transform -translate-x-1/2 -translate-y-1/2 ">
                        <h1 className='text-4xl font-bold text-white'>Drive Smooth, Stay Safe</h1>
                        <p className='text-gray-300 mt-6'>We deliver quality work on time <br /> every time — no compromises.</p>
                        <div className='flex justify-start items-center gap-5 mt-6'>
                            <button className='btn bg-[#FF3811] text-white border-0 hover:scale-105 transition-all'>Discover More</button>
                            <button className='btn btn-outline text-white hover:bg-[#FF3811] hover:text-white hover:scale-105 transition-all'>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/assets/images/banner/3.jpg"
                        alt="Vercel Logo"
                        width={1200}
                        height={600}
                        className='w-full h-[500px] object-fill rounded-2xl' />
                    <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'></div>

                    <div className="absolute top-1/2 md:top-55 left:1/2 md:left-102 transform -translate-x-1/2 -translate-y-1/2 ">
                        <h1 className='text-4xl font-bold text-white'>Engine Check, Oil Change & More</h1>
                        <p className='text-gray-300 mt-6'>All-in-one car servicing solution <br /> with transparent pricing.</p>
                        <div className='flex justify-start items-center gap-5 mt-6'>
                            <button className='btn bg-[#FF3811] text-white border-0 hover:scale-105 transition-all'>Discover More</button>
                            <button className='btn btn-outline text-white hover:bg-[#FF3811] hover:text-white hover:scale-105 transition-all'>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/assets/images/banner/4.jpg"
                        alt="Vercel Logo"
                        width={1200}
                        height={600}
                        className='w-full h-[500px] object-fill rounded-2xl' />
                    <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'></div>

                    <div className="absolute top-1/2 md:top-55 left:1/2 md:left-102 transform -translate-x-1/2 -translate-y-1/2 ">
                        <h1 className='text-4xl font-bold text-white'>Your Car, Our Care</h1>
                        <p className='text-gray-300 mt-6'>Experience premium service at affordable rates <br /> with top-notch professionals.</p>
                        <div className='flex justify-start items-center gap-5 mt-6'>
                            <button className='btn bg-[#FF3811] text-white border-0 hover:scale-105 transition-all'>Discover More</button>
                            <button className='btn btn-outline text-white hover:bg-[#FF3811] hover:text-white hover:scale-105 transition-all'>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/assets/images/banner/6.jpg"
                        alt="Vercel Logo"
                        width={1200}
                        height={600}
                        className='w-full h-[500px] object-fill rounded-2xl' />
                    <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'></div>

                    <div className="absolute top-1/2 md:top-55 left:1/2 md:left-102 transform -translate-x-1/2 -translate-y-1/2 ">
                        <h1 className='text-4xl font-bold text-white'>Expert Mechanics For Your Car</h1>
                        <p className='text-gray-300 mt-6'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                        <div className='flex justify-start items-center gap-5 mt-6'>
                            <button className='btn bg-[#FF3811] text-white border-0 hover:scale-105 transition-all'>Discover More</button>
                            <button className='btn btn-outline text-white hover:bg-[#FF3811] hover:text-white hover:scale-105 transition-all'>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;