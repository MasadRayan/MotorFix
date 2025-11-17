"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {
    console.log(data);
    const { data: session } = useSession();
    console.log(session);

    const handleBookService = async (e) => {
        toast("Submitting Booking...");
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const email = form.email.value;
        const formInfo = { 
            // session
            name, 
            email, 
            
            // User Input
            date, 
            phone, 
            address,

            // extra info
            serviceName: data.title,
            servicePrice: data.price,
            serviceId: data._id,
            serviceImg: data.img,
            status: "Pending",
        };

        const res = await axios.post("http://localhost:5000/api/booking", formInfo);
        if (res.data.insertedId) {
            toast.dismiss();
            toast.success("Booking successful");
            form.reset();
        }
        console.log(formInfo);

    };

    return (
        <div className="my-10 max-w-7xl mx-auto">
            <section className=" relative w-full mt-5 mb-14">
                <Image
                    loading="eager"
                    src={'/assets/images/checkout/checkout.png'}
                    alt="Checkout png"
                    width={1500}
                    height={1500}
                    className="w-full h-[220px] md:h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                <p className="absolute top-10 md:top-30 right-20 md:left-20 text-3xl md:text-5xl font-bold text-white ">Check Out</p>
                <div className="absolute rounded-t-2xl bottom-0 left-1/2 -translate-x-1/2  bg-[#FF3811] text-white px-5 py-2 flex justify-center items-center" aria-label="Breadcrumb">
                    <ol className="flex gap-2 items-center">
                        <li><a className="hover:underline">Home</a></li>
                        <li> / </li>
                        <li><a className="hover:underline">Checkout</a></li>
                    </ol>
                </div>
            </section>
            <div className="w-11/12 mx-auto">
                <div className="text-center mb-8">
                    <p className="text-4xl font-semibold">Book Service: {data.title}</p>
                </div>
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-base">Your name</legend>
                            <input type="text"
                                name="name"
                                defaultValue={session?.user?.name}
                                readOnly
                                className="input w-full"
                                placeholder="Name" />

                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-base">Your email</legend>
                            <input type="text"
                                defaultValue={session?.user?.email}
                                readOnly
                                name="email"
                                className="input w-full"
                                placeholder="Your email" />

                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-base">Due Amount</legend>
                            <input type="text"
                                name="price"
                                defaultValue={data?.price}
                                readOnly
                                className="input w-full"
                                placeholder="Due Amount" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-base">Date</legend>
                            <input type="date"
                                name="date"
                                className="input w-full" />

                        </fieldset>


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-base">Phone</legend>
                            <input type="text"
                                name="phone"
                                placeholder="Your Phone Number"
                                className="input w-full" />

                        </fieldset>


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-base">Address</legend>
                            <input type="text"
                                name="address"
                                placeholder="Your address"
                                className="input w-full" />

                        </fieldset>
                    </div>
                    <div className="form-control mt-6 w-full">
                        <button type="submit" className="w-full rounded-2xl bg-[#FF3811] text-white btn">
                            Order Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;