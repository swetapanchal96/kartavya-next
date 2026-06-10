"use client"

import AnimatedHeading from "../Components/AnimatedHeading";
import Breadcrumb from "../Components/Breadcrumb";
import header from "@/app/assets/Productionbanner.webp";
import Image from "next/image";
import smallogo from '@/app/assets/ks--.png'
import { FaArrowLeft, FaArrowRight, FaLeaf } from "react-icons/fa";
import nursery from '@/app/assets/farm-nursery.webp';
import nethouse from '@/app/assets/net-house.webp';
import dryunit from '@/app/assets/drying-unit.webp';
import storage from '@/app/assets/storage.webp';
import growbag from '@/app/assets/grow-bag.jpeg';
import lab from '@/app/assets/lab.webp';
import advance from '@/app/assets/advance-tech.webp';
import bg from '@/app/assets/kartavya-bg-3.png'
import map from '@/app/assets/Indian-map.webp'
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import bg1 from '@/app/assets/Bitter-Gourd/Bi-1.webp'
import bg2 from '@/app/assets/Bitter-Gourd/Bi-2.webp'
import bg3 from '@/app/assets/Bitter-Gourd/Bi-3.webp'
import bg4 from '@/app/assets/Bitter-Gourd/Bi-4.webp'
import cu1 from '@/app/assets/Cucumber/Cu-1.webp'
import cu2 from '@/app/assets/Cucumber/Cu-2.webp'
import cu3 from '@/app/assets/Cucumber/Cu-3.webp'
import cu4 from '@/app/assets/Cucumber/Cu-4.webp'
import hp1 from '@/app/assets/Hot-Pepper/Picture1.webp'
import hp2 from '@/app/assets/Hot-Pepper/Picture2.webp'
import hp3 from '@/app/assets/Hot-Pepper/Picture3.webp'
import hp4 from '@/app/assets/Hot-Pepper/Picture4.webp'
import m1 from '@/app/assets/Melon/M-1.jpg'
import m2 from '@/app/assets/Melon/M-2.jpg'
import m3 from '@/app/assets/Melon/M-3.png'
import m4 from '@/app/assets/Melon/M-4.jpg'
import sp1 from '@/app/assets/Sweet-Paper/1.jpg'
import sp2 from '@/app/assets/Sweet-Paper/2.webp'
import sp3 from '@/app/assets/Sweet-Paper/sw-pe.webp'
import sp4 from '@/app/assets/Sweet-Paper/4.webp'
import tomato1 from '@/app/assets/Tomato/T-1.jpg'
import tomato2 from '@/app/assets/Tomato/T-2.webp'
import tomato3 from '@/app/assets/Tomato/T-3.webp'
import tomato4 from '@/app/assets/Tomato/T-4.jpg'
import wm1 from '@/app/assets/Water-Melon/Wa-1.webp'
import wm2 from '@/app/assets/Water-Melon/Wa-2.webp'
import wm3 from '@/app/assets/Water-Melon/Wa-3.webp'
import wm4 from '@/app/assets/Water-Melon/Wa-4.webp'


// data
const facilities = [
    {
        title: "Well Equipped Nursery Houses",
        image: nursery.src,
    },
    {
        title: "50+ Net-Houses",
        image: nethouse.src,
    },
    {
        title: "Advanced Irrigation System",
        image: advance.src,
    },
    {
        title: "New Technologies (Production In Grow Bags)",
        image: growbag.src,
    },
    {
        title: "Quality Control Lab",
        image: lab.src,
    },
    {
        title: "Seed Processing Units (grading, drying, treatment)",
        image: dryunit.src,
    },
    {
        title: "Cold Storage Preservation",
        image: storage.src,
    },
];

