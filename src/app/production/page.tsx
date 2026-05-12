import AnimatedHeading from "../Components/AnimatedHeading";
import Breadcrumb from "../Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

export default function IncrementBasicSeedPage() {
    return (
        <>
            <Breadcrumb
                title="Production"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Production" },
                ]}
            />

            {/* Why Choose India Section */}
            <section className="relative overflow-hidden bg-[#f8faf5] py-20 ">
                {/* Background Effects */}
                <div className="absolute -left-25 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute -bottom-30 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="max-w-4xl">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Global Production Advantage
                        </span>

                        <h2 className="mt-2 text-4xl font-bold  text-dark-grey md:text-5xl lg:text-6xl">
                            Why Choose India For Seed Production?
                        </h2>

                        <div className="mt-6 h-0.5 w-24 bg-secondary"></div>
                    </div>

                    {/* Main Layout */}
                    <div className="mt-10 grid gap-16 lg:grid-cols-12">
                        {/* Left Large Statement */}
                        <div className="relative lg:col-span-5">
                            <div className="sticky top-32">
                                <span className="text-[140px] font-black leading-none text-primary/5">
                                    INDIA
                                </span>

                                <div className="-mt-8">
                                    <h3 className="text-3xl font-bold text-dark-grey md:text-4xl">
                                        A Globally Trusted Destination For Modern Seed
                                        Production
                                    </h3>

                                    <p className="mt-4 text-lg  text-[#666]">
                                        India offers the perfect balance of climate diversity,
                                        skilled manpower, multi-season production capability,
                                        and cost-effective agricultural infrastructure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Scrollable Content */}
                        <div className="lg:col-span-7">
                            <div className="h-112.5 overflow-y-auto  scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                <div className="space-y-8">
                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-primary transition duration-300 group-hover:translate-x-2">
                                            01
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal text-dark-grey">
                                                Second Largest Producer In World
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-secondary transition duration-300 group-hover:translate-x-2">
                                            02
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Easily Availability Of Skill Human Resources
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-primary transition duration-300 group-hover:translate-x-2">
                                            03
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Seed Production In Multiple Seasons
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-secondary transition duration-300 group-hover:translate-x-2">
                                            04
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Diverse Region & Agro Climatic Zones For
                                                Production
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8 border-b border-[#e8e8e8] pb-5">
                                        <span className="text-6xl font-bold text-primary transition duration-300 group-hover:translate-x-2">
                                            05
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Cost-Effective Seed Production
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Row */}
                                    <div className="group flex gap-8">
                                        <span className="text-6xl font-bold text-secondary transition duration-300 group-hover:translate-x-2">
                                            06
                                        </span>

                                        <div>
                                            <h3 className="text-3xl font-normal  text-dark-grey">
                                                Quality Assurance Systems
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Strength Section */}
            <section className="relative overflow-hidden bg-white py-20">
                {/* Background Blur */}
                <div className="absolute -left-25 top-0 h-75 w-75 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute -bottom-25 right-0 h-75 w-75 rounded-full bg-secondary/10 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-12">
                    {/* Heading */}
                    <div className="mx-auto max-w-5xl text-center">
                        <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                            Production Excellence
                        </span>

                        <h2 className="mt-2 text-4xl font-bold leading-tight text-dark-grey md:text-6xl">
                            Our Strength in Seeds Production
                        </h2>

                        <div className="mx-auto mt-5 h-0.5 w-20 bg-secondary"></div>
                    </div>

                    {/* Main Layout */}
                    <div className="mx-auto mt-10 grid max-w-7xl items-center gap-16 lg:grid-cols-12">
                        {/* Left Content */}
                        <div className="space-y-10 lg:col-span-4">
                            {/* Item */}
                            <div className="group border-l-4 border-primary pl-6 transition duration-300 hover:translate-x-2">
                                <span className="text-3xl font-bold uppercase tracking-[4px] text-primary">
                                    A
                                </span>

                                <h3 className=" text-xl  text-dark-grey">
                                    Strategic production zones across agro-climatic
                                    regions.
                                </h3>
                            </div>

                            {/* Item */}
                            <div className="group border-l-4 border-secondary pl-6 transition duration-300 hover:translate-x-2">
                                <span className="text-3xl font-bold uppercase tracking-[4px] text-secondary">
                                    C
                                </span>

                                <h3 className=" text-xl   text-dark-grey">
                                    Quality & Reliable production with traceability.
                                </h3>
                            </div>
                        </div>

                        {/* Center Visual */}
                        <div className="relative flex justify-center lg:col-span-4">
                            {/* Outer Circle */}
                            <div className="relative flex h-85 w-85 items-center justify-center rounded-full border border-primary/10 bg-[#f8faf5]">
                                {/* Rotating Ring */}
                                <div className="absolute inset-5 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite]"></div>

                                {/* Inner Circle */}
                                <div className="relative z-10 flex h-45 w-45 items-center justify-center rounded-full border border-primary/10 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)]">
                                    <div className="text-center">
                                        <h3 className="text-5xl font-black text-primary">
                                            KS
                                        </h3>

                                        <p className="mt-3 text-sm font-bold uppercase tracking-[4px] text-[#666]">
                                            Production
                                        </p>
                                    </div>
                                </div>

                                {/* Floating Labels */}
                                {/* <div className="absolute left-0 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
                                    A
                                </div>

                                <div className="absolute right-0 top-1/2 flex h-16 w-16 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-dark-grey shadow-lg">
                                    B
                                </div>

                                <div className="absolute bottom-0 left-1/2 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
                                    C
                                </div>

                                <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-dark-grey shadow-lg">
                                    D
                                </div> */}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-10 lg:col-span-4">
                            {/* Item */}
                            <div className="group border-l-4 border-primary pl-6 transition duration-300 hover:translate-x-2">
                                <span className="text-3xl font-bold uppercase tracking-[4px] text-primary">
                                    B
                                </span>

                                <h3 className=" text-xl  text-dark-grey">
                                    Experienced contract growers and Technical team.
                                </h3>
                            </div>

                            {/* Item */}
                            <div className="group border-l-4 border-secondary pl-6 transition duration-300 hover:translate-x-2">
                                <span className="text-3xl font-bold uppercase tracking-[4px] text-secondary">
                                    D
                                </span>

                                <h3 className=" text-xl text-dark-grey">
                                    Demand-Driven Production for Timely Supply per
                                    Required Quantities
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
