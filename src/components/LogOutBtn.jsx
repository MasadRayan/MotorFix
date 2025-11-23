"use client";
import { signOut } from 'next-auth/react';
import React from 'react';

const LogOutBtn = () => {
    const handleLogout = async () => {
        await signOut({ 
            callbackUrl: '/',
            redirect: true 
        });
    };

    return (
        <button 
            onClick={handleLogout} 
            className='btn w-full bg-[#FF3811] text-white hover:bg-[#e63310]'
        >
            Log Out
        </button>
    );
};

export default LogOutBtn;