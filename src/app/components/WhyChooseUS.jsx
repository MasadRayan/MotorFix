import Image from 'next/image';
import React from 'react';

const WhyChooseUS = () => {
    return (
        <div className='my-24'>
            <div className='flex flex-col justify-center items-center gap-5 mb-14'>
                <p className='font-bold text-[20px] text-[#FF3811]'>Core Features</p>
                <h2 className='text-3xl md:text-5xl font-bold'>Why Choose Us</h2>
                <p className='text-base text-center text-[#737373]'>Our commitment to quality and customer satisfaction makes us <br /> the preferred choice for car owners everywhere. </p> 
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <div className='px-5 py-5 shadow-xl border border-[#F3F3F3] rounded-xl flex flex-col justify-center items-center gap-1 hover:bg-[#FF3811] hover:text-white  transition-all duration-300 ease-in-out'>
                    <Image src={'/assets/icons/group.svg'} alt='Grouped peoples' width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                    <p className='font-bold text-lg'>Expert Team</p>
                </div>
                <div className='px-5 py-5 shadow-xl border border-[#F3F3F3] bg-[#FF3811] rounded-xl flex flex-col justify-center items-center gap-1 hover:bg-[#FF3811] hover:text-white  transition-all duration-300 ease-in-out'>
                    <Image src={'/assets/icons/clock.svg'} alt='Grouped peoples' width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                    <p className='font-bold text-lg'>Timely Delivery</p>
                </div>
                <div className='px-5 py-5 shadow-xl border border-[#F3F3F3] rounded-xl flex flex-col justify-center items-center gap-1 hover:bg-[#FF3811] hover:text-white  transition-all duration-300 ease-in-out'>
                    <Image src={'/assets/icons/person.svg'} alt='Grouped peoples' width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                    <p className='font-bold text-lg'>24/7 Support</p>
                </div>
                <div className='px-5 py-5 shadow-xl border border-[#F3F3F3] rounded-xl flex flex-col justify-center items-center gap-1 hover:bg-[#FF3811] hover:text-white  transition-all duration-300 ease-in-out'>
                    <Image src={'/assets/icons/Wrench.svg'} alt='Grouped peoples' width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                    <p className='font-bold text-lg'>Best Equipment</p>
                </div>
                <div className='px-5 py-5 shadow-xl border border-[#F3F3F3] rounded-xl flex flex-col justify-center items-center gap-1 hover:bg-[#FF3811] hover:text-white  transition-all duration-300 ease-in-out'>
                    <Image src={'/assets/icons/check.svg'} alt='Grouped peoples' width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                    <p className='font-bold text-lg'>100% Guranty</p>
                </div>
                <div className='px-5 py-5 shadow-xl border border-[#F3F3F3] rounded-xl flex flex-col justify-center items-center gap-1 hover:bg-[#FF3811] hover:text-white  transition-all duration-300 ease-in-out'>
                    <Image src={'/assets/icons/deliveryt.svg'} alt='Grouped peoples' width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                    <p className='font-bold text-lg'>Timely Delivary</p>
                </div>
                
            </div>
        </div>
    );
};

export default WhyChooseUS;