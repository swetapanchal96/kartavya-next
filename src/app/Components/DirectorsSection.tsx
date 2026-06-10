"use client";

import React from "react";
import Image from "next/image";
import team1 from "@/app/assets/Bhaveshsir.webp";
import team2 from "@/app/assets/NiteshSir.webp";
import { FaLeaf } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";

export default function DirectorsSection() {
    return (
        <section className="bg-[#f7f7f7] py-15 md:py-20">
            <div className="w-full overflow-hidden!">

                {/* Director 1 */}
                <div className="grid grid-cols-1 pb-12 lg:grid-cols-5 gap-8 md:gap-16 items-center">
                    {/* Left Side Image - 40% */}
                    <div className="lg:col-span-2 w-full flex justify-start">
                        <div className="group relative w-full h-105 rounded-md overflow-hidden cursor-pointer">
                            {/* Image */}
                            <Image
                                src={team1}
                                alt="Bhavesh Savaliya"
                                className="object-cover object-top transition-all duration-700 ease-in-out group-hover:scale-110"
                            />

                            {/* Overlay Effect */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700"></div>

                            {/* Shine Effect */}
                            <div className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/20 rotate-12 skew-x-12 group-hover:left-[140%] transition-all duration-1000 ease-in-out"></div>

                        </div>
                    </div>
 
                    {/* Right Side Content - 60% */}
                    <div className="lg:col-span-3 px-5 lg:px-0 lg:pr-10">
                        <p className="flex items-center gap-4 text-md md:text-lg uppercase tracking-[4px] text-secondary font-semibold mb-2 md:mb-4">
                           <FaLeaf /> Our Director
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2 md:mb-5">
                            Bhavesh Savaliya
                        </h2>

                        <p className="text-light-grey text-md md:text-lg leading-6 md:leading-8">
                            Bhavesh Savaliya, a B.E. Chemical Graduate, brings a unique blend of technical expertise and innovative vision to Kartavya Seeds. With his strong background, Bhavesh Savaliya plays a vital role in steering the company towards cutting-edge advancements in seed development and agricultural solutions. As a dedicated leader, he focuses on empowering farmers with high-quality seeds that ensure superior yield and better sustainability. His commitment to innovation and farmer welfare is at the core of Kartavya Seeds mission to drive agricultural growth and success.
                        </p>
                    </div>
                </div>

                {/* Director 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16 items-center">

                    {/* Left Side Content - 60% */}
                    <div className="lg:col-span-3 order-2 lg:order-1 px-5 lg:px-0 lg:pl-10">
                        <p className="flex text-md md:text-lg items-center gap-4 uppercase tracking-[4px] text-secondary font-semibold mb-2 md:mb-4">
                           <FaLeaf /> Our Director
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-5">
                            Nitesh Savaliya
                        </h2>

                        <p className="text-light-grey text-md md:text-lg leading-6 md:leading-8">
                            Nitesh Savaliya, as Director of Kartavya Seeds, brings strategic vision and leadership to the company's operations. With a deep understanding of agriculture and a passion for farmer-centric solutions, he focuses on fostering innovation and delivering exceptional seed quality. His dedication ensures Kartavya Seeds continues to thrive as a trusted partner for farmers nationwide.
                        </p>
                    </div>

                    {/* Right Side Image - 40% */}
                    <div className="lg:col-span-2 order-1 lg:order-2 w-full flex justify-start">
                        <div className="group relative w-full h-105 rounded-md overflow-hidden cursor-pointer">
                            {/* Image */}
                            <Image
                                src={team2}
                                alt="Nitesh Savaliya"
                                fill
                                className="object-cover object-top transition-all duration-700 ease-in-out group-hover:scale-110"
                            />

                            {/* Overlay Effect */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700"></div>

                            {/* Shine Effect */}
                            <div className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/20 rotate-12 skew-x-12 group-hover:left-[140%] transition-all duration-1000 ease-in-out"></div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}