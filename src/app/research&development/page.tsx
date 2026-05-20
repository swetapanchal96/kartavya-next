"use client"
import { motion, Variants } from "framer-motion";
import AnimatedHeading from "../Components/AnimatedHeading";
import Breadcrumb from "../Components/Breadcrumb";
import header from "@/app/assets/R&D_banner.webp";
import farmer from '@/app/assets/kartavya-icons/Farmer-livelihood&sustainability.svg'
import food from '@/app/assets/kartavya-icons/Food-sustainability.svg'
import higher from '@/app/assets/kartavya-icons/Higher-yeild.svg'
import improved from '@/app/assets/kartavya-icons/improved-quality.svg'
import insect from '@/app/assets/kartavya-icons/Insect-pest-resistance.svg'
import shorter from '@/app/assets/kartavya-icons/Shorter-cropping-cycle.svg'
import Image from "next/image";
import about from "@/app/assets/hero-bg-2.jpg";
import { FaLeaf, FaPlay } from "react-icons/fa";
import { useState } from "react";
import dsir from '@/app/assets/dsir-certification.png'
import bg from '@/app/assets/kartavya-bg-4.png'

export default function ResearchDevelopmentPage() {
    const [playVideo, setPlayVideo] = useState(false);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: "easeOut",
            },
        }),
    };
    return (
        <>
            <Breadcrumb
                title="Research & Development"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Research & Development" },
                ]}
            />

            {/* Research Intro Section */}
            {/* <section className="relative overflow-hidden bg-linear-to-b from-white to-[#f8faf7] py-20 ">
                
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    <div className="mx-auto max-w-6xl">
                        
                        <div className="text-center">
                        
                            <span className="mb-4 inline-flex items-center rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[4px] text-primary shadow-sm">
                                Research • Innovation • Growth
                            </span>

                            
                            <AnimatedHeading className="mx-auto max-w-5xl text-4xl font-black  text-dark-grey md:text-5xl lg:text-6xl">
                                Advancing Agriculture Through{" "}
                                <span className="relative inline-block text-primary">
                                    Research & Development

                                </span>
                            </AnimatedHeading>

                            
                            <div className="mx-auto mt-4 max-w-4xl">
                                <p className="text-lg  text-[#666] md:text-xl">
                                    Our focus on Research and Development has earned
                                    recognition from the Government Of India’s Department Of
                                    Scientific and Industrial Research (DSIR), Ministry Of
                                    Science and Technology.
                                </p>

                                <p className="mt-2 text-lg  text-[#666] md:text-xl">
                                    We operate a{" "}
                                    <span className="font-semibold text-dark-grey">
                                        24-acre Main Research and Development Station
                                    </span>{" "}
                                    along with{" "}
                                    <span className="font-semibold text-dark-grey">
                                        three regional research facilities
                                    </span>{" "}
                                    across India — all dedicated to continuous innovation,
                                    crop improvement, and genetic advancement.
                                </p>

                                <p className="mt-2 text-lg text-[#666] md:text-xl">
                                    Our advanced R&D programs are focused on developing
                                    high-performance hybrid vegetable seeds with superior
                                    yield potential, enhanced disease resistance, and strong
                                    adaptability across diverse agro-climatic conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="w-full bg-[#f8f8f8] py-15">
                <div className="mx-auto container px-6 lg:px-10">
                    <div className="grid items-center gap-10 lg:grid-cols-[50%_50%]">

                        {/* left SIDE - Video/Image */}
                        <motion.div
                            className="relative flex justify-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            custom={0.2}
                        >
                            <div className="relative h-120 w-full overflow-hidden rounded-xl shadow-xl">
                                {!playVideo ? (
                                    <>
                                        {/* Thumbnail Image */}
                                        <Image
                                            src={about.src}
                                            alt="About Video"
                                            fill
                                            className="object-cover"
                                            priority
                                        />

                                        {/* Play Button */}
                                        <motion.button
                                            onClick={() => setPlayVideo(true)}
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
                                        >
                                            <FaPlay className="ml-1 text-[28px] text-[#8bbd2d]" />
                                        </motion.button>
                                    </>
                                ) : (
                                    <iframe
                                        className="h-full w-full"
                                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                                        title="About Video"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-2 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs z-20">
                                <div className="w-30 h-30  rounded-2xl flex items-center justify-center text-white text-2xl">
                                    <Image
                                        src={dsir.src}
                                        alt="dsir"
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                {/* <div>
                                    <h4 className="font-bold text-primary text-sm">DSIR Recognized</h4>
                                    <p className="text-[11px] text-gray-500">Ministry of Science & Technology, Govt. of India</p>
                                </div> */}
                            </div>
                        </motion.div>

                        {/* right SIDE - Content */}
                        <motion.div
                            className="p-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.p
                                custom={0.2}
                                variants={fadeUp}
                                className="mb-3 flex items-center gap-2 text-lg font-semibold uppercase tracking-[4px] text-secondary"
                            >
                                <span className="text-lg">
                                    <FaLeaf />
                                </span>
                                Research & Development
                            </motion.p>

                            <motion.div custom={0.4} variants={fadeUp}>
                                <AnimatedHeading className="max-w-xl text-3xl font-bold text-primary md:text-[46px]">
                                    Recognized by DSIR for Research & Development Excellence
                                </AnimatedHeading>
                            </motion.div>

                            <motion.p
                                custom={0.6}
                                variants={fadeUp}
                                className="mt-3 text-[16px] leading-7 text-[#555]"
                            >
                                Our Focus On Research and Development has won us
                                recognition from Government Of India’s Department of
                                Scientific and Industrial Research (DSIR) of the
                                Ministry of Science and Technology.
                            </motion.p>

                            <motion.p
                                custom={0.8}
                                variants={fadeUp}
                                className="mt-3 text-[16px] leading-7 text-[#555]"
                            >
                                We operate a <strong>24-acre Main Research and Development Station</strong>
                                {" "}along with <strong>3 Regional Research Facilities</strong>
                                {" "}across India.
                            </motion.p>

                            <motion.p
                                custom={1}
                                variants={fadeUp}
                                className="mt-3 text-[16px] leading-7 text-[#555]"
                            >
                                All dedicated to continuous innovation and genetic
                                advancement. Our advanced R&D programs focus on
                                developing <strong>High-performance Hybrid Vegetable Seeds</strong>
                                {" "}offering superior yield potential, disease
                                resistance, and adaptability across diverse
                                agro-climatic zones.
                            </motion.p>

                            <motion.div
                                custom={1.2}
                                variants={fadeUp}
                                className="mt-4"
                            >
                                {/* <button className="group relative inline-flex items-center overflow-hidden rounded-full bg-linear-to-r from-primary via-blue to-secondary  p-0.5 hover:bg-none hover:bg-yellow! shadow-lg transition-all duration-300 hover:scale-105">

                                
                                <span className="flex items-center gap-3 rounded-full bg-white px-4 py-4 text-sm font-bold uppercase tracking-[2px] text-primary transition-all duration-300 group-hover:bg-yellow group-hover:text-primary">
                                    Read More

                                    
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        <FaArrowRightLong />
                                    </span>
                                </span>
                            </button> */}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why We Need New Variety Section */}
            <section className="bg-[#f8faf5] py-12">
                <div className="container mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Seed Innovation
                        </span>

                        <AnimatedHeading className="mt-2 text-4xl font-bold text-dark-grey md:text-5xl lg:text-6xl">
                            Why we need new variety???
                        </AnimatedHeading>

                        <div className="mx-auto mt-2 h-1 w-24 bg-secondary"></div>
                    </div>

                    {/* Features */}
                    <div className="mt-20 grid grid-cols-2 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">
                                    <Image
                                        src={higher.src}
                                        alt="higer"
                                        width={120}
                                        height={120}
                                    /></span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-40 text-2xl font-medium leading-snug text-primary">
                                Higher Yield
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">
                                    <Image
                                        src={shorter.src}
                                        alt="higer"
                                        width={120}
                                        height={120}
                                    />
                                </span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-40 text-2xl font-medium leading-snug text-primary">
                                Shorter Cropping cycle
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">
                                    <Image
                                        src={insect.src}
                                        alt="higer"
                                        width={120}
                                        height={120}
                                    />
                                </span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-55 text-2xl font-medium leading-snug text-primary">
                                Environmental and Insect-pest resistance
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">
                                    <Image
                                        src={improved.src}
                                        alt="higer"
                                        width={120}
                                        height={120}
                                    />
                                </span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-40 text-2xl font-medium leading-snug text-primary">
                                Improved Quality
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">
                                    <Image
                                        src={farmer.src}
                                        alt="higer"
                                        width={120}
                                        height={120}
                                    />
                                </span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-55 text-2xl font-medium leading-snug text-primary">
                                Farmer Livelihood & Sustainability
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-4 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">
                                    <Image
                                        src={food.src}
                                        alt="higer"
                                        width={120}
                                        height={120}
                                    />
                                </span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-45 text-2xl font-medium leading-snug text-primary">
                                Food Sustainability
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* R&D Focus Section */}
            <section className="relative overflow-hidden bg-[#f7f9f4] py-16">
                {/* Animated Background */}
                <div className="absolute left-0 top-0 h-72 w-72 animate-pulse rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-80 w-80 animate-pulse rounded-full bg-secondary/20 blur-3xl"></div>

                {/* Floating Particles */}
                <div className="absolute left-[10%] top-[20%] h-3 w-3 animate-bounce rounded-full bg-primary/30"></div>
                <div className="absolute right-[15%] top-[30%] h-4 w-4 animate-slowPing rounded-full bg-secondary/40"></div>
                <div className="absolute bottom-[20%] left-[30%] h-3 w-3 animate-pulse rounded-full bg-[#f4b400]/40"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-10">
                    {/* Heading */}
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="inline-block animate-[pulse_3s_ease-in-out_infinite] text-xs font-bold uppercase tracking-[5px] text-primary">
                            Research Excellence
                        </span>

                        <AnimatedHeading className="mt-3 text-4xl font-black leading-tight text-dark-grey md:text-5xl">
                            Innovation from the Ground Up
                        </AnimatedHeading>

                        <p className="mx-auto mt-2 max-w-3xl text-base  text-[#666] md:text-lg">
                            Our R&D Station combines science, technology, and agricultural
                            expertise to create the next generation of superior seed
                            varieties.
                        </p>
                    </div>

                    {/* Creative Layout */}
                    <div className="relative mt-7 px-4 md:px-12">
                        {/* Animated Center Line */}
                        <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 overflow-hidden bg-primary/10 lg:block">
                            <div className="animate-lineMove absolute top-0 h-28 w-full bg-linear-to-b from-transparent via-primary to-transparent"></div>
                        </div>

                        <div className="space-y-8">
                            {/* ITEM 1 */}
                            <div className="group relative grid items-center gap-10 lg:grid-cols-2">
                                {/* Left Content */}
                                <div className="relative transition-all duration-700 group-hover:-translate-y-2">
                                    {/* Glow */}
                                    <div className="absolute -left-10 top-0 h-36 w-36 rounded-full bg-[#ffeded] blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100"></div>

                                    {/* Animated Border */}
                                    <div className="relative border-l-2 border-[#e53935]/20 pl-6 transition-all duration-500 group-hover:border-[#e53935]">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1f1] px-4 py-2 text-[14px] font-bold uppercase tracking-[3px] text-[#e53935] transition-all duration-500 group-hover:scale-105">
                                            <span className="h-2 w-2 animate-slowPing rounded-full bg-[#e53935]"></span>
                                            High-Yielding Varieties
                                        </span>

                                        {/* <h3 className="mt-4 text-2xl font-black text-dark-grey transition-all duration-500 group-hover:translate-x-2">
                                            Building Stronger Productivity
                                        </h3> */}

                                        <p className="mt-3 max-w-lg text-base  text-[#666]">
                                            Developing Hybrid with the genetic potential for
                                            maximum productivity and superior field
                                            performance.
                                        </p>
                                    </div>
                                </div>

                                {/* Center Orb */}
                                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                                    <div className="relative flex h-6 w-6 items-center justify-center">
                                        <div className="absolute h-10 w-10 animate-slowPing rounded-full bg-[#e53935]/20"></div>
                                        <div className="h-5 w-5 rounded-full border-4 border-white bg-[#e53935] shadow-[0_0_30px_rgba(229,57,53,0.7)]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* ITEM 2 */}
                            <div className="group relative grid items-center gap-10 lg:grid-cols-2">
                                {/* Orb */}
                                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                                    <div className="relative flex h-6 w-6 items-center justify-center">
                                        <div className="absolute h-10 w-10 animate-slowPing rounded-full bg-secondary/30"></div>
                                        <div className="h-5 w-5 rounded-full border-4 border-white bg-secondary shadow-[0_0_30px_rgba(181,214,58,0.7)]"></div>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="relative transition-all duration-700 group-hover:-translate-y-2 lg:col-start-2 lg:text-right">
                                    <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:scale-150"></div>

                                    <div className="relative border-r-2 border-secondary/20 pr-6 transition-all duration-500 group-hover:border-secondary">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-[14px] font-bold uppercase tracking-[3px] text-secondary transition-all duration-500 group-hover:scale-105">
                                            <span className="h-2 w-2 animate-slowPing rounded-full bg-secondary"></span>
                                            Disease & Pest Resistance
                                        </span>

                                        {/* <h3 className="mt-4 text-2xl font-black text-dark-grey transition-all duration-500 group-hover:-translate-x-2">
                                            Smarter Crop Protection
                                        </h3> */}

                                        <p className="mt-3 ml-auto max-w-lg text-base  text-[#666]">
                                            Breeding robust varieties that minimize the need
                                            for chemical intervention and reduce crop loss.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ITEM 3 */}
                            <div className="group relative grid items-center gap-10 lg:grid-cols-2">
                                {/* Left */}
                                <div className="relative transition-all duration-700 group-hover:-translate-y-2">
                                    <div className="absolute -left-10 top-0 h-36 w-36 rounded-full bg-yellow-400/10 blur-3xl transition-all duration-700 group-hover:scale-150"></div>

                                    <div className="relative border-l-2 border-[#f4b400]/20 pl-6 transition-all duration-500 group-hover:border-[#f4b400]">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[14px] font-bold uppercase tracking-[3px] text-[#1e1e1e] transition-all duration-500 group-hover:scale-105">
                                            <span className="h-2 w-2 animate-slowPing rounded-full bg-[#f4b400]"></span>
                                            Climate Resilience
                                        </span>

                                        {/* <h3 className="mt-4 text-2xl font-black text-dark-grey transition-all duration-500 group-hover:translate-x-2">
                                            Adapting to Every Environment
                                        </h3> */}

                                        <p className="mt-3 max-w-lg text-base  text-[#666]">
                                            Creating Hybrid adapted to withstand
                                            environmental stresses while maintaining strong
                                            growth and yield.
                                        </p>
                                    </div>
                                </div>

                                {/* Orb */}
                                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                                    <div className="relative flex h-6 w-6 items-center justify-center">
                                        <div className="absolute h-10 w-10 animate-slowPing rounded-full bg-[#f4b400]/30"></div>
                                        <div className="h-5 w-5 rounded-full border-4 border-white bg-[#f4b400] shadow-[0_0_30px_rgba(244,180,0,0.7)]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* ITEM 4 */}
                            <div className="group relative grid items-center gap-10 lg:grid-cols-2">
                                {/* Orb */}
                                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                                    <div className="relative flex h-6 w-6 items-center justify-center">
                                        <div className="absolute h-10 w-10 animate-slowPing rounded-full bg-primary/30"></div>
                                        <div className="h-5 w-5 rounded-full border-4 border-white bg-primary shadow-[0_0_30px_rgba(109,76,65,0.7)]"></div>
                                    </div>
                                </div>

                                {/* Right */}
                                <div className="relative transition-all duration-700 group-hover:-translate-y-2 lg:col-start-2 lg:text-right">
                                    <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-secondary/20 blur-3xl transition-all duration-700 group-hover:scale-150"></div>

                                    <div className="relative border-r-2 border-primary/20 pr-6 transition-all duration-500 group-hover:border-primary">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-2 text-[14px] font-bold uppercase tracking-[3px] text-primary transition-all duration-500 group-hover:scale-105">
                                            <span className="h-2 w-2 animate-slowPing rounded-full bg-primary"></span>
                                            Market-Driven Traits
                                        </span>

                                        {/* <h3 className="mt-4 text-2xl font-black text-dark-grey transition-all duration-500 group-hover:-translate-x-2">
                                            Research Guided by Market Needs
                                        </h3> */}

                                        <p className="mt-3 ml-auto max-w-lg text-base  text-[#666]">
                                            Tailoring varieties to meet grower, consumer,
                                            and trader preferences with better adaptability
                                            and quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Extra Animation */}
                <style jsx>{`
        @keyframes lineMove {
            0% {
                transform: translateY(-120%);
            }
            100% {
                transform: translateY(700%);
            }
        }

        .animate-lineMove {
            animation: lineMove 10s linear infinite;
        }

        @keyframes slowPing {
        0% {
            transform: scale(0.7);
            opacity: 0.7;
        }

        70% {
            transform: scale(2.2);
            opacity: 0;
        }

        100% {
            transform: scale(2.2);
            opacity: 0;
        }
    }

    .animate-slowPing {
        animation: slowPing 3.5s ease-out infinite;
    }
    `}</style>
            </section>
            {/* ================= R&D FLOW SECTION ================= */}
            {/* ================= R&D FLOW SECTION ================= */}
            <section className="relative overflow-hidden bg-primary py-20">

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-black/20"></div>

                {/* Background Grid */}
                {/* <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[90px_90px]"></div>
    </div> */}

                {/* Glow Effects */}
                {/* <div className="absolute left-0 top-0 h-[28rem] w-[28rem] rounded-full bg-secondary/15 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-black/20 blur-3xl"></div> */}

                {/* Background Texture */}
                <div className="pointer-events-none absolute -bottom-1 h-[190vh] w-full opacity-20">
                    <Image
                        src={bg.src}
                        alt="background-texture"
                        fill
                        className="object-cover object-bottom"
                    />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">

                    {/* ================= HEADING ================= */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold uppercase tracking-[4px] text-secondary backdrop-blur-xl">
                            Seed Development Process
                        </span>

                        <AnimatedHeading className="mt-3 text-4xl font-black  text-[#fff8f5] md:text-6xl">
                            Our R&D Flow : From Concept to Commercialization
                        </AnimatedHeading>

                        {/* <p className="mx-auto mt-2 max-w-3xl text-base  text-[#f5e9e5]/80 md:text-lg">
                            A structured and research-driven workflow transforming seed
                            innovation into high-performance commercial hybrids.
                        </p> */}
                    </div>

                    {/* ================= FLOW ================= */}
                    <div className="relative mt-10 space-y-10">

                        {/* ================= ROW 1 ================= */}
                        <div className="relative grid items-start gap-12 lg:grid-cols-3">

                            {/* Horizontal Line */}
                            <div className="absolute left-[16%] top-12 hidden h-0.75 w-[68%] overflow-hidden rounded-full bg-secondary/20 shadow-[0_0_20px_rgba(181,214,58,0.15)] lg:block">
                                <div className="animate-flow h-full w-28 rounded-full bg-linear-to-r from-secondary via-white to-secondary"></div>
                            </div>

                            {/* STEP 1 */}
                            <div className="group relative text-center">

                                <div className="relative mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-white/10 bg-[#3a2621] shadow-[0_0_60px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                                    {/* Soft Ring */}
                                    <div className="absolute h-[118%] w-[118%] rounded-full border border-white/10"></div>

                                    <div className="absolute h-full w-full rounded-full bg-secondary/5 blur-xl"></div>

                                    <span className="relative text-2xl font-black text-[#fff8f5]">
                                        01
                                    </span>
                                </div>

                                <h3 className="mt-3 text-[30px] font-black leading-none text-[#fff8f5]">
                                    Germplasm
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-base  text-[#f5e9e5]/80">
                                    Collection from local Wild, National and International sources.
                                </p>
                            </div>

                            {/* STEP 2 ACTIVE */}
                            <div className="group relative text-center">

                                <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-secondary/40 bg-[#2d3b1f] shadow-[0_0_80px_rgba(181,214,58,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                                    {/* Pulse Ring */}
                                    <div className="absolute h-[118%] w-[118%] rounded-full border border-secondary/20 animate-pulse"></div>

                                    <div className="absolute h-full w-full rounded-full bg-secondary/20 blur-2xl"></div>

                                    <span className="relative text-3xl font-black text-secondary">
                                        02
                                    </span>
                                </div>

                                <h3 className="mt-3 text-[30px] font-black leading-none text-[#fff8f5]">
                                    Line
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-base text-[#f5e9e5]/80">
                                    Utilize the GP and make lines for Hybrid development.
                                </p>
                            </div>

                            {/* STEP 3 */}
                            <div className="group relative text-center">

                                {/* Down Connector */}
                                <div className="absolute -bottom-24 left-1/2 hidden h-22 w-0.75 -translate-x-1/2 overflow-hidden rounded-full bg-secondary/20 shadow-[0_0_20px_rgba(181,214,58,0.15)] lg:block">
                                    <div className="animate-flowVertical h-16 w-full bg-linear-to-b from-secondary to-white"></div>
                                </div>

                                <div className="relative mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-white/10 bg-[#3a2621] shadow-[0_0_60px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                                    <div className="absolute h-[118%] w-[118%] rounded-full border border-white/10"></div>

                                    <div className="absolute h-full w-full rounded-full bg-secondary/5 blur-xl"></div>

                                    <span className="relative text-2xl font-black text-[#fff8f5]">
                                        03
                                    </span>
                                </div>

                                <h3 className="mt-3 text-[30px] font-black leading-none text-[#fff8f5]">
                                    Crosses
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-base  text-[#f5e9e5]/80">
                                    Make crosses for Parent and Hybrid development.
                                </p>
                            </div>
                        </div>

                        {/* ================= ROW 2 ================= */}
                        <div className="relative grid items-start gap-12 lg:grid-cols-3">

                            {/* Horizontal Reverse Line */}
                            <div className="absolute left-[16%] top-12 hidden h-0.75 w-[68%] overflow-hidden rounded-full bg-secondary/20 shadow-[0_0_20px_rgba(181,214,58,0.15)] lg:block">
                                <div className="animate-flowReverse ml-auto h-full w-28 rounded-full bg-linear-to-r from-secondary via-white to-secondary"></div>
                            </div>

                            {/* STEP 6 ACTIVE */}
                            <div className="group relative text-center">

                                {/* Down Connector */}
                                <div className="absolute -bottom-24 left-1/2 hidden h-22 w-0.75 -translate-x-1/2 overflow-hidden rounded-full bg-secondary/20 shadow-[0_0_20px_rgba(181,214,58,0.15)] lg:block">
                                    <div className="animate-flowVertical h-16 w-full bg-linear-to-b from-secondary to-white"></div>
                                </div>

                                <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-secondary/40 bg-[#2d3b1f] shadow-[0_0_80px_rgba(181,214,58,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                                    <div className="absolute h-[118%] w-[118%] rounded-full border border-secondary/20 animate-pulse"></div>

                                    <div className="absolute h-full w-full rounded-full bg-secondary/20 blur-2xl"></div>

                                    <span className="relative text-3xl font-black text-secondary">
                                        06
                                    </span>
                                </div>

                                <h3 className="mt-3 text-[30px] font-black  text-[#fff8f5]">
                                    OFD
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-base  text-[#f5e9e5]/80">
                                    On field Demonstration for stakeholder and farmer feedback.
                                </p>
                            </div>

                            {/* STEP 5 */}
                            <div className="group relative text-center">

                                <div className="relative mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-white/10 bg-[#3a2621] shadow-[0_0_60px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                                    <div className="absolute h-[118%] w-[118%] rounded-full border border-white/10"></div>

                                    <div className="absolute h-full w-full rounded-full bg-secondary/5 blur-xl"></div>

                                    <span className="relative text-2xl font-black text-[#fff8f5]">
                                        05
                                    </span>
                                </div>

                                <h3 className="mt-3 text-[30px] font-black leading-none text-[#fff8f5]">
                                    MLT / AT / CT
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-base  text-[#f5e9e5]/80">
                                    Multi-location trials for hybrid stability and performance.
                                </p>
                            </div>

                            {/* STEP 4 ACTIVE */}
                            <div className="group relative text-center">
                                

                                <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-secondary/40 bg-[#2d3b1f] shadow-[0_0_80px_rgba(181,214,58,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                                    <div className="absolute h-[118%] w-[118%] rounded-full border border-secondary/20 animate-pulse"></div>

                                    <div className="absolute h-full w-full rounded-full bg-secondary/20 blur-2xl"></div>

                                    <span className="relative text-3xl font-black text-secondary">
                                        04
                                    </span>
                                </div>

                                <h3 className="mt-3 text-[30px] font-black leading-none text-[#fff8f5]">
                                    Preliminary
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-base  text-[#f5e9e5]/80">
                                    Initial station trials for hybrid assessment.
                                </p>
                            </div>
                        </div>

                        {/* ================= ROW 3 ================= */}
                        <div className="relative  grid mt-15 items-start gap-12 lg:grid-cols-3">

                            {/* Horizontal Line */}
                            <div className="absolute left-[15%] top-12 hidden h-0.75 w-[36%] overflow-hidden rounded-full bg-secondary/20 shadow-[0_0_20px_rgba(181,214,58,0.15)] lg:block">
                                <div className="animate-flow h-full w-28 rounded-full bg-linear-to-r from-secondary via-white to-secondary"></div>
                            </div>

                            {/* STEP 7 */}
                            <div className="group relative text-center">
                                

                                <div className="relative mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-white/10 bg-[#3a2621] shadow-[0_0_60px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                                    <div className="absolute h-[118%] w-[118%] rounded-full border border-white/10"></div>

                                    <div className="absolute h-full w-full rounded-full bg-secondary/5 blur-xl"></div>

                                    <span className="relative text-2xl font-black text-[#fff8f5]">
                                        07
                                    </span>
                                </div>

                                <h3 className="mt-3 text-[30px] font-black leading-none text-[#fff8f5]">
                                    FS / Hybrid Seed
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-base  text-[#f5e9e5]/80">
                                    Foundation seed and Hybrid Seed production process.
                                </p>
                            </div>

                            {/* STEP 8 ACTIVE */}
                            <div className="group relative text-center">

                                <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-secondary/40 bg-[#2d3b1f] shadow-[0_0_80px_rgba(181,214,58,0.25)] transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">

                                    <div className="absolute h-[118%] w-[118%] rounded-full border border-secondary/20 animate-pulse"></div>

                                    <div className="absolute h-full w-full rounded-full bg-secondary/20 blur-2xl"></div>

                                    <span className="relative text-3xl font-black text-secondary">
                                        08
                                    </span>
                                </div>

                                <h3 className="mt-3 text-[30px] font-black leading-none text-[#fff8f5]">
                                    Hybrid Launch
                                </h3>

                                <p className="mx-auto mt-2 max-w-64 text-base  text-[#f5e9e5]/80">
                                    Commercial launch of Hybrid for season and territory.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= ANIMATIONS ================= */}
                <style jsx>{`
        @keyframes flow {
            0% {
                transform: translateX(-120%);
            }
            100% {
                transform: translateX(500%);
            }
        }

        @keyframes flowReverse {
            0% {
                transform: translateX(500%);
            }
            100% {
                transform: translateX(-120%);
            }
        }

        @keyframes flowVertical {
            0% {
                transform: translateY(-120%);
            }
            100% {
                transform: translateY(400%);
            }
        }

        .animate-flow {
            animation: flow 3.8s linear infinite;
        }

        .animate-flowReverse {
            animation: flowReverse 3.8s linear infinite;
        }

        .animate-flowVertical {
            animation: flowVertical 3.8s linear infinite;
        }
    `}</style>
            </section>
        </>
    );
}