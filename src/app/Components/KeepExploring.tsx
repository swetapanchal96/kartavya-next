import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function KeepExploring() {
    return (
        <>
            <div className="w-full bg-[#f5f5f5] py-16">
                <div className="container mx-auto px-6">

                    <div className="bg-white rounded-[30px] shadow-lg px-6 py-8 md:px-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                            {/* Keep Exploring */}
                            <div className="shrink-0">
                                <h2 className="text-3xl md:text-5xl font-bold text-primary">
                                    Keep Exploring
                                </h2>
                            </div>

                            {/* Navigation Pills */}
                            <div className="flex flex-wrap items-center justify-center gap-4">

                                {[
                                    { title: "Products", link: "#" },
                                    { title: "R&D", link: "#" },
                                    { title: "Services", link: "#" },
                                    { title: "Partnership", link: "#" },
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className="group inline-flex items-center gap-4 rounded-full bg-primary px-8 py-4 text-white font-semibold text-lg shadow-sm transition-all duration-300 hover:bg-secondary hover:scale-105"
                                    >
                                        <span>{item.title}</span>

                                        <span className="text-xl transition-all duration-300 group-hover:translate-x-1">
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}