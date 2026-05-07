"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import logo from "@/app/assets/Kartavya-Seeds-Logo-round.png"; // Adjust path to your logo
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";

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
              <Image src={logo} alt="Kartavya Seeds" className="object-contain" />
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

          {/* MIDDLE SECTION: LINKS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-12 py-12">
            {/* About Company - 40% */}
            <div className="lg:col-span-3">
              <h3 className="text-[22px] font-bold mb-7.5">About Company</h3>
              <p className="text-gray-200 max-w-98.5 leading-relaxed mb-6">
                Join us in making a lasting impact on our planet. Together, we can
                protect nature, reduce our carbon footprint.
              </p>
              <div className="flex gap-3">
                {[FaYoutube, FaXTwitter, FaFacebookF, FaLinkedinIn].map(
                  (Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="bg-yellow hover:bg-secondary p-4 rounded-full text-primary hover:scale-110 transition-transform"
                    >
                      <Icon size={22} />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Quick Link - 20% */}
            <div className="lg:col-span-2">
              <h3 className="text-[22px] font-bold mb-7.5">Quick Link</h3>
              <ul className="space-y-3 text-white">
                {["Home", "About Us", "Services", "Product", "Latest Blog"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-yellow text-md transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Our Products - 20% */}
            <div className="lg:col-span-2">
              <h3 className="text-[22px] font-bold mb-7.5">Our Products</h3>
              <ul className="space-y-3 text-gray-200">
                {["Field Crop", "Spices Crop", "Pulse Crop", "Forage Crop"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-yellow transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Location - 40% */}
            <div className="lg:col-span-3">
              <h3 className="text-[22px] font-bold mb-7.5">Location</h3>
              <div className="rounded-lg overflow-hidden border border-white/10 h-40 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.447844621532!2d72.4984534760334!3d23.007304516246473!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ac290877997%3A0xc33e143091c63865!2sSignature%202!5e0!3m2!1sen!2sin!4v1714560000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: COPYRIGHT */}
        <div className="bg-primary-dark border-t border-white/10 py-6">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">
                Terms & Condition
              </Link>
              <span>/</span>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
