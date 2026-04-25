"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";
import bg from '@/app/assets/kartavya-bg-3.png'

import product1 from "@/app/assets/103.png";
import product2 from "@/app/assets/109.png";
import product3 from "@/app/assets/BALI.png";
import product4 from "@/app/assets/MASTI.png";
import product5 from "@/app/assets/NAGMA.png";
import product6 from "@/app/assets/ANU.png";
import product7 from "@/app/assets/KARTAVYA-VIJAY.png";
import product8 from "@/app/assets/KARTAVYA-SUPER.png";
import product9 from "@/app/assets/LALI.png";
import product10 from "@/app/assets/HONEY.png";
import product11 from "@/app/assets/CHANDRA.png";
import product12 from "@/app/assets/RUDRA-55.png";
import product13 from "@/app/assets/GOLDY.png";
import product14 from "@/app/assets/KARTAVYA-2-IN-1.png";


const categories = [
  "All",
  "Tomato",
  "Chilli",
  "Bitter Gourd",
  "Bottle Gourd",
  "Sponge Gourd",
  "Cucumber",
  "Watermelon",
  "Muskmelon",
  "Okra",
  "Cabbage",
  "Radish",
  "Sweet Corn",
  "Cotton",
];

const products = [
  {
    id: 1,
    category: "Tomato",
    image: product1,
  },
  {
    id: 2,
    category: "Tomato",
    image: product2,
  },
  {
    id: 3,
    category: "Bitter Gourd",
    image: product3,
  },
  {
    id: 4,
    category: "Bitter Gourd",
    image: product4,
  },
  {
    id: 5,
    category: "Bottle Gourd",
    image: product5,
  },
  {
    id: 6,
    category: "Bottle Gourd",
    image: product6,
  },
  {
    id: 7,
    category: "Watermelon",
    image: product7,
  },
  {
    id: 8,
    category: "Watermelon",
    image: product8,
  },
  {
    id: 9,
    category: "Muskmelon",
    image: product9,
  },
  {
    id: 10,
    category: "Muskmelon",
    image: product10,
  },
  {
    id: 11,
    category: "Okra",
    image: product11,
  },
  {
    id: 12,
    category: "Cabbage",
    image: product12,
  },
  {
    id: 13,
    category: "Sweet Corn",
    image: product13,
  },
  {
    id: 14,
    category: "Cotton",
    image: product14,
  },
];

export default function OurProductsSection() {
  const [activeTab, setActiveTab] = useState("All");

  // const filteredProducts =
  //   activeTab === "All"
  //     ? products
  //     : products.filter((item) => item.category === activeTab);

  const filteredProducts =
    (activeTab === "All"
      ? products
      : products.filter((item) => item.category === activeTab)
    ).slice(0, 8);

  return (
    // <section className="py-20 bg-linear-to-br from-blue/50 via-secondary/35  to-primary/50 overflow-hidden relative">
    <section className="py-20 bg-secondary overflow-hidden relative">
      <div className="absolute inset-0 bg-yellow/10 pointer-events-none"></div>

      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center mb-6">
          <p className="flex items-center justify-center gap-3 uppercase tracking-[5px] text-primary font-semibold mb-4">
            <FaLeaf />
            Our Product
          </p>

          <AnimatedHeading className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Highlights Product
          </AnimatedHeading>
        </div>

        {/* Filter Tabs */}
        <div className=" rounded-full  p-4 md:p-5 mb-5 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-7 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300
                  ${activeTab === item
                    ? "bg-primary text-white shadow-lg"
                    : "text-primary bg-white border-primary border hover:border-secondary hover:bg-yellow hover:text-primary"
                  }`}
              >
                {item}
              </button>
            ))}

          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex justify-center"
            >
              <div className="relative w-65 h-65 rounded-full overflow-hidden cursor-pointer shadow-xl border-4 border-white hover:border-secondary transition-all duration-500 hover:-translate-y-2">

                {/* Product Image */}
                <Image
                  src={product.image}
                  alt="Product"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>

                {/* Shine Effect */}
                <div className="absolute top-0 -left-[150%] w-[50%] h-full bg-white/20 skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="absolute -bottom-1  h-[165vh] w-full opacity-50 pointer-events-none">
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