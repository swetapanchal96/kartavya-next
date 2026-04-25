"use client";

import React from "react";
import { FaLeaf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AnimatedHeading from "./AnimatedHeading";
import Image from "next/image";
import bg from '@/app/assets/kartavya-bg-2.png'

const farmerVideos = [
    {
        id: 1,
        title:
            "Classic Okra",
        embed:
            "https://www.youtube.com/embed/WeT_WC5NQEU?si=K5Jhx3CU8UYfm0Jn",
    },
    {
        id: 2,
        title:
            "Padma Chilli",
        embed:
            "https://www.youtube.com/embed/vsTF7Eve2o8?si=_ZMktQI-qsQ5chw5",
    },
    {
        id: 3,
        title:
            "Magic Chilli",
        embed:
            "https://www.youtube.com/embed/CM7LRWeNHbg?si=x4iELFSE6WNNHnHg",
    },
    {
        id: 4,
        title:
            "Tansen Watermelon",
        embed:
            "https://www.youtube.com/embed/XRtvalh5WzA?si=yf7X6W3EF5zFc6-7",
    },
    {
        id: 5,
        title:
            "55 Cabbage",
        embed:
            "https://www.youtube.com/embed/5V6KnGiGHuw?si=r8ZcRvRm7ssmjeHK",
    },
];

export default function FarmerStoriesSection() {
    return (
        <section className="relative py-20 bg-[#f7f7f7] overflow-hidden">

            {/* Background Decorative Circle */}
            {/* Animated Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-100 h-100 rounded-full border border-secondary/80 animate-[zoomPulse_6s_ease-in-out_infinite]"></div>

            <div className="absolute top-10 right-10 w-75 h-75 rounded-full border border-secondary/80 animate-[zoomPulse_8s_ease-in-out_infinite]"></div>

            <div className="container mx-auto px-6 relative md:px-12">

                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="flex items-center justify-center gap-3 uppercase tracking-[5px] text-secondary font-semibold mb-2">
                        <FaLeaf />
                        Farmer Stories
                    </p>

                    <AnimatedHeading className="text-4xl md:text-5xl  font-bold text-primary leading-tight max-w-5xl mx-auto">
                        What Our Farmers Say About Kartavya
                    </AnimatedHeading>
                </div>

                {/* Video Slider */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-20"
                >
                    {farmerVideos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <div className="group">

                                {/* Video Card */}
                                <div className="rounded-[20px] overflow-hidden shadow-lg bg-white opacity-100 hover:shadow-2xl transition-all duration-500">

                                    {/* Video */}
                                    <div className="relative h-62.5 overflow-hidden">
                                        <iframe
                                            src={video.embed}
                                            title={video.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>

                                    {/* Title (max 2 lines) */}
                                    <div className="p-5">
                                        <h3 className="text-primary font-semibold text-lg leading-7 line-clamp-2 min-h-7 group-hover:text-secondary bg-white opacity-100 transition-all duration-300">
                                            {video.title}
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom Controls */}
                <div className="flex items-center justify-center mt-5">

                    
                    {/* <div className="flex items-center gap-8">

                        <button className="custom-prev w-12 h-12 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center text-2xl">
                            ‹
                        </button>

                    </div> */}
                    <div className="custom-pagination w-auto!"></div>

                    
                    {/* <button className="custom-next w-12 h-12 rounded-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center text-2xl">
                        ›
                    </button> */}
                </div>
            </div>

            {/* Bottom Grass Image */}
            {/* <div className="absolute bottom-0 left-0 w-full z-10 opacity-30">
                <Image
                    src={grass}
                    alt="Grass Border"
                    width={1920}
                    height={120}
                    className="w-full h-22.5 md:h-25 object-cover"
                    priority
                />
            </div> */}

            <div className="absolute -bottom-1  h-[90vh] w-full opacity-25 pointer-events-none">
                    <Image
                      src={bg.src}
                      alt="background-texture"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
        </section>
    );
}