const crops = [
    {
        name: "Tomato",
        slug: "tomato",
        images: [
            tomato1.src,
            tomato2.src,
            tomato3.src,
            tomato4.src,
        ],
    },
    {
        name: "Hot Pepper",
        slug: "hot-pepper",
        images: [
            hp1.src,
            hp2.src,
            hp3.src,
            hp4.src,
        ],
    },
    {
        name: "Sweet Pepper",
        slug: "sweet-pepper",
        images: [
            sp1.src,
            sp2.src,
            sp3.src,
            sp4.src,
        ],
    },
    {
        name: "Watermelon",
        slug: "watermelon",
        images: [
            wm1.src,
            wm2.src,
            wm3.src,
            wm4.src,
        ],
    },
    {
        name: "Musk Melon",
        slug: "musk-melon",
        images: [
            m1.src,
            m2.src,
            m3.src,
            m4.src,
        ],
    },
    {
        name: "Cucumber",
        slug: "cucumber",
        images: [
            cu1.src,
            cu2.src,
            cu3.src,
            cu4.src,
        ],
    },
    {
        name: "Bitter Gourd",
        slug: "bitter-gourd",
        images: [
            bg1.src,
            bg2.src,
            bg3.src,
            bg4.src,
        ],
    }
];

export default function IncrementBasicSeedPage() {
    // state
    const [activeCrop, setActiveCrop] = useState("tomato");
    // active images
    const activeImages =
        crops.find((item: any) => item.slug === activeCrop)?.images || [];
    return (
        <>
            <Breadcrumb
                title="Production"
                // subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Production" },
                ]}
            />

            {/* Why Choose India Section */}
            <section className="relative overflow-hidden bg-[#f8faf5] py-15 md:py-20 ">
                {/* Background Effects */}
                <div className="absolute -left-30 -top-30 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>

                <div className="absolute -bottom-30 -right-30 h-80 w-[320px] rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Center Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-md md:text-lg font-semibold uppercase tracking-[4px] text-primary">
                            Global Production Advantage
                        </span>

                        <h2 className="mt-2 text-3xl font-bold  text-dark-grey md:text-5xl lg:text-6xl">
                            Why Choose India For Seed Production?
                        </h2>

                        <div className="mx-auto mt-5 h-0.5 w-24 bg-secondary"></div>
                    </div>

                    {/* Main Layout */}
                    <div className="relative mt-8 md:mt-16">
                        <div className="grid items-center gap-5 md:gap-10 lg:grid-cols-12">

                            {/* Left Points */}
                            <div className="space-y-10 lg:col-span-3">
                                {[
                                    "Second Largest Producer In World",
                                    "Easy Availability of Skilled Human Resources",
                                    "Seed Production In Multiple Seasons",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-start gap-5 mb-2 md:mb-8"
                                    >
                                        {/* Creative Bullet */}
                                        <div className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center">
                                            {/* Pulse Ring */}
                                            <div className="absolute h-10 w-10 rounded-full border border-primary/20 transition duration-300 group-hover:scale-110 group-hover:border-secondary"></div>

                                            {/* Diamond */}
                                            <div className="flex h-5 w-5 rotate-45 items-center justify-center rounded-sm bg-primary transition duration-300 group-hover:rotate-135 group-hover:bg-secondary">
                                                <div className="h-2 w-2 rounded-full bg-white"></div>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="text-md md:text-xl font-bold leading-[1.6] text-dark-grey transition duration-300 group-hover:text-primary">
                                                {item}
                                            </h3>

                                            <div className="mt-3 h-0.5 w-12 rounded-full bg-secondary transition-all duration-300 group-hover:w-24"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Center Map */}
                            <div className="relative flex flex-col justify-center lg:col-span-6">
                                {/* Glow */}
                                <div className="absolute h-125 w-125 rounded-full bg-primary/5 blur-3xl"></div>

                                {/* Floating Circle */}
                                {/* <div className="absolute left-10 top-20 h-8 w-8 rounded-full bg-secondary/20 blur-sm"></div> */}

                                {/* <div className="absolute bottom-20 right-10 h-10 w-10 rounded-full bg-primary/10 blur-sm"></div> */}

                                {/* Map */}
                                <div className="relative">
                                    <Image
                                        src={map.src}
                                        alt="India Production Map"
                                        width={700}
                                        height={700}
                                        className="relative z-10 h-auto w-full max-w-137.5 object-contain transition duration-700 hover:scale-[1.02]"
                                    />

                                    {/* Decorative Ring */}
                                    {/* <div className="absolute inset-0 rounded-full border border-primary/10"></div> */}
                                </div>
                                <div className="mt-6 text-center">
                                    <h4 className="text-xl md:text-2xl font-bold text-primary">
                                        Our Work in Agro-climatic Zones
                                    </h4>

                                    <p className=" text-lg md:text-xl font-semibold text-secondary">
                                        Gujarat, Maharashtra & Karnataka
                                    </p>
                                </div>
                            </div>

                            {/* Right Points */}
                            <div className="space-y-10 lg:col-span-3">
                                {[
                                    "Diverse Region & Agro Climatic Zones For Production",
                                    "Cost-Effective Seed Production",
                                    "Quality Assurance Systems",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-start mb-2 md:mb-8 gap-5"
                                    >
                                        {/* Creative Bullet */}
                                        <div className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center">
                                            {/* Pulse Ring */}
                                            <div className="absolute h-10 w-10 rounded-full border border-secondary/20 transition duration-300 group-hover:scale-110 group-hover:border-primary"></div>

                                            {/* Diamond */}
                                            <div className="flex h-5 w-5 rotate-45 items-center justify-center rounded-sm bg-secondary transition duration-300 group-hover:rotate-135 group-hover:bg-primary">
                                                <div className="h-2 w-2 rounded-full bg-white"></div>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="text-md md:text-xl font-bold leading-[1.6] text-dark-grey transition duration-300 group-hover:text-primary">
                                                {item}
                                            </h3>

                                            <div className="mt-3 h-0.5 w-12 rounded-full bg-primary transition-all duration-300 group-hover:w-24"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Strength Section */}
            <section className="relative overflow-hidden bg-white py-15 md:py-20">
                {/* Background Blur */}
                <div className="absolute -left-25 top-0 h-75 w-75 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute -bottom-25 right-0 h-75 w-75 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-md md:text-lg font-semibold uppercase tracking-[4px] text-primary">
                            Production Excellence
                        </span>

                        <h2 className="mt-2 text-3xl font-bold leading-tight text-dark-grey md:text-6xl">
                            Our Strengths in Seed Production
                        </h2>

                        <div className="mx-auto mt-5 h-0.5 w-20 bg-secondary"></div>
                    </div>

                    {/* Main Layout */}
                    <div className="mx-auto mt-10 grid max-w-7xl items-center gap-16 lg:grid-cols-12">
                        {/* Left Content */}
                        <div className="space-y-10 lg:col-span-4">
                            {/* Item */}
                            <div className="group border-l-4 border-primary pl-6 transition duration-300 hover:translate-x-2">
                                {/* <span className="text-3xl font-bold uppercase tracking-[4px] text-primary">
                                    A
                                </span> */}

                                <h3 className="text-lg md:text-xl  text-dark-grey">
                                    Strategic production zones across agro-climatic
                                    regions.
                                </h3>
                            </div>

                            {/* Item */}
                            <div className="group border-l-4 border-secondary pl-6 transition duration-300 hover:translate-x-2">
                                {/* <span className="text-3xl font-bold uppercase tracking-[4px] text-secondary">
                                    C
                                </span> */}

                                <h3 className="text-lg md:text-xl   text-dark-grey">
                                    High quality & reliable production with traceability.
                                </h3>
                            </div>
                        </div>

                        {/* Center Visual */}
                        <div className="relative flex justify-center lg:col-span-4">
                            {/* Outer Circle */}
                            <div className="relative flex h-85 w-85 lg:h-65 lg:w-65 xl:h-85 xl:w-85 items-center justify-center rounded-full border-2 border-primary/50 bg-[#f8faf5]">
                                {/* Rotating Ring */}
                                <div className="absolute inset-5 rounded-full border-2 border-dashed border-primary/50 animate-[spin_20s_linear_infinite]"></div>

                                {/* Inner Circle */}
                                <div className="relative z-10 flex h-45 w-45 items-center justify-center rounded-full border border-primary/10 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
                                    {/* <div className="text-center">
                                        <h3 className="text-5xl font-black text-primary">
                                            KS
                                        </h3>

                                        <p className="mt-3 text-sm font-bold uppercase tracking-[4px] text-[#666]">
                                            Production
                                        </p>
                                    </div> */}

                                    <Image
                                        src={smallogo.src}
                                        alt="Kartavya Seeds"
                                        width={120}
                                        height={120}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Floating Labels */}
                                {/* <div className="absolute left-0 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
                                    A
                                </div>

                                <div className="absolute right-0 top-1/2 flex h-16 w-16 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-dark-grey shadow-lg">
                                    B
                                </div>

                                <div className="absolute bottom-0 left-1/2 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
                                    C
                                </div>

                                <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-dark-grey shadow-lg">
                                    D
                                </div> */}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-10 lg:col-span-4">
                            {/* Item */}
                            <div className="group border-l-4 border-primary pl-6 transition duration-300 hover:translate-x-2">
                                {/* <span className="text-3xl font-bold uppercase tracking-[4px] text-primary">
                                    B
                                </span> */}

                                <h3 className="text-lg md:text-xl  text-dark-grey">
                                    Experienced contract growers and Technical team.
                                </h3>
                            </div>

                            {/* Item */}
                            <div className="group border-l-4 border-secondary pl-6 transition duration-300 hover:translate-x-2">
                                {/* <span className="text-3xl font-bold uppercase tracking-[4px] text-secondary">
                                    D
                                </span> */}

                                <h3 className="text-lg md:text-xl text-dark-grey">
                                    Demand-driven production for timely supply in required quantities.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure & Facilities Section */}
            <section className="relative overflow-hidden bg-primary py-15 md:py-20">

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-sm md:text-lg flex gap-3 items-center justify-center font-semibold uppercase tracking-[4px] text-secondary">
                            <FaLeaf />
                            Advanced Infrastructure
                        </span>

                        <h2 className="mt-2 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            Infrastructure & Facilities
                        </h2>

                        {/* <p className="mx-auto mt-8 max-w-3xl text-lg leading-[2] text-white/70">
                            Modern facilities and controlled production systems
                            designed for high-quality and reliable seed production.
                        </p> */}

                        <div className="mx-auto mt-4 h-0.5 w-24 bg-secondary"></div>
                    </div>

                    {/* Slider */}
                    <div className="relative mt-10">
                        {/* Prev Button */}
                        <button className="facility-prev absolute -left-2.5 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition duration-300 hover:bg-secondary hover:text-dark-grey">
                            <FaArrowLeft />
                        </button>

                        {/* Next Button */}
                        <button className="facility-next absolute -right-2.5 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition duration-300 hover:bg-secondary hover:text-dark-grey">
                            <FaArrowRight />
                        </button>

                        <Swiper
                            modules={[Autoplay, Navigation]}
                            navigation={{
                                prevEl: ".facility-prev",
                                nextEl: ".facility-next",
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            speed={1000}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {facilities.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group overflow-hidden rounded-[15px] border border-white/10  transition duration-500 hover:-translate-y-3 ">
                                        {/* Image */}
                                        <div className="relative h-80 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-fill transition duration-700 group-hover:scale-110"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>


                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 w-full p-8">
                                                <h3 className="text-2xl font-bold  text-white">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="absolute -bottom-1 h-[115vh] md:h-[110vh] w-full opacity-20 pointer-events-none">
                    <Image
                        src={bg.src}
                        alt="background-texture"
                        fill
                        className="object-cover object-bottom"
                    />
                </div>
            </section>

            {/* Quality Control Protocol Section */}
            <section className="relative overflow-hidden bg-[#f8faf5] py-15 md:py-20 ">
                {/* Soft Background Effects */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-md md:text-lg font-semibold uppercase tracking-[4px] text-primary">
                            Quality Assurance
                        </span>

                        <h2 className="mt-2 text-3xl font-bold  text-dark-grey md:text-5xl">
                            Our Comprehensive Quality Control Protocol
                        </h2>

                        <p className="mx-auto mt-4 max-w-4xl text-lg  text-[#666]">
                            We employ a multi-layered testing protocol to validate
                            every aspect of seed quality.
                        </p>

                        <div className="mx-auto mt-5 h-0.5 w-24 bg-secondary"></div>
                    </div>

                    {/* Main Design */}
                    <div className="mx-auto mt-10 max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* Large Highlight Card */}
                            <div className="relative overflow-hidden rounded-[35px] bg-primary p-6 text-white md:col-span-2">
                                {/* Decorative */}
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>

                                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-secondary/20"></div>

                                <div className="relative">
                                    {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                        01
                                    </span> */}

                                    <h3 className="text-2xl md:text-3xl font-bold">
                                        Seed Sampling
                                    </h3>

                                    <p className="mt-2 max-w-3xl text-md md:text-lg text-white/80">
                                        The seed lots arriving at the processing plant are subjected to comprehensive sampling. Seeds are drawn from every bag to create a truly representative sample.
                                    </p>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="group rounded-[35px] border-2 border-primary/30 bg-[#fdfdfd] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                    02
                                </span> */}

                                <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                    Physical Purity Test
                                </h3>

                                <p className="mt-2 text-md md:text-lg text-[#666]">
                                    A meticulous analysis is performed to confirm freedom from inert matter, weed seeds, and other crop seeds.
                                </p>
                            </div>

                            {/* Card */}
                            <div className="group rounded-[35px] border-2 border-primary/30 bg-[#fdfdfd] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                    03
                                </span> */}

                                <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                    Moisture Test
                                </h3>

                                <p className="mt-2 text-md md:text-lg text-[#666]">
                                    This test precisely measures moisture content to ensure optimal seed viability, vigor, and storage life.
                                </p>
                            </div>

                            {/* Large Highlight Card */}
                            <div className="relative overflow-hidden rounded-[35px] bg-primary p-6 text-white md:col-span-2">
                                {/* Decorative */}
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>

                                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-secondary/20"></div>

                                <div className="relative">
                                    {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                        04
                                    </span> */}

                                    <h3 className="text-2xl md:text-3xl font-bold">
                                        Germination Test
                                    </h3>

                                    <p className="mt-2 max-w-3xl text-md md:text-lg text-white/80">
                                        Standardized tests are conducted to guarantee a germination rate that ensures strong, uniform crop establishment.
                                    </p>
                                </div>
                            </div>

                            {/* Large Highlight Card */}
                            <div className="relative overflow-hidden rounded-[35px] bg-primary p-6 text-white md:col-span-2">
                                {/* Decorative */}
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>

                                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-secondary/20"></div>

                                <div className="relative">
                                    {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                        05
                                    </span> */}

                                    <h3 className="text-2xl md:text-3xl font-bold">
                                        Genetic Purity Test
                                    </h3>

                                    <p className="mt-2 max-w-3xl text-md md:text-lg text-white/80">
                                        We use Grow Out Tests (GOT) and DNA fingerprinting to ensure that the seed is true-to-type, preventing contamination and protecting genetic integrity.
                                    </p>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="group rounded-[35px] border-2 border-primary/30 bg-[#fdfdfd] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                    04
                                </span> */}

                                <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                    Seed Health Test
                                </h3>

                                <p className="mt-2 text-md md:text-lg text-[#666]">
                                    Proactive screening for seed-borne pathogens is performed to ensure a healthy start for the crop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seed Production Process Section */}
            <section className="relative overflow-hidden bg-white py-15 md:py-20 ">
                {/* Soft Background */}
                <div className="absolute -left-30 -top-30 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>

                <div className="absolute -bottom-30 -right-30 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="max-w-5xl">
                        <span className="text-md md:text-lg font-semibold uppercase tracking-[4px] text-primary">
                            Production Workflow
                        </span>

                        <h2 className="mt-2 text-3xl font-bold  text-dark-grey md:text-5xl lg:text-6xl">
                            Summary Of Seed Production Process
                        </h2>

                        <div className="mt-4 h-0.5 w-24 bg-secondary"></div>
                    </div>

                    {/* Main Layout */}
                    <div className="relative mx-auto mt-10 max-w-7xl">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 hidden h-full w-px bg-[#dedede] lg:block"></div>

                        <div className="space-y-8">
                            {/* Item */}
                            <div className="group grid gap-4 md:gap-8 lg:grid-cols-12">
                                {/* Number */}
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 text-xl md:text-2xl items-center justify-center rounded-full border border-primary/20 bg-white  font-bold text-primary transition duration-300 group-hover:scale-110">
                                        01
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-4 md:gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                                Production Planning
                                            </h3>
                                        </div>

                                        <div className="lg:col-span-8">
                                            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                                {[
                                                    "Requirement Analysis",
                                                    "Cultivation Management",
                                                    "Agro-Climatic Zone Selection",
                                                ].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="group/item flex items-center gap-3"
                                                    >
                                                        {/* Unique Bullet */}
                                                        <div className="relative flex h-6 w-6 items-center justify-center">
                                                            {/* Outer Ring */}
                                                            <div className="absolute h-6 w-6 rounded-full border border-primary/20 transition duration-300 group-hover/item:scale-110 group-hover/item:border-primary"></div>

                                                            {/* Inner Diamond */}
                                                            <div className="h-2.5 w-2.5 rotate-45 rounded-xs bg-secondary transition duration-300 group-hover/item:rotate-135 group-hover/item:bg-primary"></div>
                                                        </div>

                                                        {/* Text */}
                                                        <span className="text-base text-[#666] transition duration-300 group-hover/item:text-dark-grey">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group grid gap-4 md:gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 text-xl md:text-2xl items-center justify-center rounded-full border border-secondary/20 bg-white  font-bold text-secondary transition duration-300 group-hover:scale-110">
                                        02
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-4 md:gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                                Field Selection
                                            </h3>
                                        </div>

                                        <div className="lg:col-span-8">
                                            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                                {[
                                                    "Crop suitability",
                                                    "Irrigation Facilities",
                                                    "Production Viability",
                                                ].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="group/item flex items-center gap-3"
                                                    >
                                                        {/* Unique Bullet */}
                                                        <div className="relative flex h-6 w-6 items-center justify-center">
                                                            {/* Outer Ring */}
                                                            <div className="absolute h-6 w-6 rounded-full border border-primary/20 transition duration-300 group-hover/item:scale-110 group-hover/item:border-primary"></div>

                                                            {/* Inner Diamond */}
                                                            <div className="h-2.5 w-2.5 rotate-45 rounded-xs bg-secondary transition duration-300 group-hover/item:rotate-135 group-hover/item:bg-primary"></div>
                                                        </div>

                                                        {/* Text */}
                                                        <span className="text-base text-[#666] transition duration-300 group-hover/item:text-dark-grey">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group grid gap-4 md:gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 text-xl md:text-2xl items-center justify-center rounded-full border border-primary/20 bg-white font-bold text-primary transition duration-300 group-hover:scale-110">
                                        03
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-4 md:gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                                Foundation Seed Release
                                            </h3>
                                        </div>

                                        <div className="lg:col-span-8">
                                            {/* <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                                {[
                                                    "Crop suitability",
                                                    "Irrigation Facilities",
                                                    "Production Viability",
                                                ].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="group/item flex items-center gap-3"
                                                    >
                                                        
                                                        <div className="relative flex h-6 w-6 items-center justify-center">
                                                            
                                                            <div className="absolute h-6 w-6 rounded-full border border-primary/20 transition duration-300 group-hover/item:scale-110 group-hover/item:border-primary"></div>

                                                            
                                                            <div className="h-2.5 w-2.5 rotate-45 rounded-xs bg-secondary transition duration-300 group-hover/item:rotate-135 group-hover/item:bg-primary"></div>
                                                        </div>

                                                        
                                                        <span className="text-base text-[#666] transition duration-300 group-hover/item:text-dark-grey">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group grid gap-4 md:gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 text-xl md:text-2xl items-center justify-center rounded-full border border-secondary/20 bg-white font-bold text-secondary transition duration-300 group-hover:scale-110">
                                        04
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-4 md:gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                                Cultivation
                                            </h3>
                                        </div>

                                        <div className="lg:col-span-8">
                                            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                                {[
                                                    "Nursery Sowing",
                                                    "Field Preparation",
                                                    "Transplanting",
                                                    "Crop Management",
                                                    "Pollination"
                                                ].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="group/item flex items-center gap-3"
                                                    >
                                                        {/* Unique Bullet */}
                                                        <div className="relative flex h-6 w-6 items-center justify-center">
                                                            {/* Outer Ring */}
                                                            <div className="absolute h-6 w-6 rounded-full border border-primary/20 transition duration-300 group-hover/item:scale-110 group-hover/item:border-primary"></div>

                                                            {/* Inner Diamond */}
                                                            <div className="h-2.5 w-2.5 rotate-45 rounded-xs bg-secondary transition duration-300 group-hover/item:rotate-135 group-hover/item:bg-primary"></div>
                                                        </div>

                                                        {/* Text */}
                                                        <span className="text-base text-[#666] transition duration-300 group-hover/item:text-dark-grey">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group grid gap-4 md:gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 text-xl md:text-2xl items-center justify-center rounded-full border border-primary/20 bg-white font-bold text-primary transition duration-300 group-hover:scale-110">
                                        05
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-4 md:gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                                Quality Management
                                            </h3>
                                        </div>

                                        <div className="lg:col-span-8">
                                            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                                {[
                                                    "Isolation",
                                                    "Rouging",
                                                    "Plant Protection"
                                                ].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="group/item flex items-center gap-3"
                                                    >
                                                        {/* Unique Bullet */}
                                                        <div className="relative flex h-6 w-6 items-center justify-center">
                                                            {/* Outer Ring */}
                                                            <div className="absolute h-6 w-6 rounded-full border border-primary/20 transition duration-300 group-hover/item:scale-110 group-hover/item:border-primary"></div>

                                                            {/* Inner Diamond */}
                                                            <div className="h-2.5 w-2.5 rotate-45 rounded-xs bg-secondary transition duration-300 group-hover/item:rotate-135 group-hover/item:bg-primary"></div>
                                                        </div>

                                                        {/* Text */}
                                                        <span className="text-base text-[#666] transition duration-300 group-hover/item:text-dark-grey">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group grid gap-4 md:gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 text-xl md:text-2xl items-center justify-center rounded-full border border-secondary/20 bg-white font-bold text-secondary transition duration-300 group-hover:scale-110">
                                        06
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-4 md:gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                                Harvest
                                            </h3>
                                        </div>

                                        <div className="lg:col-span-8">
                                            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                                {[
                                                    "Seed Extraction",
                                                    "Drying",
                                                    "Bagging"
                                                ].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="group/item flex items-center gap-3"
                                                    >
                                                        {/* Unique Bullet */}
                                                        <div className="relative flex h-6 w-6 items-center justify-center">
                                                            {/* Outer Ring */}
                                                            <div className="absolute h-6 w-6 rounded-full border border-primary/20 transition duration-300 group-hover/item:scale-110 group-hover/item:border-primary"></div>

                                                            {/* Inner Diamond */}
                                                            <div className="h-2.5 w-2.5 rotate-45 rounded-xs bg-secondary transition duration-300 group-hover/item:rotate-135 group-hover/item:bg-primary"></div>
                                                        </div>

                                                        {/* Text */}
                                                        <span className="text-base text-[#666] transition duration-300 group-hover/item:text-dark-grey">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group grid gap-4 md:gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 text-xl md:text-2xl items-center justify-center rounded-full border border-primary/20 bg-white font-bold text-primary transition duration-300 group-hover:scale-110">
                                        07
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-4 md:gap-8  lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-dark-grey">
                                                Dispatch
                                            </h3>
                                        </div>

                                        <div className="lg:col-span-8">
                                            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                                {[
                                                    "Labeling",
                                                    "Grading",
                                                    "Lot verification"
                                                ].map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="group/item flex items-center gap-3"
                                                    >
                                                        {/* Unique Bullet */}
                                                        <div className="relative flex h-6 w-6 items-center justify-center">
                                                            {/* Outer Ring */}
                                                            <div className="absolute h-6 w-6 rounded-full border border-primary/20 transition duration-300 group-hover/item:scale-110 group-hover/item:border-primary"></div>

                                                            {/* Inner Diamond */}
                                                            <div className="h-2.5 w-2.5 rotate-45 rounded-xs bg-secondary transition duration-300 group-hover/item:rotate-135 group-hover/item:bg-primary"></div>
                                                        </div>

                                                        {/* Text */}
                                                        <span className="text-base text-[#666] transition duration-300 group-hover/item:text-dark-grey">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Crops Section */}
            <section className="relative overflow-hidden bg-primary py-15 md:py-20">
                {/* Texture */}
                <div className="absolute inset-0 opacity-[0.05]">
                    <div className="h-full w-full "></div>
                </div>

                {/* Blur Effects */}
                <div className="absolute -left-30 -top-30 h-80 w-80 rounded-full bg-white/5 blur-3xl"></div>

                <div className="absolute -bottom-30 -right-30 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-md md:text-lg font-semibold uppercase tracking-[4px] text-secondary">
                            Our Core Crops
                        </span>

                        <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                            Production Expertise
                        </h2>

                        <div className="mx-auto mt-3 h-0.5  w-24 bg-secondary"></div>
                    </div>

                    {/* Crop Tabs */}
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                        {crops.map((crop, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCrop(crop.slug)}
                                className={`rounded-full px-7 py-3 text-sm font-bold uppercase  transition duration-300 ${activeCrop === crop.slug
                                    ? "bg-secondary text-dark-grey shadow-lg"
                                    : "bg-white text-primary hover:bg-secondary hover:text-dark-grey"
                                    }`}
                            >
                                {crop.name}
                            </button>
                        ))}
                    </div>

                    {/* Images Grid */}
                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {activeImages.map((image, index) => (
                            <div
                                key={index}
                                className="group flex justify-center"
                            >
                                {/* Rounded Image */}
                                <div className="relative h-65 w-65 overflow-hidden rounded-2xl  bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition duration-500 group-hover:-translate-y-3 group-hover:border-secondary">

                                    {/* Glow */}
                                    <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                                    {/* Image */}
                                    <Image
                                        src={image}
                                        alt="Crop"
                                        fill
                                        className="object-fill transition duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>

                                    {/* Crop Name */}
                                    {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                                        <h3 className="text-3xl font-black uppercase text-white">
                                            {
                                                crops.find(
                                                    (item) => item.slug === activeCrop
                                                )?.name
                                            }
                                        </h3>

                                        <div className="mx-auto mt-3 h-[3px] w-20 rounded-full bg-secondary transition-all duration-300 group-hover:w-28"></div>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -bottom-1 h-[305vh] md:h-[103vh] w-full opacity-20 pointer-events-none">
                    <Image
                        src={bg.src}
                        alt="background-texture"
                        fill
                        className="object-cover object-bottom"
                    />
                </div>
            </section>

            {/* Our service for client section */}
            <section className="relative overflow-hidden bg-[#f8f6f1] py-15 md:py-20">

                <div className="container mx-auto px-6 md:px-12">
                    {/* Main Box */}


                    <div className="relative overflow-hidden rounded-[40px] border border-primary/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                        {/* Mobile Top Strip */}
                        <div className="flex h-16 items-center justify-center bg-primary lg:hidden">
                            <span className="text-lg font-black tracking-[4px] text-white/20">
                                KARTAVYA SEEDS
                            </span>
                        </div>

                        {/* Decorative Left Side */}
                        <div className="absolute left-0 top-0 hidden h-full w-[18%] bg-primary lg:block">

                            <div className="flex h-full items-center justify-center">

                                <div className="-rotate-90 whitespace-nowrap text-5xl font-black tracking-[3px] text-white/10">
                                    KARTAVYA SEEDS
                                </div>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="relative z-10 lg:pl-[20%] p-6 md:p-16">
                            <span className="text-md md:text-lg font-semibold uppercase tracking-[4px] text-secondary">
                                Our Services For Clients
                            </span>
                            {/* Heading */}
                            <h2 className="mb-7 text-3xl md:text-5xl font-black text-primary">
                                Our Organization Provides
                            </h2>

                            {/* Services Grid */}
                            <div className="grid gap-4 md:grid-cols-2">

                                {[
                                    "Consistent Quality",
                                    "Reliable Seed Production",
                                    "Confidentiality of Parents Lines",
                                    "Disinfected Seed Production Process",
                                    "Prompt Deliveries",
                                    "Customization per-region and climate",
                                    "Technical support for performance trials",
                                ].map((item, index) => (

                                    <div
                                        key={index}
                                        className="group flex items-center gap-3 rounded-2xl border border-primary/10 bg-[#faf8f4] p-3 transition-all duration-300 hover:border-secondary hover:bg-white hover:shadow-xl"
                                    >

                                        {/* Bullet */}
                                        <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary transition-all duration-300 group-hover:bg-secondary">

                                            <div className="h-3 w-3 rotate-45 bg-white"></div>

                                        </div>

                                        {/* Text */}
                                        <h3 className="text-md md:text-xl font-semibold  text-primary">
                                            {item}
                                        </h3>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
