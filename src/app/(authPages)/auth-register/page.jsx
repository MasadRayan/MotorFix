import Image from 'next/image';
import React from 'react';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-center items-center py-20 gap-10'>
            {/* image section */}
            <div>
                <Image 
                src={'/assets/images/login/login.svg'}
                alt="Login image"
                width={1500}
                height={1500}
                loading="eager"
                className="h-full w-full rounded-lg object-contain"
                />
            </div>
            {/* form section */}
            <div>
                <RegisterForm></RegisterForm>
            </div>
        </div>
    );
};

export default RegisterPage;