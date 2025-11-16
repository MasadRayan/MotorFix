"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { signIn, signOut } from "next-auth/react"
import toast from 'react-hot-toast';
import SocialLogin from './SocialLogin';

const LoginForm = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        toast.loading('Submitting. Please wait...');
        try {
            const response = await signIn('credentials', { email, password,  redirect: false, });
            if (response.ok) {
                toast.dismiss();
                toast.success('Login successful');
                router.push('/');
                e.target.reset();
            }
            else {
                toast.dismiss();
                toast.error(response.error);
            }
        } catch (error) {
            toast.dismiss();
            toast.error(error.message);
        }

    }

    return (
        <div>
            <div className=''>
                <h1 className='text-center text-5xl font-bold'>Welcome Back</h1>
            </div>
            <form onSubmit={handleSubmit} className="w-full  space-y-3">
                <div className="card bg-base-100 w-full">
                    <div className="card-body">
                        <fieldset className="w-full flex flex-col justify-start  gap-5">
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="form-control w-full">
                                    <div className="label w-full">
                                        <span className="label-text font-bold">Password</span>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Type here"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#FF3811] text-white mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
                <p className="text-center">Or Sign In with</p>
                <SocialLogin></SocialLogin>
                <p className="text-center">
                    Don't Have an account?{" "}
                    <Link href="/auth-register" className="text-orange-500 font-bold">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default LoginForm;