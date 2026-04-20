"use client";
import React from "react";
import Image from "next/image";
import bg from '@/app/assets/section-bg-1.png'
import { FaLeaf } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";

const features = [
  { left: "Exceptional Seed Quality", right: "Climate Adaptability" },
  { left: "Robust R&D Team", right: "Farmer-Centric Approach" },
  { left: "Cutting-Edge Production", right: "Global Reach" },
  { left: "Stringent Quality Control", right: "Complete in-house testing" }
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      
      {/* 1. TOP AREA (Based on Image 2) */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 mb-16">
        <span className="flex items-center gap-2 rounded-full border border-secondary/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-secondary shadow-sm">
          <span className="text-sm"><FaLeaf /></span> Why Choose Us
        </span>
        
        
          <AnimatedHeading className="mt-6 max-w-3xl text-4xl font-extrabold text-primary md:text-5xl leading-tight">
            Pioneering Innovations in the <br /> Global Agriculture
          </AnimatedHeading>
        
      </div>

      {/* 2. MAIN CONTENT AREA (Based on Image 1) */}
      <div className="container relative z-20 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          
          {/* Left Side Points */}
          <div className="flex flex-col gap-4">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-center rounded-lg bg-blue p-4 text-center text-white transition-transform hover:scale-105"
              >
                <span className="text-sm font-semibold md:text-base">{item.left}</span>
              </div>
            ))}
          </div>

          {/* Center Image (Microscope/Lab) */}
          <div className="relative flex justify-center py-10 lg:py-0">
            <div className="relative h-100 w-full max-w-100">
               <Image 
                src="/path-to-your-microscope.png" 
                alt="R&D Lab" 
                fill 
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side Points */}
          <div className="flex flex-col gap-4">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-center rounded-lg  bg-blue p-4 text-center text-white transition-transform hover:scale-105"
              >
                <span className="text-sm font-semibold md:text-base">{item.right}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM BACKGROUND IMAGE (Based on Image 3) */}
      <div className="absolute -bottom-17.25 -right-50 z-10 h-[90vh] w-full opacity-100 pointer-events-none">
        <Image 
          src={bg.src}
          alt="background-texture" 
          fill 
          className="object-cover object-bottom"
        />
      </div>

    </section>
  );
}