"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import Breadcrumb from "@/app/Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaYoutube
} from "react-icons/fa";
import AnimatedHeading from "../Components/AnimatedHeading";
import { apiUrl } from "@/config";

const socialLinks = [
    {
        icon: FaFacebookF,
        href: "https://facebook.com",
    },
    {
        icon: FaInstagram,
        href: "https://instagram.com",
    },
    {
        icon: FaYoutube,
        href: "https://youtube.com",
    },
    {
        icon: FaLinkedinIn,
        href: "https://linkedin.com",
    },
];

interface ContactFormData {
    full_name: string;
    email: string;
    phone_number: string;
    subject: string;
    message: string;
}

const initialFormData: ContactFormData = {
    full_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
};

export default function ContactPage() {
    const [formData, setFormData] =
        useState<ContactFormData>(initialFormData);

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (successMessage || errorMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
                setErrorMessage("");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [successMessage, errorMessage]);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.post(
                `${apiUrl}/contact-inquiry-store`,
                formData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.success) {
                setSuccessMessage(response.data.message);
                setFormData(initialFormData);
            } else {
                setErrorMessage("Something went wrong.");
            }
        } catch (error:any) {
            setErrorMessage(
        error?.response?.data?.message ||
          "Failed to submit form."
      );
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Breadcrumb
                title="Contact Us"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" },
                ]}
            />

            {/* CONTACT SECTION */}
            <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
                {/* Background Blur */}
                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Top Heading */}
                    <div className="mx-auto mb-10 max-w-4xl text-center">
                        <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[6px] text-primary">
                            Get In Touch
                        </span>

                        <AnimatedHeading className="text-4xl font-black uppercase  text-primary sm:text-5xl md:text-6xl">
                            Let’s Build The Future
                            <span className="block text-secondary">
                                Of Agriculture Together
                            </span>
                        </AnimatedHeading>
                    </div>

                    {/* Main Layout */}
                    <div className="grid gap-10 xl:grid-cols-[1fr_1.2fr]">
                        {/* LEFT INFO */}
                        <div className="relative overflow-hidden rounded-[40px] bg-primary p-10 lg:p-14">
                            {/* Decorative Circle */}
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-40px border-secondary/10" />

                            {/* Small Heading */}
                            <div className="mb-7">
                                <span className="text-sm font-bold uppercase tracking-[5px] text-secondary">
                                    Contact Information
                                </span>

                                <h3 className="mt-2 text-4xl font-black  text-white">
                                    We’re Always Ready
                                    <span className="block text-secondary">
                                        To Help You
                                    </span>
                                </h3>
                            </div>

                            {/* Contact Items */}
                            <div className="space-y-8">
                                {/* Address */}
                                <div className="group flex items-start gap-5">
                                    <div className="flex h-16 w-16 min-w-16 items-center justify-center rounded-2xl bg-white/10 text-secondary transition duration-300 group-hover:bg-secondary group-hover:text-dark-grey">
                                        <FaMapMarkerAlt className="text-3xl" />
                                    </div>

                                    <div>
                                        <h4 className="mb-2 text-xl font-bold text-white">
                                            Office Address
                                        </h4>

                                        <p className=" text-white/70">
                                            C/904, Signature - II, Opp. Relief Hotel,
                                            <br />
                                            Sarkhej - Sanand Road, Ahmedabad -
                                            <br />
                                            382210. Gujarat, INDIA.
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group flex items-start gap-5">
                                    <div className="flex h-16 w-16 min-w-16 items-center justify-center rounded-2xl bg-white/10 text-secondary transition duration-300 group-hover:bg-secondary group-hover:text-dark-grey">
                                        <FaPhoneAlt className="text-2xl" />
                                    </div>

                                    <div>
                                        <h4 className="mb-2 text-xl font-bold text-white">
                                            Phone Number
                                        </h4>

                                        <a href="tel:+917046777222" className="text-white/70">
                                            +91 70467 77222
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="group flex items-start gap-5">
                                    <div className="flex h-16 w-16 min-w-16 items-center justify-center rounded-2xl bg-white/10 text-secondary transition duration-300 group-hover:bg-secondary group-hover:text-dark-grey">
                                        <FaEnvelope className="text-3xl" />
                                    </div>

                                    <div>
                                        <h4 className="mb-2 text-xl font-bold text-white">
                                            Email Address
                                        </h4>

                                        <a href="mailto:info@kartavyaseeds.com" className=" text-white/70">
                                            info@kartavyaseeds.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="my-10 h-px w-full bg-white/10" />

                            {/* Social */}
                            <div>
                                <h4 className="mb-3 text-xl font-bold text-white">
                                    Follow Us
                                </h4>

                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <a
                                                key={index}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-14 w-14 items-center justify-center  rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:border-secondary hover:bg-secondary hover:text-dark-grey"
                                            >
                                                <Icon className="text-xl" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT FORM */}
                        <div className="relative overflow-hidden rounded-[40px] border border-[#e5e5e5] bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)] lg:p-14">
                            {/* Decorative Shape */}
                            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

                            {/* Heading */}
                            <div className="relative mb-6">
                                <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
                                    Send Message
                                </span>

                                <h3 className="mt-2 text-4xl font-black leading-tight text-primary">
                                    Let’s Start A
                                    <span className="block text-secondary">
                                        Conversation
                                    </span>
                                </h3>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="relative space-y-3">
                                {/* Row */}
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            name="full_name"
                                            value={formData.full_name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="h-14 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="h-14 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                                        />
                                    </div>
                                </div>

                                {/* Row */}
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            maxLength={10}
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={handleChange}
                                            className="h-14 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Enter subject"
                                            className="h-14 w-full rounded-2xl border border-[#ddd] bg-[#fafafa] px-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="mb-2 block text-sm font-bold uppercase tracking-[3px] text-primary">
                                        Message
                                    </label>

                                    <textarea
                                        rows={6}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message..."
                                        className="w-full rounded-2xl border border-[#ddd] bg-[#fafafa] p-4 text-dark-grey outline-none transition duration-300 focus:border-secondary"
                                    />
                                </div>

                                {/* Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative cursor-pointer overflow-hidden rounded-full bg-primary px-10 py-5 text-lg font-bold uppercase tracking-[2px] text-white transition duration-500 hover:bg-secondary hover:text-dark-grey"
                                >
                                    <span className="relative z-10">
                                        {loading ? "Submitting..." : "Send Message"}
                                    </span>
                                </button>

                                {/* Success Message */}
                                {successMessage && (
                                    <p className="mt-4 text-green-600">
                                        {successMessage}
                                    </p>
                                )}

                                {/* Error Message */}
                                {errorMessage && (
                                    <p className="mt-4 text-red-600 font-medium">
                                        {errorMessage}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP SECTION */}
            <section className="relative h-125 overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14691.91096285721!2d72.493119!3d22.987846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aeba8538b39%3A0xff36690af0489f23!2sSIGNATURE-2%2C%20105%2C%20Sarkhej%20-%20Sanand%20Rd%2C%20Sarkhej%2C%20Ahmedabad%2C%20Sarkhej-Okaf%2C%20Gujarat%20382210!5e0!3m2!1sen!2sin!4v1778219534210!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="border-0 grayscale"
                />

                {/* Overlay Card */}
                {/* <div className="absolute left-1/2 top-10 z-10 w-[90%] max-w-md -translate-x-1/2 rounded-[30px] bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
                    <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
                        Visit Office
                    </span>

                    <h3 className="mt-4 text-3xl font-black text-dark-grey">
                        Kartavya Seeds
                    </h3>

                    <p className="mt-5 leading-[2] text-[#666]">
                        Visit our office to connect with our team and explore innovative
                        agricultural seed solutions.
                    </p>
                </div> */}
            </section>
        </>
    );
}