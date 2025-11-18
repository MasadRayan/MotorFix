"use client";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import SocialLogin from '../../auth-login/components/SocialLogin';

const RegisterForm = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userInfo = { name, email, password };

        const res = await axios.post("http://localhost:5000/api/user",
            userInfo
        );
        if (res.data.insertedId) {
            e.target.reset();
        }
        else {
            setError(res.data.message);
        }
        console.log(error);

    }

    return (
        <div>
            <div className=''>
                <h1 className='text-center text-5xl font-bold'>Create
                    Account</h1>
            </div>
            <form onSubmit={handleSubmit} className="w-full  space-y-5">
                <div className="card bg-base-100 w-full">
                    <div className="card-body">
                        <fieldset className="w-full flex flex-col justify-start  gap-5">
                            <div>
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                            </div>
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                            </div>
                            {
                                error && <p className="text-[#FF3811]  font-bold">{error}</p>
                            }
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#FF3811] text-white mt-4">Register</button>

                        </fieldset>
                    </div>
                </div>
                <p className="text-center">Or Sign In with</p>
                <SocialLogin></SocialLogin>
                <p className="text-center">
                    Already have an account?{" "}
                    <Link href="/auth-login" className="text-orange-500 font-bold">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;