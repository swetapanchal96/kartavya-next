"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

export default function ExperienceSection() {
    return (
        <section className="relative overflow-hidden py-6 bg-primary">
            
            <div className="mx-auto container px-6 lg:px-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl border border-white/20 bg-white/90 py-4 backdrop-blur-xl shadow-lg"
                >
                    <div className="flex flex-col items-center justify-center text-center md:flex-row md:gap-4">

                        <h2 className="text-5xl font-black leading-none text-primary md:text-7xl">
                            20+
                        </h2>

                        <h2 className="text-2xl font-semibold uppercase tracking-[6px] text-primary md:text-4xl">
                            Years of Experience
                        </h2>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}