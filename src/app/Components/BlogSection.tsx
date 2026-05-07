"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaArrowRight } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";

import blog1 from "@/app/assets/post-1.jpg";
import blog2 from "@/app/assets/post-2.jpg";
import blog3 from "@/app/assets/post-3.jpg";
import bg from '@/app/assets/kartavya-bg-4.png'

export default function BlogSection() {
  return (
    // <section className="py-20 bg-linear-to-br from-blue/50 via-secondary/35  to-primary/50 overflow-hidden relative">
      <section className="py-20 bg-primary overflow-hidden relative">
      {/* Background Blur */}
      {/* <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="flex items-center text-lg justify-center gap-3 uppercase tracking-[5px] text-white font-semibold mb-4">
            <FaLeaf />
            Latest Blog
          </p>

          <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Insights & Agricultural Stories
          </AnimatedHeading>
        </div>

        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left Large Blog Card */}
          <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-500 group">

            {/* Image */}
            <div className="relative h-88 overflow-hidden">
              <Image
                src={blog1}
                alt="Blog Image"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-3xl font-bold text-primary mb-2 leading-tight">
                How to Improve Sustainable Farming
              </h3>

              <p className="text-light-grey text-md leading-6 mb-6">
                Discover modern agricultural practices that improve crop
                quality, increase yield, and promote long-term environmental
                sustainability for future generations.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-3 text-secondary font-semibold text-lg hover:gap-4 transition-all duration-300"
              >
                Read More
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Side Small Cards */}
          <div className="space-y-8">

            {/* Card 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-500 group">

              {/* Image */}
              <div className="relative h-75 md:h-full overflow-hidden">
                <Image
                  src={blog2}
                  alt="Blog Image"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-3 leading-tight">
                  Future of Renewable Energy
                </h3>

                <p className="text-light-grey text-md leading-6 mb-3">
                  Explore sustainable farming solutions and agricultural
                  innovations helping farmers grow better every season.
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-3 text-secondary font-semibold text-lg hover:gap-4 transition-all duration-300"
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-500 group">

              {/* Image */}
              <div className="relative h-75 md:h-full overflow-hidden">
                <Image
                  src={blog3}
                  alt="Blog Image"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary mb-3 leading-tight">
                  Eco-Friendly Gardening
                </h3>

                <p className="text-light-grey text-md leading-6 mb-3">
                  Learn smart techniques to improve soil quality and protect
                  natural resources while achieving better farming outcomes.
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-3 text-secondary font-semibold text-lg hover:gap-4 transition-all duration-300"
                >
                  Read More
                  <FaArrowRight />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute -bottom-1  h-[145vh] w-full opacity-30 pointer-events-none">
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