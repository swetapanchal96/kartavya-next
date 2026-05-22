"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import logo from "@/app/assets/Kartavya-Seeds-Logo-round.png"; // Adjust path to your

const socialLinks = [
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/@kartavyaseeds3833",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/kartavyaseeds",
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/kartavyaseeds",
  }
  // {
  //   icon: FaLinkedinIn,
  //   link: "https://linkedin.com",
  // },
];

export default function Footer() {
  return (
    <>

      <footer className="bg-primary text-white ">
        {/* TOP NAVIGATION STRIP */}

        <div className="container mx-auto px-6 md:px-12">
          {/* TOP SECTION: CONTACT INFO BAR */}
          <div className="flex flex-wrap items-center justify-between gap-8 py-10 border-b border-white/20">
            {/* Logo */}
            <div className=" rounded-full p-2 w-45 h-32 flex items-center justify-center">
              <Link href='/'>
                <Image src={logo} alt="Kartavya Seeds" className="object-contain" />
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 max-w-sm">
              <div className="bg-yellow hover:bg-secondary p-4 rounded-full text-primary text-xl shrink-0 transition-all duration-500 ease-in-out">
                <IoLocationSharp className="h-8 w-8" />
              </div>
              <div>
                <h4 className="font-bold text-[22px] leading-tight">Address</h4>
                <p className="text-md text-gray-200">
                  C/904, Signature - II, Opp. Relief Hotel, Sarkhej - Sanand Road,
                  Ahmedabad - 382 210. Gujarat, INDIA.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center group gap-4">
              <div className="bg-yellow group-hover:bg-secondary  p-4 rounded-full text-primary text-xl shrink-0 transition-all duration-500 ease-in-out">
                <FaPhoneAlt className="h-7 w-7" />
              </div>
              <div>
                <h4 className="font-bold text-[22px] leading-tight">Contact</h4>
                <p className="text-md text-gray-200 hover:text-yellow">
                  <Link href="tel:+917046777222">+91 70467 77222 </Link>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center group gap-4">
              <div className="bg-yellow group-hover:bg-secondary p-4 rounded-full text-primary text-xl shrink-0 transition-all duration-500 ease-in-out">
                <FaEnvelope className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-[22px] leading-tight">E-Mail</h4>
                <p className="text-md text-gray-200 hover:text-yellow">
                  <Link href="mailto:info@kartavyaseeds.com">
                    {" "}
                    info@kartavyaseeds.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr] gap-16 py-8 items-start">

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>

                <h3 className="mb-3 text-[24px] font-bold text-white">
                  Quick Links
                </h3>

                <div className="flex flex-col gap-2">

                  {[
                    { title: "About Us", link: "/about" },
                    { title: "R&D", link: "/research&development" },
                    { title: "News & Articles", link: "/news-articles" },
                    { title: "Events", link: "/events" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="group flex items-center gap-3 text-lg text-white/80 transition-all duration-300 hover:text-yellow"
                    >
                      <span className="h-2 w-2 rounded-full bg-yellow transition-all duration-300 group-hover:scale-150"></span>

                      {item.title}
                    </Link>
                  ))}

                </div>

              </div>
              {/* Our Products */}
              <div>

                <h3 className="mb-3 text-[24px] font-bold text-white">
                  Our Products
                </h3>

                <div className="flex flex-col gap-2">

                  <Link
                    href="/product?slug=vegetables"
                    className="group flex items-center gap-3 text-lg text-white/80 transition-all duration-300 hover:text-yellow"
                  >
                    <span className="h-2 w-2 rounded-full bg-yellow transition-all duration-300 group-hover:scale-150"></span>

                    Vegetable Crop
                  </Link>

                  <Link
                    href="/product?slug=field"
                    className="group flex items-center gap-3 text-lg text-white/80 transition-all duration-300 hover:text-yellow"
                  >
                    <span className="h-2 w-2 rounded-full bg-yellow transition-all duration-300 group-hover:scale-150"></span>

                    Field Crop
                  </Link>

                  <Link
                    href="/product?slug=fruit"
                    className="group flex items-center gap-3 text-lg text-white/80 transition-all duration-300 hover:text-yellow"
                  >
                    <span className="h-2 w-2 rounded-full bg-yellow transition-all duration-300 group-hover:scale-150"></span>

                    Fruit Crop
                  </Link>

                </div>

              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-3 text-[24px] font-bold text-white">
                Social Media
              </h3>

              <div className="flex flex-wrap gap-4">

                {socialLinks.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-secondary"
                    >
                      <Icon size={22} />
                    </Link>
                  );
                })}

              </div>

            </div>



          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT */}
        <div className="bg-primary-dark border-t border-white/10 py-6">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row  items-center justify-center gap-4 text-sm text-gray-300">
            <p> © {new Date().getFullYear()} Kartavya Seeds. All Rights Reserved.</p>
            {/* <div className="flex gap-6">
              <Link href="#" className="hover:text-white">
                Terms & Condition
              </Link>
              <span>/</span>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
