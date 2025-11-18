"use client";
import React, { useEffect } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const router = useRouter();
    const session = useSession();

    useEffect(() => {
        if (session?.status === 'authenticated') {
            toast.success('Login successful');
        }
    }, [session?.status]);

    const handleSocialLogin = (providerName) => {
        const callbackUrl =
            new URLSearchParams(window.location.search).get('callbackUrl') || "/";

        signIn(providerName, { callbackUrl });
    };

    return (
        <div className="flex justify-center gap-8">
            <p
                onClick={() => handleSocialLogin("google")}
                className="bg-slate-200 shadow-2xl rounded-full p-3 cursor-pointer"
            >
                <FaGoogle />
            </p>
            <p
                onClick={() => handleSocialLogin("github")}
                className="bg-slate-200 rounded-full p-3 cursor-pointer"
            >
                <FaGithub />
            </p>
        </div>
    );
};

export default SocialLogin;
