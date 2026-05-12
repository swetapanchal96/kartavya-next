"use client";

import Breadcrumb from "@/app/Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

import Image from "next/image";
import Link from "next/link";

import {
    FaArrowRight,
    FaCalendarAlt,
    FaAngleLeft,
    FaAngleRight
} from "react-icons/fa";
import AnimatedHeading from "../Components/AnimatedHeading";

const blogs = [
    {
        title: "Future of Sustainable Farming",
        description:
            "Explore sustainable farming solutions and agricultural innovations helping farmers grow better every season.",
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop",
        slug: "future-of-sustainable-farming",
        date: "08 May 2026",
    },
    {
        title: "Modern Seed Technology",
        description:
            "Advanced seed technologies improving productivity, crop quality and better resistance for modern agriculture.",
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1400&auto=format&fit=crop",
        slug: "modern-seed-technology",
        date: "12 May 2026",
    },
    {
        title: "Eco-Friendly Agriculture",
        description:
            "Learn smart techniques to improve soil quality and protect natural resources while achieving better farming outcomes.",
        image:
            "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1400&auto=format&fit=crop",
        slug: "eco-friendly-agriculture",
        date: "18 May 2026",
    },
    {
        title: "Innovation In Crop Research",
        description:
            "Research-driven seed development focused on high yield, disease resistance and climate adaptability.",
        image:
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1400&auto=format&fit=crop",
        slug: "innovation-in-crop-research",
        date: "22 May 2026",
    },
];

export default function BlogPage() {
    return (
        <>
            <Breadcrumb
                title="Blogs"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blogs" },
                ]}
            />

            <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
                {/* Background Blur */}
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />


                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto mb-10 max-w-4xl text-center">
                        <span className="mb-5 inline-block text-sm font-bold uppercase tracking-[6px] text-primary">
                            BLogs
                        </span>

                        <AnimatedHeading className="text-4xl font-black uppercase  text-primary sm:text-5xl md:text-6xl">
                            Agricultural Insights &
                            <span className="block text-secondary">
                                Farming Knowledge
                            </span>
                        </AnimatedHeading>
                    </div>


                    {/* Blog Grid */}
                    <div className="grid gap-5 xl:grid-cols-2">
                        {blogs.map((blog, index) => (
                            <Link
                                key={index}
                                href={`/blog-detail`}
                                className="group grid overflow-hidden rounded-[35px] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)] lg:grid-cols-[48%_52%]"
                            >
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-dark-grey/30 via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative flex flex-col justify-center p-4">
                                    {/* Date */}
                                    {/* <div className="mb-2 flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                            <FaCalendarAlt />
                                        </div>

                                        <span className="text-sm font-bold uppercase tracking-[3px] text-primary">
                                            {blog.date}
                                        </span>
                                    </div> */}

                                    {/* Title */}
                                    <h3 className="max-w-xl text-2xl font-black  text-primary transition duration-300 group-hover:text-secondary ">
                                        {blog.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 max-w-2xl text-lg  text-[#777]">
                                        {blog.description}
                                    </p>

                                    {/* Bottom */}
                                    <div className="mt-3 flex items-center gap-2">
                                        <span className="text-lg font-bold text-secondary">
                                            Read More
                                        </span>

                                        <div className="flex h-12 w-12 items-center justify-center rounded-full   text-secondary transition duration-300 group-hover:translate-x-2">
                                            <FaArrowRight />
                                        </div>
                                    </div>

                                    {/* Background Number */}
                                    <div className="absolute right-6 top-6 text-[120px] font-black leading-none text-secondary/5">
                                        0{index + 1}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-10 flex items-center justify-center gap-4">
                        {/* Prev Button */}
                        <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#666] transition duration-300 hover:border-secondary hover:bg-secondary hover:text-white">
                            <FaAngleLeft className="text-xl"/>
                        </button>

                        {/* Page Numbers */}
                        {[1, 2, 3, 4].map((page) => (
                            <button
                                key={page}
                                className={`flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold transition duration-300 ${page === 1
                                        ? "bg-secondary text-white shadow-[0_10px_30px_rgba(180,211,66,0.35)]"
                                        : "border border-[#e5e5e5] bg-white text-[#666] hover:border-secondary hover:bg-secondary hover:text-white"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e5e5e5] bg-white text-[#666] transition duration-300 hover:border-secondary hover:bg-secondary hover:text-white">
                            <FaAngleRight className="text-xl"/>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}