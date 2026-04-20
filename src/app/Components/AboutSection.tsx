"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLeaf, FaPlay } from "react-icons/fa";
import about from '@/app/assets/about-img-1.jpg'

export default function AboutVideoSection() {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <section className="w-full bg-[#f8f8f8] py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid items-center gap-10 lg:grid-cols-[45%_55%] ">


                    {/* left SIDE - Video/Image */}
                    <div className="relative flex justify-center">
                        <div className="relative h-120 w-100 overflow-hidden rounded-[220px] shadow-xl">
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
                                    <button
                                        onClick={() => setPlayVideo(true)}
                                        className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
                                    >
                                        <FaPlay className="ml-1 text-[28px] text-[#8bbd2d]" />
                                    </button>
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
                    </div>

                    {/* right SIDE - Content */}
                    <div className="p-4">
                        <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[4px] text-secondary">
                            <span className="text-lg"><FaLeaf /></span>
                            About Us
                        </p>
                        
                        <h2 className="max-w-xl text-4xl font-bold text-primary md:text-[50px]">
                            Protecting nature nurturing a sustainable future
                        </h2>

                        <p className="mt-4 text-[16px] leading-6 text-[#727272]">
                            Kartavya Seeds is committed to supply genetically enhanced high
                            quality seeds to farmers. We are an{" "}
                            <strong>
                                ISO 9001:2015 certified Company.
                            </strong>
                        </p>

                        <p className="mt-2 text-[16px] leading-6 text-[#727272]">
                            Our focus on Research and Development has won us recognition from
                            Government of India’s Department of Scientific and Industrial
                            Research (DSIR) of the Ministry of Science and Technology.
                        </p>

                        <p className="mt-2 text-[16px] leading-6 text-[#727272]">
                            Our seeds are ingrained with qualities to rich, flavorful, nutritious crop. While the farmers harvest prosperous crops, they are able to achieve it with High resources efficiency. We produce, process and supply superior quality seeds for a wide range of crops including In Vegetables <strong> Chilli, Okra, Watermelon, Musk Melon, Tomato, Cabbage, Cucumber, Gourds and Several Vegetable Crops& In Field Crop Cotton, Maize, Bajra, Mustard, Sweet Corn, Cumin, Sesamum ,High Nutritive Fodder.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}