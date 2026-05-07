import Breadcrumb from "@/app/Components/Breadcrumb";
import header from '@/app/assets/page-header-bg.jpg';
import Image from 'next/image';
import aboutImg from '@/app/assets/fact-bg.jpg';
import AnimatedHeading from "../Components/AnimatedHeading";
import { IoTrophy } from "react-icons/io5";
import { MdVisibility } from "react-icons/md";

export default function AboutPage() {
    const vegetableCrops = ["Chilli", "Okra", "Watermelon", "Musk Melon", "Tomato", "Cabbage", "Cucumber", "Gourds"];
    const fieldCrops = ["Cotton", "Maize", "Bajra", "Mustard", "Sweet Corn", "Cumin", "Sesamum", "High Nutritive Fodder"];

    return (
        <>
            <Breadcrumb
                title="About Kartavya Seeds"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" },
                ]}
            />
            {/* about */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-12">
                    {/* Top Section: Corporate Identity */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="relative">
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-white border-10">
                                <Image
                                    src={aboutImg}
                                    alt="Advanced Seed Research"
                                    className="w-full h-137.5 object-cover"
                                />
                            </div>
                            {/* Curved decorative element behind image to match homepage style */}
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#8BA92B]/10 rounded-full blur-3xl z-0"></div>

                            {/* DSIR Achievement Badge */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs z-20">
                                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-2xl"><IoTrophy /> </div>
                                <div>
                                    <h4 className="font-bold text-primary text-sm">DSIR Recognized</h4>
                                    <p className="text-[11px] text-gray-500">Ministry of Science & Technology, Govt. of India</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-secondary font-bold text-lg flex items-center gap-2">
                                    <span className="w-8 h-0.5 bg-secondary"></span>
                                    WELCOME TO KARTAVYA SEEDS
                                </h4>
                                <AnimatedHeading className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                                    Trusted Partner in <span className="text-secondary">Genetically Enhanced</span> Agriculture
                                </AnimatedHeading>
                            </div>

                            <div className="text-gray-600 space-y-6 leading-relaxed text-lg">
                                <p>
                                    <span className="font-bold text-primary">Kartavya Seeds</span> is committed to supply genetically enhanced high quality seeds to farmers. We are an <span className="text-secondary font-semibold underline underline-offset-4">ISO 9001:2015 certified Company</span>.
                                </p>
                                <p>
                                    Our Focus On Research and Development has won us recognition from Government Of India’s Department of Scientific and Industrial Research (DSIR). Our seeds are ingrained with qualities to rich, flavorful, nutritious crop.
                                </p>
                                <p>
                                    While the farmers harvest prosperous crops, they are able to achieve it with <span className="italic text-primary">High resource efficiency</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mid Section: Portfolio Grid */}
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Vegetables Category Card */}
                        <div className="group relative">
                            {/* Decorative background shape using Primary color */}
                            <div className="absolute inset-0 bg-primary rounded-[40px] translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                            <div className="relative bg-white border-2 border-primary p-8 md:p-10 rounded-[40px] h-full flex flex-col">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-secondary/20 transform group-hover:rotate-6 transition-transform">
                                        <span className="text-3xl text-white">🥦</span>
                                    </div>
                                    <div>
                                        <h5 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight">
                                            Vegetable <span className="text-secondary">Crops</span>
                                        </h5>
                                        <div className="h-1 w-12 bg-secondary mt-1 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {vegetableCrops.map((crop) => (
                                        <div
                                            key={crop}
                                            className="py-2.5 px-5 bg-white text-primary text-xs font-bold rounded-xl border-2 border-primary/10 hover:border-secondary hover:bg-secondary/5 transition-all duration-300 cursor-default shadow-sm"
                                        >
                                            {crop}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Field Crops Category Card */}
                        <div className="group relative">
                            {/* Decorative background shape using Secondary color */}
                            <div className="absolute inset-0 bg-secondary rounded-[40px] translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                            <div className="relative bg-primary p-8 md:p-10 rounded-[40px] h-full flex flex-col">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 transform group-hover:-rotate-6 transition-transform">
                                        <span className="text-3xl text-primary">🌾</span>
                                    </div>
                                    <div>
                                        <h5 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                                            Field <span className="text-secondary">Crops</span>
                                        </h5>
                                        <div className="h-1 w-12 bg-secondary mt-1 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {fieldCrops.map((crop) => (
                                        <div
                                            key={crop}
                                            className="py-2.5 px-5 bg-white/5 text-white text-xs font-bold rounded-xl border-2 border-white/10 hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300 cursor-default shadow-sm"
                                        >
                                            {crop}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* vision & mission */}
            <section className="relative overflow-hidden bg-white py-20 ">
                {/* Background Text */}
                <div className="pointer-events-none absolute left-0 top-20 text-[140px] font-black uppercase leading-none text-secondary/5 md:text-[220px]">
                    Vision
                </div>

                <div className="pointer-events-none absolute bottom-0 right-0 text-[140px] font-black uppercase leading-none text-primary/5 md:text-[220px]">
                    Mission
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* TOP AREA */}
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                        {/* LEFT SIDE */}
                        <div className="relative">
                            {/* Small Label */}
                            <div className="mb-4 flex items-center gap-4">
                                <div className="h-0.5 w-16 bg-secondary" />

                                <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
                                    Our Vision
                                </span>
                            </div>

                            {/* Main Heading */}
                            <AnimatedHeading className="text-5xl font-black uppercase  text-dark-grey md:text-7xl">
                                Seeds Of
                                <span className="block text-secondary">Innovation</span>
                            </AnimatedHeading>

                            {/* Decorative Circle */}
                            <div className="mt-7 flex items-center gap-6">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-secondary/30">
                                    <MdVisibility className="h-10 w-10 text-primary p-2 rounded-full bg-secondary" />
                                </div>

                                <p className="max-w-sm text-lg  text-light-grey">
                                    Building sustainable agricultural growth through innovation,
                                    research and long-term farmer partnerships.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT SIDE CONTENT */}
                        <div className="relative">
                            {/* Vertical Accent */}
                            <div className="absolute left-0 top-0 h-full w-0.5 bg-linear-to-b from-secondary to-transparent" />

                            <div className="space-y-4 pl-10">
                                <p className="text-lg  text-[#555]">
                                    At Kartavya Seeds, our vision is to establish ourselves as a
                                    trusted and progressive leader in the agricultural seed industry by
                                    delivering superior-quality, high-performing, and sustainable seed
                                    solutions.
                                </p>

                                <p className="text-lg  text-[#555]">
                                    We are committed to driving agricultural advancement through
                                    continuous research and development, innovation, scientific
                                    excellence to enhance crop performance and farm productivity.
                                </p>

                                <p className="text-lg  text-[#555]">
                                    By fostering strong, transparent, long-term partnerships with
                                    farmers, channel partners and stakeholders, we aim to create
                                    lasting value, support responsible farming practices and contribute
                                    to the sustainable growth of the agricultural ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SPACING */}
                    <div className="my-16 h-px w-full bg-linear-to-r from-transparent via-[#ddd] to-transparent" />

                    {/* MISSION SECTION */}
                    <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-start">
                        {/* LEFT SIDE LIST */}
                        <div className="space-y-4">
                            {[
                                "To invest continuously in research and innovation, focusing on solutions for emerging and evolving crop viruses.",
                                "To develop and supply reliable, high-performing seeds that enhance crop productivity and farmer income.",
                                "To maintain uncompromising quality standards across seed development, testing, and distribution.",
                                "To promote sustainable, eco-friendly, and responsible agricultural practices.",
                                "To contribute positively to rural development and the strengthening of the agricultural ecosystem.",
                                "To build long-term relationships with farmers through trust, transparency, and service excellence.",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex gap-6 transition duration-300"
                                >
                                    {/* Number */}
                                    <div className="text-5xl font-black leading-none text-secondary/30 transition duration-300 group-hover:text-secondary">
                                        0{index + 1}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <div className="mb-3 h-0.5 w-14 bg-secondary transition-all duration-300 group-hover:w-24" />

                                        <p className="text-lg  text-[#555]">{item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative lg:pl-20">
                            {/* Label */}
                            <div className="mb-4 flex items-center gap-4">
                                <div className="h-0.5 w-16 bg-secondary" />

                                <span className="text-sm font-bold uppercase tracking-[5px] text-primary">
                                    Our Mission
                                </span>
                            </div>

                            {/* Heading */}
                            <AnimatedHeading className="text-5xl font-black uppercase  text-dark-grey md:text-7xl">
                                Growing
                                <span className="block text-primary">Agriculture</span>
                            </AnimatedHeading>

                            {/* Bottom Content */}
                            <div className="mt-7 border-l-2 border-secondary pl-8">
                                <p className="text-xl  text-light-grey">
                                    Our mission is driven by quality, sustainability, scientific
                                    advancement and long-term farmer success across every stage of seed
                                    development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* core value */}
            <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto mb-5 max-w-5xl text-center">
                        <span className="mb-2 inline-block text-sm font-bold uppercase tracking-[6px] text-primary">
                            Core Values
                        </span>

                        <AnimatedHeading className="text-4xl font-black uppercase  text-primary sm:text-5xl md:text-6xl ">
                            The Values That
                            <span className="block text-secondary">
                                Drive Our Growth
                            </span>
                        </AnimatedHeading>
                    </div>

                    {/* Top Row */}
                    <div className="grid gap-8 lg:grid-cols-3">
                        {[
                            {
                                title: "Innovation & Research",
                                description:
                                    "The company emphasizes constant    innovation, utilizing advanced R&D to create premium-quality seeds for diverse crops.",

                                color: "#00AFEF",
                            },
                            {
                                title: "Quality Excellence",
                                description:
                                    "Consistent, reliable, and superior seed quality.",

                                color: "#B4D342",
                                active: true,
                            },
                            {
                                title: "Sustainability",
                                description:
                                    "Developing and supplying seeds that are suitable for specific regional or local environmental and cultural farming conditions..",

                                color: "#ef4444",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-4xl border p-7 transition-all duration-500 hover:-translate-y-2 ${item.active
                                    ? "border-secondary bg-secondary text-white shadow-[0_20px_60px_rgba(180,211,66,0.25)]"
                                    : "border-[#e5e5e5] bg-white hover:border-secondary/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                                    }`}
                            >

                                {/* Title */}
                                <h3
                                    className={`mb-3 text-3xl font-black  ${item.active ? "text-white" : "text-primary"
                                        }`}
                                >
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`text-lg  ${item.active ? "text-white/90" : "text-[#666]"
                                        }`}
                                >
                                    {item.description}
                                </p>


                            </div>
                        ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="mx-auto mt-8 grid max-w-4xl gap-8 lg:grid-cols-2">
                        {[
                            {
                                title: "Integrity & Transparency",
                                description:
                                    "Building trust through openness, fairness and responsibility.",

                                color: "#8b1fa9",
                            },
                            {
                                title: "Partnership & Collaboration",
                                description:
                                    "Fostering global business success together.",

                                color: "#4f46e5",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-4xl border border-[#e5e5e5] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-secondary/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
                            >
                                {/* Title */}
                                <h3 className="mb-3 text-3xl font-black  text-primary">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-lg  text-[#666]">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}