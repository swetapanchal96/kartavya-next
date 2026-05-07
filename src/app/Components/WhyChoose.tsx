"use client";
import React from "react";
import Image from "next/image";
import bg from '@/app/assets/kartavya bg-1.png'
import { FaLeaf } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";
import whyChoose from '@/app/assets/Kartavya-Why-1choose-center.webp'

const features = [
  { left: "Exceptional Seed Quality", right: "Climate Adaptability" },
  { left: "Robust R&D Team", right: "Farmer-Centric Approach" },
  { left: "Cutting-Edge Production", right: "Global Reach" },
  { left: "Stringent Quality Control", right: "Complete in-house testing" }
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-15">

      {/* 1. TOP AREA (Based on Image 2) */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 mb-10">
        <span className="flex items-center gap-2 rounded-full border border-secondary/30 px-4 py-1 text-lg font-bold uppercase tracking-widest text-secondary shadow-sm">
          <span className="text-sm"><FaLeaf /></span> Why Choose Us
        </span>

        <AnimatedHeading className="mt-6 max-w-3xl text-4xl font-extrabold text-primary md:text-5xl leading-tight">
          Pioneering Innovations in the <br /> Global Agriculture
        </AnimatedHeading>

      </div>

      {/* 2. MAIN CONTENT AREA (Based on Image 1) */}
      <div className="container relative z-20 mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">

          {/* Left Side Points */}
          <div className="flex flex-col gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-linear-to-r from-primary via-blue to-secondary p-0.5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-5">

                  {/* Number Circle */}
                  <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-md">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  {/* <div className="flex h-11 w-11 min-w-11 items-center justify-center rounded-full bg-secondary/20 text-primary">
                    <FaLeaf className="text-lg" />
                  </div> */}

                  {/* Text */}
                  <span className="text-left text-sm font-semibold text-primary md:text-base">
                    {item.left}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image (Microscope/Lab) */}
          <div className="relative flex justify-center py-10 lg:py-0!">
            <div className="absolute -bottom-60 h-120 w-full max-w-100">
              <Image
                src={whyChoose.src}
                alt="R&D Lab"
                fill
                className="object-cover drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side Points */}
          <div className="flex flex-col gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-linear-to-r from-secondary via-blue to-primary p-0.5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-5">

                  {/* Number Circle */}
                  <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white shadow-md">
                    {index + 5}
                  </div>

                  {/* Icon */}
                  {/* <div className="flex h-11 w-11 min-w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
                    <FaLeaf className="text-lg" />
                  </div> */}

                  {/* Text */}
                  <span className="text-left text-sm font-semibold text-secondary md:text-base">
                    {item.right}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BACKGROUND IMAGE (Based on Image 3) */}
      {/* <div className="absolute -bottom-17.25 -right-50 z-10 h-[90vh] w-full opacity-100 pointer-events-none">
        <Image
          src={bg.src}
          alt="background-texture"
          fill
          className="object-cover object-bottom"
        />
      </div> */}

      <div className="absolute -bottom-1 z-10 h-[90vh] w-full opacity-40 pointer-events-none">
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