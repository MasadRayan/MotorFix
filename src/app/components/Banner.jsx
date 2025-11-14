'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
    { id: 1, title: "Affordable Price For Car Servicing", desc: "There are many variations of passages available, but the majority have suffered alteration in some form.", img: "/assets/images/banner/5.jpg" },
    { id: 2, title: "Expert Mechanics You Can Trust", desc: "Our certified team provides the best service with genuine parts and professional care.", img: "/assets/images/banner/1.jpg" },
    { id: 3, title: "Drive Smooth, Stay Safe", desc: "Your comfort and safety are our top priority — book your maintenance today.", img: "/assets/images/banner/2.jpg" },
    { id: 4, title: "Engine Check, Oil Change & More", desc: "All-in-one car servicing solution with transparent pricing.", img: "/assets/images/banner/3.jpg" },
    { id: 5, title: "Your Car, Our Care", desc: "Experience premium service at affordable rates with top-notch professionals.", img: "/assets/images/banner/4.jpg" },
    { id: 6, title: "Expert Mechanics For Your Car", desc: "There are many variations of passages available, but the majority have suffered alteration in some form.", img: "/assets/images/banner/6.jpg" },
];

const Banner = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true); // trigger re-render when refs are mounted
    }, []);

    return (
        <div className="relative">
            {/* Custom Arrows */}
            <div
                ref={prevRef}
                className="absolute top-1/2 left-4 z-10 cursor-pointer text-white text-2xl md:text-3xl transform -translate-y-1/2 hover:text-[#FF3811] transition-all"
            >
                <FaArrowLeft />
            </div>
            <div
                ref={nextRef}
                className="absolute top-1/2 right-4 z-10 cursor-pointer text-white text-2xl md:text-3xl transform -translate-y-1/2 hover:text-[#FF3811] transition-all"
            >
                <FaArrowRight />
            </div>

            {swiperReady && (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Pagination, Navigation, Autoplay]}
                    onSwiper={(swiper) => {
                        // link the refs after swiper is initialized
                        if (swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                    className="mySwiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative">
                                <Image
                                    src={slide.img}
                                    alt={slide.title}
                                    width={1200}
                                    height={600}
                                    className="w-full h-80 md:h-96 lg:h-[550px] object-cover rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 text-center md:text-left">
                                    <h1 className="text-2xl md:text-4xl font-bold text-white">{slide.title}</h1>
                                    <p className="text-gray-300 mt-4 md:mt-6 text-sm md:text-lg">{slide.desc}</p>
                                    <div className="flex justify-center md:justify-start items-center gap-3 md:gap-5 mt-4 md:mt-6">
                                        <button className="btn bg-[#FF3811] text-white border-0 hover:scale-105 transition-all">Discover More</button>
                                        <button className="btn btn-outline text-white hover:bg-[#FF3811] hover:text-white hover:scale-105 transition-all">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Banner;
