"use client"

import Breadcrumb from "@/app/Components/Breadcrumb";
import header from '@/app/assets/page-header-bg.jpg';
import Image from 'next/image';
import aboutImg from '@/app/assets/fact-bg.jpg';
import AnimatedHeading from "../Components/AnimatedHeading";
import { IoTrophy } from "react-icons/io5";
import { MdVisibility } from "react-icons/md";
import { GiSprout, GiCheckMark } from "react-icons/gi";
import { MdOutlineTrackChanges } from "react-icons/md";
import logo from '@/app/assets/ks--.png'

export default function AboutPage() {
    const vegetableCrops = ["Chilli", "Okra", "Watermelon", "Musk Melon", "Tomato", "Cabbage", "Cucumber", "Gourds"];
    const fieldCrops = ["Cotton", "Maize", "Bajra", "Mustard", "Sweet Corn", "Cumin", "Sesamum", "High Nutritive Fodder"];

    return (
        <>
            <Breadcrumb
                title="About Kartavya Seeds"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" },
                ]}
            />
            {/* about */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-12">
                    {/* Top Section: Corporate Identity */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
                        <div className="relative">
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-white border-10">
                                <Image
                                    src={aboutImg}
                                    alt="Advanced Seed Research"
                                    className="w-full h-137.5 object-cover"
                                />
                            </div>
                            {/* Curved decorative element behind image to match homepage style */}
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#8BA92B]/10 rounded-full blur-3xl z-0"></div>

                            {/* DSIR Achievement Badge */}
                            {/* <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs z-20">
                                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-2xl"><IoTrophy /> </div>
                                <div>
                                    <h4 className="font-bold text-primary text-sm">DSIR Recognized</h4>
                                    <p className="text-[11px] text-gray-500">Ministry of Science & Technology, Govt. of India</p>
                                </div>
                            </div> */}
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-secondary font-bold text-lg flex items-center gap-2">
                                    <span className="w-8 h-0.5 bg-secondary"></span>
                                    WELCOME TO KARTAVYA SEEDS
                                </h4>
                                <AnimatedHeading className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                                    Trusted Partner in <span className="text-secondary">Genetically Enhanced</span> Agriculture
                                </AnimatedHeading>
                            </div>

                            <div className="text-gray-600 space-y-6 leading-relaxed text-lg">
                                <p>
                                    <span className="font-bold text-primary">Kartavya Seeds</span> is committed to supply genetically enhanced high quality seeds to farmers. We are an <span className="text-secondary font-semibold underline underline-offset-4">ISO 9001:2015 certified Company</span>.
                                </p>
                                <p>
                                    Our Focus On Research and Development has won us recognition from Government Of India’s Department of Scientific and Industrial Research (DSIR). Our seeds are ingrained with qualities to rich, flavorful, nutritious crop.
                                </p>
                                <p>
                                    While the farmers harvest prosperous crops, they are able to achieve it with <span className="italic text-primary">High resource efficiency</span>.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Mid Section: Portfolio Grid */}
                    <div className="space-y-7">

                        {/* ================= VEGETABLE CROPS ================= */}
                        <div className="relative overflow-hidden rounded-[45px] bg-linear-to-r from-[#f8f6f1] to-[#eef5db] p-10 ">

                            {/* Large Background Text */}
                            <h2 className="absolute left-6 top-1/2 -translate-y-1/2 text-[70px] font-black uppercase leading-none text-primary/5 md:text-[130px]">
                                VEGETABLE
                            </h2>

                            {/* Heading */}
                            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                                <div>
                                    {/* <span className="text-sm font-bold uppercase tracking-[5px] text-secondary">
                                        Crop Category
                                    </span> */}

                                    <h5 className="mt-3 text-4xl md:text-5xl font-black text-primary uppercase leading-none">
                                        Vegetable <span className="text-secondary">Crops</span>
                                    </h5>
                                </div>

                                <div className="h-[2px] w-full max-w-xs bg-linear-to-r from-secondary to-transparent"></div>
                            </div>

                            {/* Slider */}
                            <div className="relative mt-5 overflow-hidden">

                                {/* Blur Edges */}
                                <div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-[#f5f7ef] to-transparent"></div>
                                <div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-[#eef5db] to-transparent"></div>

                                <div className="flex w-max animate-marqueeReverse gap-5">

                                    {[...vegetableCrops, ...vegetableCrops].map((crop, index) => (
                                        <div
                                            key={index}
                                            className="shrink-0 rounded-full border border-primary/10 bg-white/80 px-8 py-4 text-lg font-bold text-primary shadow-lg shadow-black/3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-secondary hover:bg-white"
                                        >
                                            {crop}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ================= FIELD CROPS ================= */}
                        <div className="relative overflow-hidden rounded-[45px] bg-primary p-10 ">

                            {/* Large Background Text */}
                            <h2 className="absolute right-6 top-1/2 -translate-y-1/2 text-[70px] font-black uppercase leading-none text-white/5 md:text-[130px]">
                                FIELD
                            </h2>

                            {/* Heading */}
                            <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                                <div>
                                    {/* <span className="text-sm font-bold uppercase tracking-[5px] text-secondary">
                                        Crop Category
                                    </span> */}

                                    <h5 className="mt-3 text-4xl md:text-5xl font-black text-white uppercase leading-none">
                                        Field <span className="text-secondary">Crops</span>
                                    </h5>
                                </div>

                                <div className="h-[2px] w-full max-w-xs bg-linear-to-r from-secondary to-transparent"></div>
                            </div>

                            {/* Reverse Slider */}
                            <div className="relative mt-5 overflow-hidden">

                                {/* Blur Edges */}
                                <div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-primary to-transparent"></div>
                                <div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-primary to-transparent"></div>

                                <div className="flex w-max animate-marquee gap-5">

                                    {[...fieldCrops, ...fieldCrops].map((crop, index) => (
                                        <div
                                            key={index}
                                            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-primary"
                                        >
                                            {crop}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
    @keyframes marquee {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(-50%);
        }
    }

    @keyframes marqueeReverse {
        0% {
            transform: translateX(-50%);
        }

        100% {
            transform: translateX(0%);
        }
    }

    .animate-marquee {
        animation: marquee 24s linear infinite;
    }

    .animate-marqueeReverse {
        animation: marqueeReverse 24s linear infinite;
    }
`}</style>
                </div>
            </section>
            {/* vision & mission */}
            <section className="relative overflow-hidden bg-[#f8f6f1] py-20">

                {/* Background Glow */}
                <div className="absolute left-0 top-0 h-96 w-[24rem] rounded-full bg-secondary/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-96 w-[24rem] rounded-full bg-primary/5 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-10">

                    <div className="grid gap-16 lg:grid-cols-2">

                        {/* ================= VISION ================= */}
                        <div className="relative">

                            {/* Top */}
                            <div className="mb-10 flex items-center gap-5">

                                {/* Icon */}
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-secondary/20 bg-white shadow-lg shadow-secondary/10">

                                    <MdOutlineTrackChanges className="text-4xl text-secondary" />
                                </div>

                                {/* Label */}
                                <div>
                                    {/* <span className="text-sm font-bold uppercase tracking-[6px] text-secondary">
                                        Our Vision
                                    </span> */}

                                    <h2 className=" text-5xl font-black leading-none text-primary">
                                        Vision
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-white/70 p-10 backdrop-blur-xl">

                                {/* Accent Glow */}
                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-secondary/10 blur-3xl"></div>

                                <div className="relative space-y-7">

                                    <p className="text-2xl font-light leading-[1.9] text-primary">
                                        At Kartavya Seeds, our vision is to establish
                                        ourselves as a trusted and progressive leader in
                                        the agricultural seed industry by delivering
                                        superior-quality, high-performing, and sustainable
                                        seed solutions.
                                    </p>

                                    <div className="h-px w-full bg-primary/10"></div>

                                    <p className="text-lg leading-loose text-primary/70">
                                        We are committed to driving agricultural
                                        advancement through continuous research and
                                        development, innovation, scientific excellence to
                                        enhance crop performance and farm productivity.
                                    </p>

                                    <p className="text-lg leading-loose text-primary/70">
                                        By fostering strong, transparent, long-term
                                        partnerships with farmers, channel partners and
                                        stakeholders, we aim to create lasting value,
                                        support responsible farming practices and
                                        contribute to the sustainable growth of the
                                        agricultural ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ================= MISSION ================= */}
                        <div className="relative">

                            {/* Top */}
                            <div className="mb-10 flex items-center gap-5">

                                {/* Icon */}
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-secondary/20 bg-primary shadow-lg shadow-black/10">

                                    <GiSprout className="text-4xl text-secondary" />
                                </div>

                                {/* Label */}
                                <div>
                                    {/* <span className="text-sm font-bold uppercase tracking-[6px] text-secondary">
                                        Our Mission
                                    </span> */}

                                    <h2 className=" text-5xl font-black leading-none text-primary">
                                        Mission
                                    </h2>
                                </div>
                            </div>

                            {/* Mission Points */}
                            <div className="space-y-5">

                                {[
                                    "To invest continuously in research and innovation, focusing on solutions for emerging and evolving crop viruses.",

                                    "To develop and supply reliable, high-performing seeds that enhance crop productivity and farmer income.",

                                    "To maintain uncompromising quality standards across seed development, testing, and distribution.",

                                    "To promote sustainable, eco-friendly, and responsible agricultural practices.",

                                    "To contribute positively to rural development and the strengthening of the agricultural ecosystem.",

                                    "To build long-term relationships with farmers through trust, transparency, and service excellence.",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group relative overflow-hidden rounded-[26px] border border-primary/10 bg-white/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5"
                                    >

                                        {/* Glow */}
                                        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-secondary/5 blur-2xl transition-all duration-500 group-hover:bg-secondary/10"></div>

                                        <div className="relative flex items-start gap-5">

                                            {/* Custom Pointer */}
                                            <div className="relative mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/20 bg-secondary/10 transition-all duration-500 group-hover:rotate-12 group-hover:bg-secondary">

                                                <GiCheckMark className="text-lg text-secondary transition-all duration-500 group-hover:text-primary" />
                                            </div>

                                            {/* Text */}
                                            <p className="text-lg  text-primary/75 transition-all duration-500 group-hover:text-primary">
                                                {item}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* core value */}
            {/* ================= CORE VALUES ================= */}
            <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5f7ef_45%,#eef2e3_100%)] py-20">

                {/* Background Glow */}
                <div className="absolute left-0 top-0 h-120 w-120 rounded-full bg-secondary/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-120 w-120 rounded-full bg-primary/5 blur-3xl"></div>

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply bg-[url('/noise.png')]"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">

                    {/* ================= HEADING ================= */}
                    <div className="mx-auto mb-10 max-w-5xl text-center">

                        <span className="text-sm font-bold uppercase tracking-[6px] text-primary">
                            Core Values
                        </span>

                        <AnimatedHeading className="mt-2 text-5xl font-black uppercase text-primary md:text-6xl">
                            The Values That
                            <span className="mt-2 block text-secondary">
                                Drive Our Growth
                            </span>
                        </AnimatedHeading>
                    </div>

                    {/* ================= CIRCULAR VALUES ================= */}
                    <div className="relative mx-auto flex h-190 max-w-6xl items-center justify-center">

                        {/* ================= CONNECTING SVG LINES ================= */}
                        <svg
                            className="absolute inset-0 hidden h-full w-full lg:block"
                            viewBox="0 0 1200 760"
                            fill="none"
                        >
                            <path
                                d="M600 380 C600 220 600 180 600 120"
                                stroke="#b4d34230"
                                strokeWidth="1.5"
                                strokeDasharray="8 8"
                            />

                            <path
                                d="M600 380 C420 300 320 240 220 200"
                                stroke="#b4d34230"
                                strokeWidth="1.5"
                                strokeDasharray="8 8"
                            />

                            <path
                                d="M600 380 C780 300 900 240 980 200"
                                stroke="#b4d34230"
                                strokeWidth="1.5"
                                strokeDasharray="8 8"
                            />

                            <path
                                d="M600 380 C430 500 340 560 260 610"
                                stroke="#b4d34230"
                                strokeWidth="1.5"
                                strokeDasharray="8 8"
                            />

                            <path
                                d="M600 380 C770 500 880 560 960 610"
                                stroke="#b4d34230"
                                strokeWidth="1.5"
                                strokeDasharray="8 8"
                            />
                        </svg>

                        {/* ================= OUTER RING ================= */}
                        <div className="absolute h-155 w-155 rounded-full border border-dashed border-primary/30 animate-[spin_60s_linear_infinite] shadow-[0_0_40px_rgba(181,214,58,0.08)]"></div>

                        {/* ================= MIDDLE RING ================= */}
                        <div className="absolute h-125 w-125 rounded-full border border-dashed border-secondary/70 animate-[spin_45s_linear_infinite_reverse]"></div>

                        {/* ================= GLOW DOTS ================= */}
                        {/* <div className="absolute top-[7%] h-3 w-3 rounded-full bg-secondary shadow-[0_0_20px_rgba(181,214,58,0.8)]"></div>

                        <div className="absolute left-[14%] top-[28%] h-3 w-3 rounded-full bg-secondary shadow-[0_0_20px_rgba(181,214,58,0.8)]"></div>

                        <div className="absolute right-[14%] top-[28%] h-3 w-3 rounded-full bg-secondary shadow-[0_0_20px_rgba(181,214,58,0.8)]"></div>

                        <div className="absolute bottom-[16%] left-[20%] h-3 w-3 rounded-full bg-secondary shadow-[0_0_20px_rgba(181,214,58,0.8)]"></div>

                        <div className="absolute bottom-[16%] right-[20%] h-3 w-3 rounded-full bg-secondary shadow-[0_0_20px_rgba(181,214,58,0.8)]"></div> */}

                        {/* ================= CENTER LOGO ================= */}
                        <div className="relative z-20 flex h-52 w-52 items-center justify-center rounded-full border border-secondary/20 bg-white shadow-[0_30px_120px_rgba(181,214,58,0.18)]">

                            {/* Rotating Glow Ring */}
                            <div className="absolute -inset-4.5 rounded-full border border-secondary/10"></div>

                            {/* Glow */}
                            <div className="absolute h-[130%] w-[130%] rounded-full bg-secondary/10 blur-3xl"></div>

                            {/* Logo */}
                            <div className="relative">
                                <Image
                                    src={logo}
                                    alt="Kartavya Seeds"
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* ================= TOP ================= */}
                        <div className="absolute top-2 left-1/2 max-w-60 -translate-x-1/2 text-center transition-all duration-700 hover:-translate-y-2">

                            <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-secondary/5 blur-3xl"></div>

                            <div className="relative">

                                <h3 className="text-[32px] font-black leading-none text-primary">
                                    Quality Excellence
                                </h3>

                                <p className="mt-3 text-[17px] text-primary/70">
                                    Consistent, reliable, and superior seed quality.
                                </p>
                            </div>
                        </div>

                        {/* ================= TOP LEFT ================= */}
                        <div className="absolute left-[7%] top-[22%] max-w-70 text-right transition-all duration-700 hover:-translate-y-2">

                            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-secondary/5 blur-3xl"></div>

                            <div className="relative">

                                <h3 className="text-[32px] font-black leading-none text-primary">
                                    Innovation &
                                    <span className="block">
                                        Research
                                    </span>
                                </h3>

                                <p className="mt-3 text-[17px]  text-primary/70">
                                    The company emphasizes constant innovation, utilizing advanced R&D to create premium-quality seeds for diverse crops.
                                </p>
                            </div>
                        </div>

                        {/* ================= TOP RIGHT ================= */}
                        <div className="absolute right-[7%] top-[22%] max-w-65 transition-all duration-700 hover:-translate-y-2">

                            <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-secondary/5 blur-3xl"></div>

                            <div className="relative">

                                <h3 className="text-[32px] font-black leading-none text-primary">
                                    Sustainability
                                </h3>

                                <p className="mt-3 text-[17px] text-primary/70">
                                    Developing and supplying seeds that are suitable for specific regional or local environmental and cultural farming conditions. 
                                </p>
                            </div>
                        </div>

                        {/* ================= BOTTOM LEFT ================= */}
                        <div className="absolute bottom-[12%] left-[10%] max-w-65 text-right transition-all duration-700 hover:-translate-y-2">

                            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-secondary/5 blur-3xl"></div>

                            <div className="relative">

                                <h3 className="text-[32px] font-black leading-none text-primary">
                                    Partnership &
                                    <span className="block">
                                        Collaboration
                                    </span>
                                </h3>

                                <p className="mt-3 text-[17px]  text-primary/70">
                                    Fostering global business success together.
                                </p>
                            </div>
                        </div>

                        {/* ================= BOTTOM RIGHT ================= */}
                        <div className="absolute bottom-[12%] right-[10%] max-w-65 transition-all duration-700 hover:-translate-y-2">

                            <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-secondary/5 blur-3xl"></div>

                            <div className="relative">

                                <h3 className="text-[32px] font-black leading-none text-primary">
                                    Integrity &
                                    <span className="block">
                                        Transparency
                                    </span>
                                </h3>

                                <p className="mt-3 text-[17px] text-primary/70">
                                    Building trust through openness, fairness and responsibility.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}