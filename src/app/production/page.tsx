"use client"

import AnimatedHeading from "../Components/AnimatedHeading";
import Breadcrumb from "../Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";
// imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import img1 from '@/app/assets/T-4.jpg'
import img2 from '@/app/assets/Picture4.png'
import img3 from '@/app/assets/sw-pe.jpeg'
import img4 from '@/app/assets/Wa-4.jpeg'
import img5 from '@/app/assets/M-2.jpg'
import img6 from '@/app/assets/Wa-4.jpeg'
import img7 from '@/app/assets/Cu-4.png'
import img8 from '@/app/assets/Bi-2.png'
import img9 from '@/app/assets/CHANDRA.png'
import Image from "next/image";
import smallogo from '@/app/assets/ks--.png'
import { FaArrowLeft, FaArrowRight, FaLeaf } from "react-icons/fa";
import nursery from '@/app/assets/farm-nursery.webp';
import nethouse from '@/app/assets/net-house.webp';
import dryunit from '@/app/assets/drying-unit.webp';
import storage from '@/app/assets/storage.webp';
import lab from '@/app/assets/lab.webp';
import advance from '@/app/assets/advance-tech.webp';
import bg from '@/app/assets/kartavya-bg-3.png'


// crop images data
const cropImages = [
    {
        title: "Tomato",
        image: img1.src,
    },
    {
        title: "Hot Pepper",
        image: img2.src,
    },
    {
        title: "Sweet Pepper",
        image: img3.src,
    },
    {
        title: "Watermelon",
        image: img4.src,
    },
    {
        title: "Musk Melon",
        image: img5.src,
    },
    {
        title: "Eggplant",
        image: img6.src,
    },
    {
        title: "Cucumber",
        image: img7.src,
    },
    {
        title: "Bitter Gourd",
        image: img8.src,
    },
    {
        title: "Okra",
        image: img9.src,
    },
];

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
        image: "/images/facilities/facility-4.jpg",
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



