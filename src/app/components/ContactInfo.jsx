import Image from 'next/image';
import React from 'react';

const ContactInfo = () => {
    return (
        <div className='bg-black px-10 py-20 my-24 grid grid-cols-1 md:grid-cols-3 gap-10 mx-2 rounded-2xl'>
            <div className='flex justify-center items-center gap-5'>
                <Image loading="eager" src="/assets/images/contact/timetable.png" alt="Mechanic at work" width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                <div className='text-white flex flex-col justify-center text-center'>
                    <p>We are open monday-friday</p>
                    <p className='font-bold text-2xl'>7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <Image loading="eager" src="/assets/images/contact/call.png" alt="Mechanic at work" width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                <div className='text-white flex flex-col justify-start '>
                    <p>Have a question?</p>
                    <p className='font-bold text-2xl'>+8801709 341256</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <Image loading="eager" src="/assets/images/contact/location.png" alt="Mechanic at work" width={500} height={500} className="h-10 w-10 rounded-lg object-contain" />
                <div className='text-white flex flex-col justify-start'>
                    <p>Need a repair? our address</p>
                    <p className='font-bold text-2xl'>Chattogram, Bangladesh</p>
                </div>
            </div>
            
        </div>
    );
};

export default ContactInfo;