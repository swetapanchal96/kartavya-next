"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { IoClose, IoAdd, IoRemove } from "react-icons/io5";

import Breadcrumb from "../Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";
import axios from "axios";
import { apiUrl } from "@/config";


type EventType = {
    id: number;
    title: string;
    slug: string;
    image: string;
    created_at: string;
};



export default function NewsArticlesPage() {
    const [selectedImage, setSelectedImage] = useState<EventType | null>(null);
    const [zoom, setZoom] = useState(1);
    const [events, setEvents] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const closeModal = () => {
        setSelectedImage(null);
        setZoom(1);
    };

    useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {

            if (e.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, []);

    useEffect(() => {

        const fetchArticles = async () => {

            try {

                const response = await axios.post(
                    `${apiUrl}/article-list`
                );

                if (response.data.success) {
                    setEvents(response.data.data);
                }

            } catch (error: any) {
                console.log("API Error:", error);
                setError(
                    error?.response?.data?.message ||
                    error?.message ||
                    "API Error"
                );
            } finally {

        setLoading(false);

    }
        };

        fetchArticles();

    }, []);

    return (
        <>
            <Breadcrumb
                title="News & Articles"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "News & Articles" },
                ]}
            />

            {/* ================= NEWS & EVENTS ================= */}
            <section className="relative overflow-hidden bg-[#f8f8f8] py-20">

                {/* Background Glow */}
                <div className="absolute left-0 top-0 h-120 w-120 rounded-full bg-secondary/5 blur-3xl"></div>

                <div className="container relative z-10 mx-auto px-4 md:px-10">

                    {/* Loading */}
                    {loading && (
                        <div className="flex justify-center py-24">
                            <div className="h-14 w-14 animate-spin rounded-full border-4 border-secondary border-t-transparent"></div>
                        </div>
                    )}

                    {/* Error */}
                    {error && !loading && (
                        <div className="flex justify-center py-24">
                            <div className="rounded-2xl border border-red-200 bg-red-50 px-8 py-5 text-center">
                                <h3 className="text-2xl font-bold text-red-500">
                                    {error}
                                </h3>
                            </div>
                        </div>
                    )}

                    {/* No Data */}
                    {!loading && !error && events.length === 0 && (
                        <div className="flex justify-center py-24">
                            <div className="rounded-2xl border border-primary/10 bg-white px-8 py-5 text-center shadow-sm">
                                <h3 className="text-2xl font-bold text-primary">
                                    No Articles Found
                                </h3>
                            </div>
                        </div>
                    )}

                    
                    {/* Events Grid */}
                    {!loading && !error && events.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {events.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(item)}
                                className="group relative overflow-hidden rounded-xl"
                            >

                                {/* Image */}
                                <div className="relative h-120 2xl:h-150 overflow-hidden ">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={600}
                                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div> */}

                                    {/* Gradient Glow */}
                                    <div className="absolute inset-0 bg-secondary/0 transition-all duration-500 group-hover:bg-secondary/10"></div>

                                </div>

                                {/* Content */}
                                {/* Bottom Content */}
                                <div className="relative bg-yellow px-4 py-5">

                                    {/* Title */}
                                    <h3 className="text-xl font-black leading-tight text-primary transition-all duration-500 ">
                                        {item.title}
                                    </h3>

                                </div>

                                {/* Hover Border */}
                                <div className="absolute inset-0 rounded-[35px] border border-white/0 transition-all duration-500 "></div>

                            </div>
                        ))}

                    </div>
                    )}
                </div>
                {/* ================= LIGHTBOX MODAL ================= */}
                {selectedImage && (
                    <div
                        onClick={closeModal}
                        className="fixed inset-0 z-9999 bg-transparent backdrop-blur-md"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="fixed right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-3xl text-white transition-all duration-300 hover:bg-secondary hover:text-primary"
                        >
                            <IoClose />
                        </button>

                        {/* Scrollable Area */}
                        <div className="h-screen w-screen overflow-auto">
                            {/* Center Wrapper */}
                            <div className="flex min-h-screen flex-col items-center justify-center p-10">
                                {/* Image Wrapper */}
                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative"
                                >

                                    <Image
                                        src={selectedImage.image}
                                        width={1600}
                                        height={1600}
                                        alt={selectedImage.title}
                                        onClick={() =>
                                            setZoom((prev) => (prev === 1 ? 2.2 : 1))
                                        }
                                        className={`transition-all duration-500 ${zoom === 1
                                            ? "max-h-[85vh] w-auto cursor-zoom-in"
                                            : "max-h-none w-auto cursor-zoom-out"
                                            }`}
                                        style={{
                                            width: zoom === 1 ? "auto" : "1400px",
                                            height: "auto",
                                        }}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mt-4 text-center text-3xl font-black text-primary ">
                                    {selectedImage.title}
                                </h3>

                            </div>

                        </div>

                    </div>
                )}
            </section>
        </>
    );
}