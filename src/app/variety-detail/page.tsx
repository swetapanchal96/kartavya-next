"use client";

import Breadcrumb from "@/app/Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

import Image from "next/image";
import Link from "next/link";

import {
    FaArrowRight,
    FaCheckCircle,
    FaDownload,
    FaLeaf,
    FaEye
} from "react-icons/fa";
import AnimatedHeading from "../Components/AnimatedHeading";
import variety1 from '@/app/assets/JUMBO.png';
import variety2 from '@/app/assets/KABUL.png';
import variety3 from '@/app/assets/Kailash.png';
import variety4 from '@/app/assets/KAMINI.png';

const categories = [
    {
        name: "Vegetable Crops",
        slug: "vegetable-crops",
    },
    {
        name: "Field Crops",
        slug: "field-crops",
    },
];

const galleryImages = [
    variety1.src,
    variety2.src,
    variety3.src,
    variety4.src,
];

const specifications = [
    "High yielding hybrid variety",
    "Excellent fruit firmness and color",
    "Strong disease resistance",
    "Uniform fruit size and shape",
    "Better shelf life and transportation quality",
    "Suitable for all seasonal cultivation",
    "High market demand variety",
    "Early maturity and vigorous growth",
];

export default function VarietyDetailPage() {
    return (
        <>
            <Breadcrumb
                title="Jumbo"
                subtitle="Premium Tomato Variety"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    {
                        label: "Vegetable Crops",
                        href: "/product",
                    },
                    {
                        label: "Tomato Varieties",
                        href: "/variety",
                    },
                    { label: "Jumbo" },
                ]}
            />

            <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
                {/* Background Blur */}
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    <div className="grid gap-5 xl:grid-cols-[70%_30%]">
                        {/* LEFT CONTENT */}
                        <div>
                            {/* Heading */}
                            <div className="mb-7">
                                <span className="mb-1 inline-block text-sm font-bold uppercase tracking-[6px] text-primary">
                                    Tomato Variety
                                </span>

                                <AnimatedHeading className="text-4xl font-black uppercase leading-tight text-primary sm:text-5xl md:text-6xl">
                                    Jumbo
                                </AnimatedHeading>
                            </div>



                            {/* IMAGE SHOWCASE */}
                            <div className="mt-10 grid  lg:grid-cols-[1fr_1fr]">
                                {/* LEFT BIG ROUND IMAGE */}
                                <div className="flex items-center justify-start">
                                    <div className="group relative">
                                        {/* Outer Ring */}
                                        <div className="absolute inset-0 scale-110 rounded-full  transition duration-500 group-hover:scale-[1.15] group-hover:border-secondary" />

                                        {/* Main Image */}
                                        <div className="relative h-80 w-80 overflow-hidden rounded-full   bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
                                            <Image
                                                src={galleryImages[0]}
                                                alt="KS - 101"
                                                fill
                                                className="object-cover transition duration-700 group-hover:scale-110"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-linear-to-t from-dark-grey/70 via-transparent to-transparent" />


                                            {/* Bottom Content */}
                                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                                                <h3 className="text-3xl font-black uppercase text-white">
                                                    Jumbo
                                                </h3>

                                                <div className="mx-auto mt-2 h-0.75 w-20 rounded-full bg-secondary" />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                {/* RIGHT ROUND IMAGES */}
                                <div className="grid grid-cols-2 gap-6 self-center">
                                    {galleryImages.slice(1, 5).map((image, index) => (
                                        <div
                                            key={index}
                                            className="group relative flex items-center justify-center"
                                        >
                                            {/* Outer Ring */}
                                            <div className="absolute inset-0 scale-110 rounded-full transition duration-500 group-hover:scale-[1.15] group-hover:border-secondary/40" />

                                            {/* Image */}
                                            <div className="relative h-45 w-45 overflow-hidden rounded-full  bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
                                                <Image
                                                    src={image}
                                                    alt="Gallery"
                                                    fill
                                                    className="object-cover transition duration-700 group-hover:scale-110"
                                                />

                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-dark-grey/10 transition duration-300 group-hover:bg-transparent" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-10">
                                <div className="mb-5 flex items-center gap-5">
                                    <div className="h-0.5 w-15 bg-secondary" />

                                    <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
                                        Product Information
                                    </span>
                                </div>

                                <h3 className="mb-4 text-4xl font-black uppercase text-dark-grey">
                                    Variety Details
                                </h3>

                                <p className="max-w-5xl text-lg text-[#666]">
                                    Jumbo is a premium hybrid tomato variety developed for
                                    high productivity, superior fruit quality and excellent
                                    adaptability. This variety offers strong plant vigor, better
                                    disease tolerance and outstanding market acceptance.
                                </p>
                            </div>

                            {/* Specifications */}
                            <div className="mt-5">

                                {/* Features */}
                                <div className="grid gap-x-5 gap-y-3 md:grid-cols-2">
                                    {specifications.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4"
                                        >
                                            {/* Icon */}
                                            <div className="mt-1 text-primary">
                                                <FaCheckCircle className="text-lg" />
                                            </div>

                                            {/* Text */}
                                            <p className="text-lg leading-[1.9] text-[#555]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div>
                            <div className="sticky top-32 space-y-8">
                                {/* Categories */}
                                <div className="rounded-[35px] border border-[#e5e5e5] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                            <FaLeaf className="text-xl" />
                                        </div>

                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-[4px] text-primary">
                                                Categories
                                            </span>

                                            <h3 className=" text-2xl font-black text-dark-grey">
                                                Product Categories
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {categories.map((category, index) => (
                                            <Link
                                                key={index}
                                                href={`/products/${category.slug}`}
                                                className={`group flex items-center justify-between rounded-2xl border px-3 py-3 transition duration-300 ${category.slug === "vegetable-crops"
                                                    ? "border-secondary bg-secondary text-white"
                                                    : "border-[#eee] hover:border-secondary/30 hover:bg-[#fafafa]"
                                                    }`}
                                            >
                                                <span className="font-bold uppercase tracking-[2px]">
                                                    {category.name}
                                                </span>

                                                <FaArrowRight
                                                    className={`transition duration-300 group-hover:translate-x-1 ${category.slug === "vegetable-crops"
                                                        ? "text-white"
                                                        : "text-primary"
                                                        }`}
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Catalog */}
                                <div className="relative overflow-hidden rounded-[35px] bg-dark-grey p-7 text-white shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
                                    {/* Background Circle */}
                                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-30 border-white/5" />

                                    {/* <span className="text-xs font-bold uppercase tracking-[4px] text-secondary">
                                        Download
                                    </span> */}

                                    <h3 className="mt-2 text-3xl font-black leading-tight">
                                        Product
                                        <span className="pl-2 text-secondary">
                                            Catlog
                                        </span>
                                    </h3>

                                    <p className="mt-2  text-white/70">
                                        Download our latest catalog and explore premium agricultural
                                        seed varieties.
                                    </p>

                                    <div className="mt-5 flex items-center gap-4">
                                        <button className="flex items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase  text-dark-grey transition duration-300 hover:bg-secondary whitespace-nowrap">
                                            <FaEye className="text-sm" />

                                            <span>View PDF</span>
                                        </button>

                                        <button className="flex items-center justify-center gap-3 rounded-full bg-secondary px-5 py-3 text-xs font-bold uppercase  text-dark-grey transition duration-300 hover:bg-white whitespace-nowrap">
                                            <FaDownload className="text-sm" />

                                            <span>Download PDF</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}