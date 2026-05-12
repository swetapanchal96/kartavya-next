import AnimatedHeading from "../Components/AnimatedHeading";
import Breadcrumb from "../Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

export default function ResearchDevelopmentPage() {
    return (
        <>
            <Breadcrumb
                title="Research & Development"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Research & Development" },
                ]}
            />

            {/* Research Intro Section */}
            <section className="relative overflow-hidden bg-linear-to-b from-white to-[#f8faf7] py-20 ">
                {/* Background Shapes */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    <div className="mx-auto max-w-6xl">
                        {/* Top Content */}
                        <div className="text-center">
                            {/* Badge */}
                            <span className="mb-4 inline-flex items-center rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[4px] text-primary shadow-sm">
                                Research • Innovation • Growth
                            </span>

                            {/* Heading */}
                            <AnimatedHeading className="mx-auto max-w-5xl text-4xl font-black  text-dark-grey md:text-5xl lg:text-6xl">
                                Advancing Agriculture Through{" "}
                                <span className="relative inline-block text-primary">
                                    Research & Development

                                </span>
                            </AnimatedHeading>

                            {/* Description */}
                            <div className="mx-auto mt-4 max-w-4xl">
                                <p className="text-lg  text-[#666] md:text-xl">
                                    Our focus on Research and Development has earned
                                    recognition from the Government Of India’s Department Of
                                    Scientific and Industrial Research (DSIR), Ministry Of
                                    Science and Technology.
                                </p>

                                <p className="mt-2 text-lg  text-[#666] md:text-xl">
                                    We operate a{" "}
                                    <span className="font-semibold text-dark-grey">
                                        24-acre Main Research and Development Station
                                    </span>{" "}
                                    along with{" "}
                                    <span className="font-semibold text-dark-grey">
                                        three regional research facilities
                                    </span>{" "}
                                    across India — all dedicated to continuous innovation,
                                    crop improvement, and genetic advancement.
                                </p>

                                <p className="mt-2 text-lg text-[#666] md:text-xl">
                                    Our advanced R&D programs are focused on developing
                                    high-performance hybrid vegetable seeds with superior
                                    yield potential, enhanced disease resistance, and strong
                                    adaptability across diverse agro-climatic conditions.
                                </p>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="mt-16 grid gap-8 md:grid-cols-3">
                            {/* Card 1 */}
                            <div className="group relative overflow-hidden rounded-[35px] border border-[#ececec] bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150"></div>

                                <h3 className="relative text-6xl font-black text-primary">
                                    24+
                                </h3>

                                <p className="relative mt-5 text-sm font-bold uppercase tracking-[4px] text-dark-grey">
                                    Acre Main R&D Station
                                </p>

                                <div className="mt-6 h-0.5 w-16 bg-secondary transition-all duration-500 group-hover:w-28"></div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative overflow-hidden rounded-[35px] border border-[#ececec] bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-secondary/10 transition-all duration-500 group-hover:scale-150"></div>

                                <h3 className="relative text-6xl font-black text-primary">
                                    3
                                </h3>

                                <p className="relative mt-5 text-sm font-bold uppercase tracking-[4px] text-dark-grey">
                                    Regional Research Facilities
                                </p>

                                <div className="mt-6 h-0.5 w-16 bg-secondary transition-all duration-500 group-hover:w-28"></div>
                            </div>

                            {/* Card 3 */}
                            <div className="group relative overflow-hidden rounded-[35px] border border-[#ececec] bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-primary/5 transition-all duration-500 group-hover:scale-150"></div>

                                <h3 className="relative text-5xl font-black text-primary">
                                    DSIR
                                </h3>

                                <p className="relative mt-5 text-sm font-bold uppercase tracking-[4px] text-dark-grey">
                                    Government Recognized Innovation
                                </p>

                                <div className="mt-6 h-0.5 w-16 bg-secondary transition-all duration-500 group-hover:w-28"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We Need New Variety Section */}
            <section className="bg-[#f8faf5] py-12">
                <div className="container mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="text-center">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Seed Innovation
                        </span>

                        <AnimatedHeading className="mt-2 text-4xl font-bold text-dark-grey md:text-5xl lg:text-6xl">
                            Why we need new variety???
                        </AnimatedHeading>

                        <div className="mx-auto mt-2 h-1 w-24 bg-secondary"></div>
                    </div>

                    {/* Features */}
                    <div className="mt-20 grid grid-cols-2 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-2 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">🌾</span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-40 text-2xl font-medium leading-snug text-primary">
                                Higher Yield
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-2 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">🌱</span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-40 text-2xl font-medium leading-snug text-primary">
                                Shorter Cropping cycle
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-2 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">🌧️</span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-55 text-2xl font-medium leading-snug text-primary">
                                Environmental and Insect-pest resistance
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-2 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">🌿</span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-40 text-2xl font-medium leading-snug text-primary">
                                Improved Quality
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-2 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">🚜</span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-55 text-2xl font-medium leading-snug text-primary">
                                Farmer Livelihood & Sustainability
                            </h3>
                        </div>

                        {/* Item */}
                        <div className="group text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-2 border-primary/40 bg-white transition duration-500 group-hover:-translate-y-2 group-hover:border-primary">
                                <span className="text-6xl">🥗</span>
                            </div>

                            <h3 className="mx-auto mt-8 max-w-45 text-2xl font-medium leading-snug text-primary">
                                Food Sustainability
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* R&D Focus Section */}
            <section className="relative overflow-hidden bg-[#f7f9f4] py-20">
                {/* Background Layers */}
                <div className="absolute left-30 top-25 h-87.5 w-87.5 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute bottom-30 right-25 h-100 w-100 rounded-full bg-secondary/30 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Intro */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="inline-block text-sm font-bold uppercase tracking-[4px] text-primary">
                            Research Excellence
                        </span>

                        <AnimatedHeading className="mt-2 text-4xl font-black text-dark-grey md:text-5xl lg:text-6xl">
                            Innovation from the Ground Up
                        </AnimatedHeading>

                        <p className="mx-auto mt-4 max-w-4xl text-lg  text-[#666]">
                            Our R&D Station is the engine of our growth. It's where we
                            combine science, technology, and agricultural expertise to
                            create the next generation of superior seed varieties.
                        </p>
                    </div>

                    {/* Main Creative Layout */}
                    <div className="relative mt-10">
                        {/* Center Circle */}
                        <div className="absolute z-100 left-1/2 top-1/2 hidden h-42 w-42 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/10 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] lg:flex">
                            <div className="text-center">
                                <h3 className="text-4xl font-black text-primary">
                                    R&D
                                </h3>

                                <p className="mt-3 text-sm  font-bold uppercase tracking-[3px] text-[#666]">
                                    Focus Areas
                                </p>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid gap-10 lg:grid-cols-2">
                            {/* Item 01 */}
                            <div className="group relative overflow-hidden rounded-[40px] bg-white p-8 shadow-[0_15px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#ffeded] transition-all duration-500 group-hover:scale-150"></div>

                                <div className="relative flex items-start gap-8">
                                    <span className="text-7xl font-extrabold leading-none text-[#e53935]">
                                        01
                                    </span>

                                    <div>
                                        <span className="inline-block rounded-full bg-[#fff1f1] px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#e53935]">
                                            High-Yielding Varieties
                                        </span>

                                        <p className="mt-3 text-lg text-dark-grey">
                                            Developing Hybrid with the genetic potential for
                                            maximum productivity.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 02 */}
                            <div className="group relative overflow-hidden rounded-[40px] bg-primary p-8 text-white shadow-[0_15px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                                <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/10"></div>

                                <div className="relative flex items-start gap-8">
                                    <span className="text-7xl font-extrabold leading-none text-secondary">
                                        02
                                    </span>

                                    <div>
                                        <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-secondary backdrop-blur-md">
                                            Disease & Pest Resistance
                                        </span>

                                        <p className="mt-3 text-lg text-white/90">
                                            Breeding robust varieties that minimize the need for
                                            chemical intervention and reduce crop loss.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 03 */}
                            <div className="group relative overflow-hidden rounded-[40px] bg-[#1e1e1e] p-8 text-white shadow-[0_15px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                                <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-white/5"></div>

                                <div className="relative flex items-start gap-8">
                                    <span className="text-7xl font-extrabold leading-none text-[#f4b400]">
                                        03
                                    </span>

                                    <div>
                                        <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#f4b400]">
                                            Climate Resilience
                                        </span>

                                        <p className="mt-3 text-lg text-white/80">
                                            Creating Hybrid adapted to with stand environmental
                                            stresses.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 04 */}
                            <div className="group relative overflow-hidden rounded-[40px] bg-secondary p-8 text-dark-grey shadow-[0_15px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                                <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/20"></div>

                                <div className="relative flex items-start gap-8">
                                    <span className="text-7xl font-extrabold leading-none text-primary">
                                        04
                                    </span>

                                    <div>
                                        <span className="inline-block rounded-full bg-white/40 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-primary">
                                            Market-Driven Traits
                                        </span>

                                        <p className="mt-3 text-lg text-dark-grey">
                                            Tailoring varieties to meet grower, consumer
                                            preferences, and Traders needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* R&D Flow Section */}
            <section className="relative overflow-hidden bg-linear-to-b from-[#f8faf5] to-white py-20">
                {/* Background Effects */}
                <div className="absolute left-25 top-0 h-87.5 w-87.5 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-25 right-0 h-100 w-100 rounded-full bg-secondary/10 blur-3xl"></div>

                {/* Decorative Lines */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[90px_90px]"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Header */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="inline-block rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-bold uppercase tracking-[4px] text-primary shadow-sm">
                            Seed Development Process
                        </span>

                        <AnimatedHeading className="mt-3 text-4xl font-black text-dark-grey md:text-5xl lg:text-6xl">
                            Our R&D Flow : From Concept to Commercialization
                        </AnimatedHeading>

                        <div className="mx-auto mt-5 h-0.75 w-24 rounded-full bg-secondary"></div>
                    </div>

                    {/* Process */}
                    <div className="relative mt-14">
                        {/* Animated Center Path */}
                        <div className="absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 overflow-hidden rounded-full bg-[#dce7d4] lg:block">
                            <div className="h-full w-[40%] animate-pulse rounded-full bg-linear-to-r from-primary via-secondary to-primary"></div>
                        </div>

                        {/* Grid */}
                        <div className="relative grid gap-y-24 lg:grid-cols-4">
                            {/* Item */}
                            <div className="group relative text-center">
                                {/* Glow */}
                                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>

                                {/* Circle */}
                                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#dce7d4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:border-primary">
                                    <span className="text-4xl font-bold text-primary">
                                        01
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-3xl font-bold text-primary">
                                        Germplasm
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-65 text-lg  text-[#666]">
                                        Collection from local Wild, National,
                                        International source
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group relative text-center lg:mt-32">
                                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-secondary/20 blur-2xl transition duration-500 group-hover:bg-secondary"></div>

                                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#dce7d4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:border-secondary">
                                    <span className="text-4xl font-bold text-secondary">
                                        02
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-3xl font-bold text-secondary">
                                        Line
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-65 text-lg  text-[#666]">
                                        Utilize the GP and make lines for Hybrid
                                        development
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group relative text-center">
                                {/* Glow */}
                                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>

                                {/* Circle */}
                                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#dce7d4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:border-primary">
                                    <span className="text-4xl font-bold text-primary">
                                        03
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-3xl font-bold text-primary">
                                        Crosses
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-65 text-lg  text-[#666]">
                                        Make crosses for Parent/Hybrid Development
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group relative text-center lg:mt-32">
                                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-secondary/20 blur-2xl transition duration-500 group-hover:bg-secondary"></div>

                                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#dce7d4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:border-secondary">
                                    <span className="text-4xl font-bold text-secondary">
                                        04
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-3xl font-bold text-secondary">
                                        Preliminary
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-65 text-lg  text-[#666]">
                                        Station trials for initial assessment of hybrid
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group relative text-center">
                                {/* Glow */}
                                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>

                                {/* Circle */}
                                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#dce7d4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:border-primary">
                                    <span className="text-4xl font-bold text-primary">
                                        05
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-3xl font-bold text-primary">
                                        MLT/AT/CT
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-65 text-lg  text-[#666]">
                                        Multilocation/Adaption/
                                        Comparison trials for test stability& performance of hybrid
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group relative text-center lg:mt-32">
                                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-secondary/20 blur-2xl transition duration-500 group-hover:bg-secondary"></div>

                                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#dce7d4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:border-secondary">
                                    <span className="text-4xl font-bold text-secondary">
                                        06
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-3xl font-bold text-secondary">
                                        OFD
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-65 text-lg  text-[#666]">
                                        On field Demonstration for Feedback from farmers/stakeholders and Team
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group relative text-center">
                                {/* Glow */}
                                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>

                                {/* Circle */}
                                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#dce7d4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:border-primary">
                                    <span className="text-4xl font-bold text-primary">
                                        07
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-4">
                                    <h3 className="text-3xl font-bold text-primary">
                                        FS/Hybrid Seed
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-65 text-lg  text-[#666]">
                                        Foundation seed and
                                        Hybrid Seed production
                                    </p>
                                </div>
                            </div>

                            {/* Item */}
                            <div className="group relative text-center lg:mt-32">
                                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-secondary/20 blur-2xl transition duration-500 group-hover:bg-secondary"></div>

                                <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-[#dce7d4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition duration-500 group-hover:-translate-y-3 group-hover:border-secondary">
                                    <span className="text-4xl font-bold text-secondary">
                                        08
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-3xl font-bold text-secondary">
                                        Hybrid
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-65 text-lg  text-[#666]">
                                        Launch of Hybrid for season/Territory
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}