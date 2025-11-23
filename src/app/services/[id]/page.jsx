import React from "react";
import axios from "axios";
import { Scroll } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StarSvg = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.988 2.473c-.784.57-1.839-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.024 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
    </svg>
);

export default async function SingleServicepage({ params }) {
    const { id } = await params;

    let service = null;
    try {
        const res = await axios.get(`https://motofix-server.vercel.app/api/service/${id}`);
        service = res.data;
    } catch (err) {

        console.error("Failed to load service", err?.message || err);
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Service not found</h2>
                    <p className="text-gray-500 mt-2">We couldn't load that service right now.</p>
                </div>
            </div>
        );
    }

    const s = service;

    return (
        <main className="max-w-7xl mx-auto px-6 md:px-8 py-12">

            <section className=" relative w-full mt-5 mb-20">
                <Image
                    loading="eager"
                    src={'/assets/images/checkout/checkout.png'}
                    alt="Checkout png"
                    width={1500}
                    height={1500}
                    className="w-full h-[220px] md:h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                <p className="absolute top-10 md:top-30 right-20 md:left-20 text-3xl md:text-5xl font-bold text-white ">Service Details</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-[#FF3811] text-white px-3 py-2 flex justify-center items-center" aria-label="Breadcrumb">
                    <ol className="flex gap-2 items-center">
                        <li><Link href={'/'} className="hover:underline">Home</Link></li>
                        <li> / </li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li> / </li>
                        <li className="">{s.title}</li>
                    </ol>
                </div>
            </section>


            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left: big visual */}
                <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative w-full h-[420px] sm:h-[480px]">
                        {
                            s.img &&
                            <Image
                                loading="eager"
                                src={s.img}
                                alt={s.title}
                                fill
                                className="object-cover"
                                priority
                                placeholder="blur"
                                blurDataURL="/assets/images/placeholder.jpg"
                            />
                        }
                        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/30 to-transparent" />
                        <div className="absolute left-6 bottom-6 text-white z-10 max-w-2xl">
                            <span className="inline-block bg-[#FF3811] text-white px-3 py-1 rounded-full text-xs font-medium">Service</span>
                            <h1 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                                {s.title}
                            </h1>
                            <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl">
                                {s.description?.slice(0, 160)}{s.description?.length > 160 ? "..." : ""}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{s.title}</h2>
                                <div className="mt-2 flex items-center gap-4">
                                    <div className="text-primary font-bold text-lg md:text-xl">
                                        ${s.price}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <StarSvg className="w-4 h-4 text-yellow-400" />
                                        <span>4.8</span>
                                        <span className="mx-2">•</span>
                                        <span>{s.facility?.length ?? 0} facilities</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">

                                <a
                                    href="tel:+1234567890"
                                    className="btn btn-outline border-gray-300 text-gray-700 rounded-md px-4 py-2"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>

                        <article className="mt-8 prose prose-sm md:prose lg:prose-lg max-w-none text-gray-700">
                            <p>{s.description}</p>
                            <p>
                                Our team follows best industry practices and uses genuine parts to ensure optimal performance. We provide a full checklist and post-service report for every job.
                            </p>
                        </article>

                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-4">What this service includes</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {s.facility?.map((f, idx) => (
                                    <div key={idx} className="flex gap-3 items-start bg-gray-50 border border-gray-100 rounded-lg p-3">
                                        <div className="flex-none w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center text-[#FF3811]">
                                            {/* small icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-800">{f.name}</h4>
                                            <p className="text-xs text-gray-500 mt-1">{f.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 space-y-3 text-sm text-gray-600">
                            <p><strong>Duration:</strong> 1-2 hours (approx)</p>
                            <p><strong>Warranty:</strong> 30 days service warranty on parts replaced</p>
                            <p><strong>Availability:</strong> Walk-ins welcome or book online</p>
                        </div>
                    </div>
                </div>

                <aside className="w-full lg:w-[340px]">
                    <div className="sticky top-24 bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-gray-500">Starting at</div>
                                <div className="text-2xl font-bold text-gray-900">${s.price}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-gray-500">Est. Time</div>
                                <div className="text-sm text-gray-700">1-2 hrs</div>
                            </div>
                        </div>

                        <Link href={`/checkout/${service._id}`}>
                            <button id="book" className="mt-6 w-full btn bg-[#FF3811] text-white rounded-md px-4 py-2">
                                Proceed Checkout
                            </button>
                        </Link>

                        <div className="mt-4 text-xs text-gray-500">
                            <p>Need help? Call us at <a href="tel:+1234567890" className="text-gray-800 font-medium">+880 1709341256</a></p>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 border border-gray-100 rounded-lg text-sm">
                        <p className="font-medium text-gray-800">Trusted Technicians</p>
                        <p className="text-gray-500">Certified mechanics, transparent pricing, and genuine replacement parts.</p>
                    </div>
                </aside>
            </section>
        </main>
    );
}
