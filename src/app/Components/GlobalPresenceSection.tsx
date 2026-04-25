"use client";

import React from "react";
import Image from "next/image";
import worldMap from "@/app/assets/Kartavya-Global-Presence.webp";
import { FaLeaf } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";

export default function GlobalPresenceSection() {
  return (
    <section className="relative pt-20  bg-white overflow-hidden">
      <div className="container mx-auto  relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-0">
          <p className="flex items-center justify-center gap-3 uppercase tracking-[5px] text-secondary font-semibold mb-4">
            <FaLeaf />
            Global Presence
          </p>

          <AnimatedHeading className="text-4xl md:text-5xl lg:text-5xl font-bold text-primary leading-tight max-w-5xl mx-auto">
            Expanding Across The World
          </AnimatedHeading>

          <p className="text-primary/70 text-lg max-w-3xl mx-auto mt-4 leading-8">
            Kartavya Seeds proudly serves farmers across multiple countries,
            delivering premium seed quality, sustainable agriculture solutions,
            and trusted farming partnerships worldwide.
          </p>
        </div>

        {/* World Map Section */}
        <div className="relative  overflow-hidden  border border-white/10! ">

          {/* Map Image */}
          <div className="relative w-full h-162.5">
            <Image
              src={worldMap}
              alt="Global Presence Map"
              fill
              className="object-contain transition-all duration-700 "
              priority
            />
          </div>

          {/* Overlay Gradient */}
          {/* <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div> */}

          {/* Shine Sweep Effect */}
          {/* <div className="absolute top-0 -left-[150%] w-[40%] h-full bg-white/10 skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div> */}
        </div>

        
      </div>
    </section>
  );
}