"use client";
import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { signIn } from 'next-auth/react';

const SocialLogin = () => {
    const handleSocialLogin = async (providerName) => {
        const result = await signIn(providerName, { redirect: false });
    }
    return (
        <div className="flex justify-center gap-8">
            <p
                onClick={() => handleSocialLogin("google")}
                className="bg-slate-200 shadow-2xl rounded-full p-3 cursor-pointer"
            >
                <FaGoogle  type="button" />
            </p>
            <p
                onClick={() => handleSocialLogin("github")}
                className="bg-slate-200 rounded-full p-3 cursor-pointer"
            >
                <FaGithub type="button" />
            </p>
        </div>
    );
};

export default SocialLogin;