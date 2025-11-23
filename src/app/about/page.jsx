"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// ---- Stat Card with CountUp ----
const StatCard = ({ number, label }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const sanitizedNumber = parseInt(number.replace(/\D/g, ""));
    const suffix = number.replace(/[0-9]/g, "");

    return (
        <div
            ref={ref}
            className="border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition bg-white"
        >
            <h3 className="text-3xl md:text-4xl font-bold text-[#FF3811]">
                {inView ? (
                    <CountUp start={0} end={sanitizedNumber} duration={2} separator="," />
                ) : (
                    "0"
                )}
                {suffix}
            </h3>

            <p className="text-gray-600 mt-2 text-sm md:text-base">{label}</p>
        </div>
    );
};

// ---- Main About Page ----
const AboutPage = () => {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="relative  py-28 px-6 text-center">
                <h1 className="text-5xl font-extrabold tracking-wide">
                    About <span className="text-[#FF3811]">MotoFix</span>
                </h1>
                <p className="mt-4 text-gray-800 max-w-2xl mx-auto text-lg">
                    Your trusted car maintenance partner — passionate about keeping you
                    safe on the road with professional and reliable auto services.
                </p>
            </section>

            {/* Mission Section */}
            <section className="max-w-6xl mx-auto mt-20 px-6 grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-[#FF3811]">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        We aim to deliver professional car repair and servicing with honesty,
                        transparency, and expert craftsmanship. Our goal is to ensure your
                        vehicle runs smoothly while giving you a stress-free service
                        experience.
                    </p>
                </div>

                <Image
                    src="/assets/images/about_us/person.jpg"
                    alt="Mechanic at work"
                    width={500}
                    height={400}
                    loading="eager"
                    className="rounded-lg w-auto h-80 object-cover"
                />
            </section>

            {/* Why Choose Us */}
            <section className="max-w-6xl mx-auto mt-20 px-6">
                <h2 className="text-4xl font-extrabold text-center mb-10">
                    Why <span className="text-[#FF3811]">Choose Us?</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Expert Mechanics"
                        desc="Skilled and certified professionals trusted by thousands."
                    />
                    <FeatureCard
                        title="Honest Pricing"
                        desc="Fair and transparent pricing with no hidden charges."
                    />
                    <FeatureCard
                        title="Fast Service"
                        desc="Quick turnaround time without compromising quality."
                    />
                </div>
            </section>

            {/* Stats Section */}
            <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-4 gap-6 px-6">
                <StatCard number="10K+" label="Happy Customers" />
                <StatCard number="5K+" label="Cars Repaired" />
                <StatCard number="4.9★" label="Customer Rating" />
                <StatCard number="4+" label="Service Branches" />
            </section>
        </div>
    );
};

// ---- Feature Card ----
const FeatureCard = ({ title, desc }) => {
    return (
        <div className="border rounded-2xl p-6 shadow-md hover:shadow-xl transition bg-white">
            <h3 className="text-xl font-bold text-[#FF3811]">{title}</h3>
            <p className="text-gray-600 mt-3">{desc}</p>
        </div>
    );
};

export default AboutPage;
