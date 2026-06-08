"use client";

import Image from "next/image";
import { useState } from "react";
import { FaLeaf, FaPlay } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import about from "@/app/assets/hero-bg-2.jpg";
import AnimatedHeading from "@/app/Components/AnimatedHeading";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutVideoSection() {
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
                        {/* <div className="relative h-60 md:h-120 w-full overflow-hidden rounded-xl shadow-xl">
                            {!playVideo ? (
                                <>
                                    
                                    <Image
                                        src={about.src}
                                        alt="About Video"
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    
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
                                <video
                                    className="h-full w-full object-contain"
                                    controls
                                    autoPlay
                                    playsInline
                                >
                                    <source
                                        src="/pdf/kartavya-seed.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            )}
                        </div> */}
                        <div className="relative h-60 md:h-120 w-full overflow-hidden rounded-xl ">
                            <video
                                className="h-full w-full object-contain"
                                controls
                                autoPlay
                                muted
                                playsInline
                            >
                                <source
                                    src="/pdf/kartavya-seed.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>

                    {/* right SIDE - Content */}
                    <motion.div
                        className="p-0 md:p-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.p
                            custom={0.2}
                            variants={fadeUp}
                            className="mb-3 flex items-center gap-2 text-md md:text-lg font-semibold uppercase tracking-[1px] md:tracking-[4px] text-secondary"
                        >
                            <span className="text-md md:text-lg">
                                <FaLeaf />
                            </span>
                            Research & Development
                        </motion.p>

                        <motion.div custom={0.4} variants={fadeUp}>
                            <h2 className="max-w-xl text-2xl font-bold text-primary md:text-[46px]">
                                Recognized by DSIR(Govt of India) for Research & Development Excellence
                            </h2>
                        </motion.div>

                        <motion.p
                            custom={0.6}
                            variants={fadeUp}
                            className="mt-3 text-[16px] leading-6 md:leading-7 text-[#555]"
                        >
                            Our Focus On Research and Development has won us
                            recognition from Government Of India’s Department of
                            Scientific and Industrial Research (DSIR) of the
                            Ministry of Science and Technology.
                        </motion.p>

                        <motion.p
                            custom={0.8}
                            variants={fadeUp}
                            className="mt-3 text-[16px] leading-6 md:leading-7 text-[#555]"
                        >
                            We operate a <strong>24-acre Main Research and Development Station</strong>
                            {" "}along with <strong>Three Regional Research Facilities</strong>
                            {" "}across India.
                        </motion.p>

                        <motion.p
                            custom={1}
                            variants={fadeUp}
                            className="mt-3 text-[16px] leading-6 md:leading-7 text-[#555]"
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
    );
}