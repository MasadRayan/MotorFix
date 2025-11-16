import Image from 'next/image';
import React from 'react';

const OurTeam = () => {
    return (
        <div className='my-24'>
            <div className='flex flex-col justify-center items-center gap-5 mb-14'>
                <p className='font-bold text-[20px] text-[#FF3811]'>Team</p>
                <h2 className='text-3xl md:text-5xl font-bold'>Meet Our Team</h2>
                <p className='text-base text-center text-[#737373]'>We take pride in our skilled professionals who work tirelessly to <br /> keep your vehicle running smoothly and safely every day. </p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-7'>
                <div className='flex flex-col justify-center items-center px-2 py-2 pb-5 gap-4 border border-[#E8E8E8] shadow-xl rounded-xl'>
                    <Image loading="eager" src={'/assets/images/team/1.jpg'} alt='Team member 1' width={1000} height={1000} className="h-[293px] w-[310px] rounded-xl object-cover" />
                    <div className='space-y-1'>
                        <p className='text-2xl font-bold'>Jabir Talim</p>
                        <p className='font-semibold text-lg'>Tire Specialist</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        {/* all the social icons */}
                        <Image loading="eager" src={'/assets/images/socialicons/facebook-icon.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/instagram-icon.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/twitter.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/linkedin.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center px-2 py-2 pb-5 gap-4 border border-[#E8E8E8] shadow-xl rounded-xl'>
                    <Image loading="eager" src={'/assets/images/team/2.jpg'} alt='Team member 1' width={1000} height={1000} className="h-[293px] w-[310px] rounded-xl object-cover" />
                    <div className='space-y-1'>
                        <p className='text-2xl font-bold'>Jhon Doe</p>
                        <p className='font-semibold text-lg'>Engine Expert</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        {/* all the social icons */}
                        <Image loading="eager" src={'/assets/images/socialicons/facebook-icon.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/instagram-icon.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/twitter.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/linkedin.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center px-2 py-2 pb-5 gap-4 border border-[#E8E8E8] shadow-xl rounded-xl'>
                    <Image loading="eager" src={'/assets/images/team/3.jpg'} alt='Team member 1' width={1000} height={1000} className="h-[293px] w-[310px] rounded-xl object-cover" />
                    <div className='space-y-1 text-center'>
                        <p className='text-2xl font-bold'>Kamal Hossain</p>
                        <p className='font-semibold text-lg'>Maintainence Specialist</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        {/* all the social icons */}
                        <Image loading="eager" src={'/assets/images/socialicons/facebook-icon.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/instagram-icon.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/twitter.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                        <Image loading="eager" src={'/assets/images/socialicons/linkedin.svg'} alt='Team member 1' width={1000} height={1000} className="h-7 w-7 rounded-xl object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;