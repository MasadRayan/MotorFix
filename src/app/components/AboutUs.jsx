"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full py-24 flex flex-col md:flex-row items-center gap-20">
      
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        {/* Main Image */}
        <Image
          src="/assets/images/about_us/person.jpg" 
          alt="Mechanic at work"
          width={500}
          height={400}
          loading="eager"
          className="rounded-lg object-cover w-[90%] shadow-md"
        />

        {/* Overlapping smaller image */}
        <div className="absolute -bottom-[100px] md:bottom-[-25px] md:right-[-30px] bg-white p-2 rounded-lg shadow-lg">
          <Image
            src="/assets/images/about_us/parts.jpg" 
            alt="Car tools"
            width={220}
            height={160}
            loading="eager"
            className="rounded-md h-auto w-auto object-cover"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
        <h3 className="text-[#FF3811] font-semibold uppercase">About Us</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          We are qualified <br /> & experienced in this field
        </h1>
        <p className="text-gray-600 leading-relaxed">
          With years of hands-on experience, our team of certified mechanics ensures that every vehicle receives the highest standard of care. From regular maintenance to complex repairs, we use advanced diagnostic tools and genuine parts to guarantee performance and safety.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We believe in transparency, reliability, and long-term relationships with our customers. That’s why we always provide honest consultations, fair pricing, and service you can count on — every single time..
        </p>
        <button className="btn bg-[#FF3811] text-white border-0 px-6 py-3 rounded-md hover:scale-105 transition-all">
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
