import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function KeepExploring() {
    return (
        <>
            <div className="w-full bg-[#f5f5f5] py-16">
                <div className="container mx-auto px-6">

                    <div className="rounded-[30px] bg-white px-6 py-10 shadow-lg md:px-10">

                        {/* Heading */}
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary">
                                Keep Exploring
                            </h2>
                        </div>

                        {/* Navigation Pills */}
                        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">

                            {[
                                { title: "Vegetable Crop", link: "/product?slug=vegetables" },
                                { title: "Field Crop", link: "/product?slug=field" },
                                { title: "Fruit Crop", link: "/product?slug=fruit" },
                                { title: "R&D", link: "/research&development" },
                                { title: "Services", link: "/production" },
                                { title: "Partnership", link: "/partnership" },
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base md:text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:bg-secondary hover:scale-105"
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
        </>
    );
}