"use client";

import Breadcrumb from "@/app/Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

import Image from "next/image";
import Link from "next/link";

import {
    FaArrowRight,
    FaDownload,
    FaLeaf,
    FaEye
} from "react-icons/fa";
import AnimatedHeading from "../Components/AnimatedHeading";
import tomato from '@/app/assets/109.png';
import okra from '@/app/assets/CHANDRA.png';
import cabbage from '@/app/assets/RUDRA-55.png';
import bitter from '@/app/assets/MASTI.png';
import chilli from '@/app/assets/DHANUSH.png';

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

const vegetableProducts = [
    {
        name: "Tomato",
        image:
            tomato.src,
        slug: "tomato",
    },
    {
        name: "Bitter Gourd",
        image:
            bitter.src,
        slug: "Bitter Gourd",
    },
    {
        name: "chilli",
        image:
            chilli.src,
        slug: "brinjal",
    },
    {
        name: "Okra",
        image:
            okra.src,
        slug: "okra",
    },
    {
        name: "Cabbage",
        image:
            cabbage.src,
        slug: "cabbage",
    },
    {
        name: "Cauliflower",
        image:
            "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?q=80&w=1200&auto=format&fit=crop",
        slug: "cauliflower",
    },

];

export default function ProductPage() {
    return (
        <>
            <Breadcrumb
                title="Vegetable Crops"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Vegetable Crops" },
                ]}
            />

            <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
                {/* Background Blur */}
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    <div className="grid gap-5 xl:grid-cols-[70%_30%]">
                        {/* LEFT SIDE */}
                        <div>
                            {/* Heading */}
                            <div className="mb-8">
                                <span className="mb-2 inline-block text-sm font-bold uppercase tracking-[6px] text-primary">
                                    Our Products
                                </span>

                                <AnimatedHeading className="text-4xl font-black uppercase  text-primary sm:text-5xl md:text-6xl">
                                    Premium
                                    <span className="block text-secondary">
                                        Vegetable Seeds
                                    </span>
                                </AnimatedHeading>
                            </div>


                            {/* Product Grid */}
                            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
                                {vegetableProducts.map((product, index) => (
                                    <Link
                                        key={index}
                                        href={`/variety`}
                                        className="group relative flex flex-col items-center text-center"
                                    >
                                        {/* Circle Image */}
                                        <div className="relative">
                                            {/* Outer Border */}
                                            <div className="absolute inset-0 scale-110 rounded-full transition duration-500 group-hover:    scale-[1.18] group-hover:border-secondary" />

                                            {/* Image */}
                                            <div className="relative h-55 w-55 overflow-hidden rounded-full  bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] ">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover transition duration-700 group-hover:scale-110"
                                                />
                                            </div>

                                            {/* Small Decorative Dot */}

                                        </div>

                                        {/* Product Name */}
                                        <div className="mt-8">
                                            <h3 className="text-3xl font-black uppercase tracking-[1px] text-dark-grey transition duration-300 group-hover:text-secondary">
                                                {product.name}
                                            </h3>

                                            {/* Bottom Line */}
                                            <div className="mx-auto mt-5 h-0.75 w-16 rounded-full bg-secondary transition-all duration-500 group-hover:w-28" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="space-y-8">
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
                            <div className="relative overflow-hidden rounded-[35px] bg-dark-grey p-8 text-white shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
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
                                    Download our latest product catalog and explore premium seed
                                    varieties.
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
            </section>
        </>
    );
}