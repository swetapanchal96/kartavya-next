import AnimatedHeading from "../Components/AnimatedHeading";
import Breadcrumb from "../Components/Breadcrumb";
import header from "@/app/assets/BASICSEEDSBANNER.webp";
import img1 from '@/app/assets/1.jpg';
import img2 from '@/app/assets/2.jpeg';
import img3 from '@/app/assets/3.jpg';
import img4 from '@/app/assets/4.png';
import Image from "next/image";
import aboutImg from '@/app/assets/post-3.jpg';

export default function IncrementBasicSeedPage() {
    return (
        <>
            <Breadcrumb
                title="Increment of Basic Seed"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Increment of Basic Seed" },
                ]}
            />

            {/* Increment of Basic Seed Section */}
            <section className="relative overflow-hidden bg-white py-20">
                {/* Soft Background */}
                <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    {/* <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Professional Seed Services
                        </span>

                        <AnimatedHeading className="mt-4 text-4xl lg:text-6xl font-bold text-dark-grey md:text-5xl">
                            Increment of Basic Seed
                        </AnimatedHeading>

                        <div className="mx-auto mt-5 h-0.5 w-20 bg-secondary"></div>
                    </div> */}

                    {/* Main Content */}
                    <div className="mx-auto mt-8 max-w-6xl">
                        <div className="grid items-center gap-10 lg:grid-cols-2">
                            {/* Left Content */}
                            <div>
                                <div className=" max-w-4xl text-start">
                                    <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                                        Professional Seed Services
                                    </span>

                                    <AnimatedHeading className="mt-2 text-4xl lg:text-6xl font-bold text-dark-grey md:text-5xl">
                                        Increment of Basic Seed
                                    </AnimatedHeading>

                                    
                                </div>
                                <p className="text-lg mt-3 text-[#666]">
                                    Our Basic Seeds Increament service will provide you
                                    with all the professionalism, commitment and safety in
                                    your materials.
                                </p>

                                <p className="mt-4 text-lg  text-[#666]">
                                    We Know that the genetic safety of your products is
                                    important to you. You can leave your lines in our
                                    hands, Our team will work to meet that requirement.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-white border-10">
                                    <Image
                                        src={aboutImg}
                                        alt="Advanced Seed Research"
                                        className="w-full h-100 object-cover"
                                    />
                                </div>
                                {/* Curved decorative element behind image to match homepage style */}
                                <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#8BA92B]/10 rounded-full blur-3xl z-0"></div>

                                {/* DSIR Achievement Badge */}
                                {/* <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs z-20">
                                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-2xl"><IoTrophy /> </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-sm">DSIR Recognized</h4>
                                        <p className="text-[11px] text-gray-500">Ministry of Science & Technology, Govt. of India</p>
                                    </div>
                                </div> */}
                            </div>

                            {/* Right Highlights */}
                            {/* <div className="grid gap-6 sm:grid-cols-2">
                                
                                
                                <div className="rounded-[30px] border border-[#ececec] bg-[#f8faf5] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                                    <span className="text-5xl font-bold text-primary">
                                        01
                                    </span>

                                    <h3 className="mt-2 text-2xl font-bold text-primary">
                                        Commitment
                                    </h3>

                                    <p className="mt-2  text-[#666]">
                                        Dedicated handling with complete professionalism.
                                    </p>
                                </div>

                                
                                <div className="rounded-[30px] border border-[#ececec] bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                                    <span className="text-5xl font-bold text-secondary">
                                        02
                                    </span>

                                    <h3 className="mt-2 text-2xl font-bold text-secondary">
                                        Genetic Safety
                                    </h3>

                                    <p className="mt-2 text-[#666]">
                                        Ensuring secure and reliable preservation of your
                                        seed lines.
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Seed Infrastructure Gallery */}
            <section className="relative overflow-hidden bg-[#f8faf5] py-20">
                {/* Soft Background */}
                <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Infrastructure & Field Operations
                        </span>

                        <h2 className="mt-2 text-4xl font-bold text-dark-grey md:text-5xl lg:text-6xl">
                            Controlled & Secure Seed Environment
                        </h2>

                        <div className="mx-auto mt-5 h-0.5 w-20 bg-secondary"></div>
                    </div>

                    {/* Gallery Layout */}
                    <div className="mt-16 grid gap-6 lg:grid-cols-12">
                        {/* Large Image */}
                        <div className="group relative overflow-hidden rounded-[35px] lg:col-span-7">
                            <Image
                                src={img1.src}
                                width={50}
                                height={50}
                                alt="Basic Seed Infrastructure"
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent"></div>

                            {/* Content */}
                            {/* <div className="absolute bottom-0 left-0 p-8 md:p-10">
                                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-white backdrop-blur-md">
                                    Research Infrastructure
                                </span>

                                <h3 className="mt-5 text-3xl font-bold text-white">
                                    Protected Seed Development Facilities
                                </h3>
                            </div> */}
                        </div>

                        {/* Right Side Images */}
                        <div className="grid gap-6 lg:col-span-5">
                            {/* Image */}
                            <div className="group relative overflow-hidden rounded-[35px]">
                                <Image
                                    src={img2.src}
                                    width={50}
                                    height={50}
                                    alt="Seed Cultivation"
                                    className="h-70 w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

                                {/* <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold text-white">
                                        Precision Cultivation
                                    </h3>
                                </div> */}
                            </div>

                            {/* Bottom Grid */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                {/* Image */}
                                <div className="group relative overflow-hidden rounded-[30px]">
                                    <Image
                                        src={img3.src}
                                        width={50}
                                        height={50}
                                        alt="Isolation Protection"
                                        className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

                                    {/* <div className="absolute bottom-0 left-0 p-5">
                                        <h3 className="text-lg font-bold text-white">
                                            Isolation Protection
                                        </h3>
                                    </div> */}
                                </div>

                                {/* Image */}
                                <div className="group relative overflow-hidden rounded-[30px]">
                                    <Image
                                        src={img4.src}
                                        height={50}
                                        width={50}
                                        alt="Hybrid Quality"
                                        className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

                                    {/* <div className="absolute bottom-0 left-0 p-5">
                                        <h3 className="text-lg font-bold text-white">
                                            Hybrid Quality
                                        </h3>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}