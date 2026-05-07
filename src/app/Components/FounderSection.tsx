"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import founder from '@/app/assets/founder.png';
import bg from '@/app/assets/fact-bg.jpg';
import { FaLeaf } from "react-icons/fa";

export default function FounderSection() {
    const [isHovering, setIsHovering] = useState(false);

    // Animation Variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section className="relative w-full overflow-visible bg-[#0a2a1a] text-white">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-50 mix-blend-overlay bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${bg.src})` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-r from-[#0a2a1a] via-[#0a2a1a]/80 to-transparent"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

                    {/* LEFT: TEXT CONTENT */}
                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="py-16 lg:py-20"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                            <span className="text-secondary text-xl"><FaLeaf /></span>
                            <span className="text-lg font-bold uppercase tracking-[4px] text-gray-400">
                                Our Founder & CEO
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={fadeInUp}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            className="text-5xl md:text-[60px] font-extrabold leading-[1.1] mb-8 cursor-default"
                        >
                            Harshad Paneliya
                        </motion.h2>

                        <div className="space-y-6 text-[17px] leading-relaxed text-gray-300 max-w-xl">
                            <motion.p variants={fadeInUp}>
                                Harshad Paneliya, the Visionary Founder and CEO of Kartavya Seeds, is an
                                accomplished agriculturist and an expert plant breeder. With a robust academic
                                background in agriculture and years of dedicated research in seed breeding, he has
                                transformed his passion into a mission to empower farmers.
                            </motion.p>

                            <motion.p variants={fadeInUp}>
                                As a Plant breeder, Harshad Paneliya has played a pivotal role in developing high-yielding, stress-tolerant hybrids that meet the diverse needs of farmers. His ability to combine traditional farming wisdom with cutting-edge research has positioned Kartavya Seeds as a trusted partner for farmers across regions.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="pt-6">
                                <div className="border-l-4 border-yellow pl-6 py-2">
                                    <p className="text-white font-semibold text-lg italic leading-snug">
                                        "Harshad Paneliya leads with a vision of sustainable agriculture,
                                        ensuring 'Farmer's Growth Is Our Duty'. Every seed sown brings prosperity
                                        and progress to the farming community."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT: IMAGE AREA */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative flex h-full items-end justify-center lg:justify-end"
                    >
                        <div className="relative h-125 w-full max-w-137.5 md:h-150 lg:h-195 -mt-20 lg:-mt-32">
                            <Image
                                src={founder.src}
                                alt="Harshad Paneliya"
                                fill
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}