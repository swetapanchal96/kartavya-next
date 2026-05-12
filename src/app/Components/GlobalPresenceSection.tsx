"use client";

import React from "react";
import Image from "next/image";
import worldMap from "@/app/assets/Kartavya-Global-Presence.webp";
import { FaLeaf } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";

const countries = [
  {
    name: "USA",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    name: "Italy",
    flag: "https://flagcdn.com/w40/it.png",
  },
  {
    name: "Turkey",
    flag: "https://flagcdn.com/w40/tr.png",
  },
  {
    name: "Jordan",
    flag: "https://flagcdn.com/w40/jo.png",
  },
  {
    name: "Iran",
    flag: "https://flagcdn.com/w40/ir.png",
  },
  {
    name: "Pakistan",
    flag: "https://flagcdn.com/w40/pk.png",
  },
  {
    name: "Bangladesh",
    flag: "https://flagcdn.com/w40/bd.png",
  },
  {
    name: "Thailand",
    flag: "https://flagcdn.com/w40/th.png",
  },
  {
    name: "Sri Lanka",
    flag: "https://flagcdn.com/w40/lk.png",
  },
  
  
  
];

export default function GlobalPresenceSection() {
  return (
    <section className="relative pt-20 bg-white overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="flex items-center text-lg justify-center gap-3 uppercase tracking-[5px] text-secondary font-semibold mb-4">
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

        {/* Main Content */}
        <div className="grid px-10 lg:grid-cols-12 items-center  gap-10">
          
          {/* Left Countries List */}
          <div className="lg:col-span-3">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-4 group"
              >
                {/* Flag */}
                <div className="w-10 h-10 rounded-full  flex items-center justify-center shrink-0  group-hover:scale-110 transition-all duration-300">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                </div>

                {/* Country Name */}
                <div>
                  <h3 className="text-2xl  font-bold text-primary leading-none">
                    {country.name}
                  </h3>

                  {/* <p className="text-primary/70 text-sm mt-1 tracking-wide">
                    Country Served
                  </p> */}
                </div>
              </div>
            ))}
          </div>

          {/* Right World Map */}
          <div className="lg:col-span-9">
            <div className="relative overflow-hidden">
              <div className="relative w-full h-[550px]">
                <Image
                  src={worldMap}
                  alt="Global Presence Map"
                  fill
                  className="object-contain transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}