"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";
import bg from '@/app/assets/kartavya-Our-Product .png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Link from "next/link";

interface OurProductsSectionProps {
  products: any[];
  loading?: boolean;
}


export default function OurProductsSection({
  products,
  loading,
}: OurProductsSectionProps) {

  const toTitleCase = (text: string) =>
  text
    .toLowerCase()
    .split(" ")
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");


  return (
    // <section className="py-20 bg-linear-to-br from-blue/50 via-secondary/35  to-primary/50 overflow-hidden relative">
    <section className="py-15 md:py-20 bg-[#0a2a1a] overflow-hidden relative">
      {/* <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div> */}

      {/* Background Blur */}
      {/* <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center mb-6">
          <p className="flex text-md md:text-lg items-center justify-center gap-3 uppercase tracking-[5px] text-white font-semibold mb-4">
            <FaLeaf />
            Our Product
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            Highlights Product
          </h2>
        </div>

        {/* Filter Tabs */}
        {/* <div className=" rounded-full  p-4 md:p-5 mb-5 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">

            {products.map((product, index) => (
              <button
                key={product.id || index}
                onClick={() => { }}
                className="px-7 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 text-primary bg-white border-primary border hover:border-secondary hover:bg-yellow hover:text-primary"
              >
                {product.title}
              </button>
            ))}

          </div>
        </div> */}

        {/* Products Slider */}
        {loading ? (

          <div className="text-center text-2xl font-semibold text-white">
            Loading Products...
          </div>

        ) : products?.length > 0 ? (
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              speed={1000}
              navigation={{
                nextEl: ".product-next",
                prevEl: ".product-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >

              {products.map((product: any, index: number) => (

                <SwiperSlide key={product.id || index}>

                  <Link
                    href={`/variety?slug=${product.slug}&type=${product.type === "vegetable"
                      ? 1
                      : product.type === "fruit_crops"
                        ? 3
                        : 2
                      }`}
                    className="group flex flex-col items-center text-center"
                  >

                    {/* Rounded Image */}
                    <div className="relative w-65 h-65 rounded-full overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2">

                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        unoptimized
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>

                      {/* Shine Effect */}
                      <div className="absolute top-0 -left-[150%] w-[50%] h-full bg-white/20 skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>

                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-2xl font-bold text-white transition duration-300 group-hover:text-secondary">
                      {toTitleCase(product.title)}
                    </h3>

                  </Link>

                </SwiperSlide>

              ))}

            </Swiper>
            {/* Navigation Buttons */}
            <div className="pointer-events-none absolute left-0 top-1/2 z-20 flex w-full -translate-y-1/2 items-center justify-between ">

              {/* Prev */}
              <button className="product-prev pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white/10 text-4xl text-white backdrop-blur-md transition-all duration-300 hover:bg-yellow hover:text-primary">
                <FaChevronLeft className="text-lg" />
              </button>

              {/* Next */}
              <button className="product-next pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-white/10 text-4xl text-white backdrop-blur-md transition-all duration-300 hover:bg-yellow hover:text-primary">
                <FaChevronRight className="text-lg" />
              </button>

            </div>
          </div>

        ) : (

          <div className="text-center text-2xl font-semibold text-white">
            No Products Found.
          </div>

        )}

        
      </div>

      <div className="absolute -bottom-1  h-[103vh] w-full opacity-50 pointer-events-none">
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