export default function IncrementBasicSeedPage() {
    return (
        <>
            <Breadcrumb
                title="Production"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Production" },
                ]}
            />

            {/* Why Choose India Section */}
            <section className="relative overflow-hidden bg-[#f8faf5] py-20 ">
                {/* Background Effects */}
                <div className="absolute -left-25 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute -bottom-30 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="max-w-4xl">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Global Production Advantage
                        </span>

                        <h2 className="mt-2 text-4xl font-bold  text-dark-grey md:text-5xl lg:text-6xl">
                            Why Choose India For Seed Production?
                        </h2>

                        <div className="mt-6 h-0.5 w-24 bg-secondary"></div>
                    </div>

                    {/* Main Layout */}
                    <div className="mt-10 grid gap-16 lg:grid-cols-12">
                        {/* Left Large Statement */}
                        <div className="relative lg:col-span-5">
                            <div className="sticky top-32">
                                <span className="text-[140px] font-black leading-none text-primary/5">
                                    INDIA
                                </span>

                                <div className="-mt-8">
                                    <h3 className="text-3xl font-bold text-dark-grey md:text-4xl">
                                        A Globally Trusted Destination For Modern Seed
                                        Production
                                    </h3>

                                    <p className="mt-4 text-lg  text-[#666]">
                                        India offers the perfect balance of climate diversity,
                                        skilled manpower, multi-season production capability,
                                        and cost-effective agricultural infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Scrollable Content */}
                        <div className="lg:col-span-7">
                            <div className="h-112.5 overflow-y-auto  scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                <div className="space-y-8">
                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-primary transition duration-300 group-hover:translate-x-2">
                                            01
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal text-dark-grey">
                                                Second Largest Producer In World
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-secondary transition duration-300 group-hover:translate-x-2">
                                            02
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Easily Availability Of Skill Human Resources
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-primary transition duration-300 group-hover:translate-x-2">
                                            03
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Seed Production In Multiple Seasons
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-secondary transition duration-300 group-hover:translate-x-2">
                                            04
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Diverse Region & Agro Climatic Zones For
                                                Production
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-primary transition duration-300 group-hover:translate-x-2">
                                            05
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Cost-Effective Seed Production
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8">
                                        <span className="text-6xl font-bold text-secondary transition duration-300 group-hover:translate-x-2">
                                            06
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Quality Assurance Systems
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Strength Section */}
            <section className="relative overflow-hidden bg-white py-20">
                {/* Background Blur */}
                <div className="absolute -left-25 top-0 h-75 w-75 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute -bottom-25 right-0 h-75 w-75 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Production Excellence
                        </span>

                        <h2 className="mt-2 text-4xl font-bold leading-tight text-dark-grey md:text-6xl">
                            Our Strength in Seeds Production
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

                                <h3 className=" text-xl  text-dark-grey">
                                    Strategic production zones across agro-climatic
                                    regions.
                                </h3>
                            </div>

                            {/* Item */}
                            <div className="group border-l-4 border-secondary pl-6 transition duration-300 hover:translate-x-2">
                                {/* <span className="text-3xl font-bold uppercase tracking-[4px] text-secondary">
                                    C
                                </span> */}

                                <h3 className=" text-xl   text-dark-grey">
                                    Quality & Reliable production with traceability.
                                </h3>
                            </div>
                        </div>

                        {/* Center Visual */}
                        <div className="relative flex justify-center lg:col-span-4">
                            {/* Outer Circle */}
                            <div className="relative flex h-85 w-85 items-center justify-center rounded-full border border-primary/10 bg-[#f8faf5]">
                                {/* Rotating Ring */}
                                <div className="absolute inset-5 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]"></div>

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

                                <h3 className=" text-xl  text-dark-grey">
                                    Experienced contract growers and Technical team.
                                </h3>
                            </div>

                            {/* Item */}
                            <div className="group border-l-4 border-secondary pl-6 transition duration-300 hover:translate-x-2">
                                {/* <span className="text-3xl font-bold uppercase tracking-[4px] text-secondary">
                                    D
                                </span> */}

                                <h3 className=" text-xl text-dark-grey">
                                    Demand-Driven Production for Timely Supply per
                                    Required Quantities
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure & Facilities Section */}
            <section className="relative overflow-hidden bg-primary py-20 lg:py-24">

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-md flex gap-3 items-center justify-center font-bold uppercase tracking-[4px] text-secondary">
                            <FaLeaf />
                            Advanced Infrastructure
                        </span>

                        <h2 className="mt-2 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
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
                <div className="absolute -bottom-1  h-[110vh] w-full opacity-20 pointer-events-none">
                    <Image
                        src={bg.src}
                        alt="background-texture"
                        fill
                        className="object-cover object-bottom"
                    />
                </div>
            </section>

            {/* Quality Control Protocol Section */}
            <section className="relative overflow-hidden bg-[#f8faf5] py-20 ">
                {/* Soft Background Effects */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>

                <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Quality Assurance
                        </span>

                        <h2 className="mt-2 text-4xl font-bold  text-dark-grey md:text-5xl">
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

                                    <h3 className=" text-3xl font-bold">
                                        Seed Sampling
                                    </h3>

                                    <p className="mt-2 max-w-3xl text-lg text-white/80">
                                        The seed lots arrived at processing plant are subjected to comprehensive sampling lots a from every bag so to create a representative sample.
                                    </p>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="group rounded-[35px] border border-[#ececec] bg-[#fdfdfd] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                    02
                                </span> */}

                                <h3 className=" text-3xl font-bold text-dark-grey">
                                    Physical Purity Test
                                </h3>

                                <p className="mt-2 text-lg text-[#666]">
                                    A meticulous analysis to confirm freedom from inert matter, weed seeds, and other crop seeds.
                                </p>
                            </div>

                            {/* Card */}
                            <div className="group rounded-[35px] border border-[#ececec] bg-[#fdfdfd] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                    03
                                </span> */}

                                <h3 className=" text-3xl font-bold text-dark-grey">
                                    Moisture Test
                                </h3>

                                <p className="mt-2 text-lg text-[#666]">
                                    Precisely measuring moisture content to ensure optimal seed viability, vigor, and storage life.
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

                                    <h3 className=" text-3xl font-bold">
                                        Germination Test
                                    </h3>

                                    <p className="mt-2 max-w-3xl text-lg text-white/80">
                                        Standardized tests to guarantee a germination rate that ensures strong, uniform crop establishment.
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

                                    <h3 className=" text-3xl font-bold">
                                        Genetic Purity Test
                                    </h3>

                                    <p className="mt-2 max-w-3xl text-lg text-white/80">
                                        We use <strong> Grow Out Tests (GOT) and DNA fingerprinting </strong> to ensure that the seed is true-to-type, preventing contamination and protecting genetic integrity.
                                    </p>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="group rounded-[35px] border border-[#ececec] bg-[#fdfdfd] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                {/* <span className="text-lg font-bold uppercase tracking-[4px] text-secondary">
                                    04
                                </span> */}

                                <h3 className=" text-3xl font-bold text-dark-grey">
                                    Seed Health Test
                                </h3>

                                <p className="mt-2 text-lg text-[#666]">
                                    Pro active screening for seed-borne pathogens to ensure a healthy start for the crop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seed Production Process Section */}
            <section className="relative overflow-hidden bg-white py-20 ">
                {/* Soft Background */}
                <div className="absolute -left-30 -top-30 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>

                <div className="absolute -bottom-30 -right-30 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="max-w-5xl">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Production Workflow
                        </span>

                        <h2 className="mt-2 text-4xl font-bold  text-dark-grey md:text-5xl lg:text-6xl">
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
                            <div className="group grid gap-8 lg:grid-cols-12">
                                {/* Number */}
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white text-2xl font-bold text-primary transition duration-300 group-hover:scale-110">
                                        01
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-3xl font-bold text-dark-grey">
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
                            <div className="group grid gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-secondary/20 bg-white text-2xl font-bold text-secondary transition duration-300 group-hover:scale-110">
                                        02
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-3xl font-bold text-dark-grey">
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
                            <div className="group grid gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white text-2xl font-bold text-primary transition duration-300 group-hover:scale-110">
                                        03
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-3xl font-bold text-dark-grey">
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
                            <div className="group grid gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-secondary/20 bg-white text-2xl font-bold text-secondary transition duration-300 group-hover:scale-110">
                                        04
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-3xl font-bold text-dark-grey">
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
                            <div className="group grid gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white text-2xl font-bold text-primary transition duration-300 group-hover:scale-110">
                                        05
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-3xl font-bold text-dark-grey">
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
                            <div className="group grid gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-secondary/20 bg-white text-2xl font-bold text-secondary transition duration-300 group-hover:scale-110">
                                        06
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-8 border-b border-[#ececec] pb-6 lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-3xl font-bold text-dark-grey">
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
                            <div className="group grid gap-8 lg:grid-cols-12">
                                <div className="relative lg:col-span-2">
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white text-2xl font-bold text-primary transition duration-300 group-hover:scale-110">
                                        07
                                    </div>
                                </div>

                                <div className="lg:col-span-10">
                                    <div className="grid items-start gap-8  lg:grid-cols-12">
                                        <div className="lg:col-span-4">
                                            <h3 className="text-3xl font-bold text-dark-grey">
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

            {/* Core Crops Section */}
            <section className="relative overflow-hidden bg-[#f8faf5] py-20 ">
                {/* Background Blur */}
                <div className="absolute -left-30 -top-30 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>

                <div className="absolute -bottom-30 -right-30 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Production Expertise
                        </span>

                        <h2 className=" text-4xl font-bold leading-tight text-dark-grey md:text-5xl">
                            Our Core Crops
                        </h2>

                        <div className="mx-auto mt-4 h-0.5 w-24 bg-secondary"></div>
                    </div>

                    {/* Main Layout */}
                    <div className="mt-10 grid items-center gap-16 lg:grid-cols-12">
                        {/* Left Content */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                <h3 className="text-3xl font-bold  text-primary">
                                    Specialized Production Across Diverse Vegetable Crops
                                </h3>

                                <p className="mt-4 text-lgtext-[#666]">
                                    We focus on high-quality hybrid seed production across
                                    multiple vegetable crops grown under controlled and
                                    scientifically managed conditions.
                                </p>

                                {/* Crop List */}
                                <div className="mt-5 grid grid-cols-2 gap-y-2">
                                    {[
                                        "Tomato",
                                        "Hot Pepper",
                                        "Sweet Pepper",
                                        "Watermelon",
                                        "Musk Melon",
                                        "Eggplant",
                                        "Cucumber",
                                        "Bitter Gourd",
                                        "Okra",
                                    ].map((crop, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="h-2 w-2 rounded-full bg-primary"></div>

                                            <span className="text-lg font-medium text-dark-grey">
                                                {crop}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Slider */}
                        <div className="relative lg:col-span-8">
                            {/* Background Card */}
                            <div className="absolute inset-0 rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.05)]"></div>

                            <div className="relative p-6 md:p-10">
                                <Swiper
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}
                                    loop={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1.2,
                                            spaceBetween: 20,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 24,
                                        },
                                        1024: {
                                            slidesPerView: 2.5,
                                            spaceBetween: 28,
                                        },
                                    }}
                                >
                                    {cropImages.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="group overflow-hidden rounded-full border border-[#ececec] bg-[#f8faf5]">
                                                {/* Image */}
                                                <div className="relative h-65 w-65 overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className=" object-cover transition duration-700 group-hover:scale-110"
                                                    />

                                                    {/* Overlay */}
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

                                                    {/* Content */}
                                                    {/* <div className="absolute bottom-0 left-0 p-8">
                      <span className="text-sm font-bold uppercase tracking-[4px] text-secondary">
                        Core Crop
                      </span>

                      <h3 className="mt-3 text-3xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div> */}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
