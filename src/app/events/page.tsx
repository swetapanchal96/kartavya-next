"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";
import Image, { StaticImageData } from "next/image";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import axios from "axios";
import { apiUrl } from "@/config";


type GalleryImageType = {
    id: number;
    image: string;
};

type EventType = {
    id: number;
    title: string;
    slug: string;
    masterimage: string;
    multiple_images: GalleryImageType[];
    created_at: string;
};


export default function EventsPage() {

    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [events, setEvents] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchEvents = async () => {

            try {

                const response = await axios.post(
                    `${apiUrl}/event-list`
                );

                if (response.data.success) {
                    setEvents(response.data.data);
                } else {
                    setError(response.data.message);
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

        fetchEvents();

    }, [])


    const nextImage = () => {
        if (!selectedEvent) return;

        setCurrentIndex((prev) =>
            prev === selectedEvent.multiple_images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        if (!selectedEvent) return;

        setCurrentIndex((prev) =>
            prev === 0 ? selectedEvent.multiple_images.length - 1 : prev - 1
        );
    };

    const closeModal = () => {
        setSelectedEvent(null);
        setCurrentIndex(0);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {

            if (!selectedEvent) return;

            if (e.key === "ArrowRight") {
                nextImage();
            }

            if (e.key === "ArrowLeft") {
                prevImage();
            }

            if (e.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedEvent]);

    return (
        <>
            <Breadcrumb
                title="Events"
                subtitle="Growing Trust Since Years"
                backgroundImage={header.src}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Events" },
                ]}
            />

            {/* ================= EVENTS ================= */}
            <section className="relative overflow-hidden bg-[#f8f8f8] py-24">

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
                                    No Events Found
                                </h3>
                            </div>
                        </div>
                    )}
                    {/* Events Grid */}
                    {!loading && !error && events.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {events.map((event, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedEvent(event)}
                                className="group cursor-pointer"
                            >

                                {/* Image */}
                                <div className="relative h-70 overflow-hidden rounded-xl rounded-b-none">

                                    <Image
                                        src={event.masterimage}
                                        width={600}
                                        height={600}
                                        alt={event.title}
                                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

                                    {/* Photos Count */}
                                    {/* <div className="absolute right-5 top-5 rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur-xl">
                                        {event.multiple_images.length} Photos
                                    </div> */}

                                </div>

                                {/* Bottom Content */}
                                <div className="py-5 bg-yellow rounded-b-xl">

                                    {/* Accent Line */}
                                    {/* <div className="mb-4 h-[3px] w-14 bg-secondary transition-all duration-500 group-hover:w-24"></div> */}

                                    {/* Title */}
                                    <h3 className="text-2xl font-black text-center text-primary transition-all duration-500 ">
                                        {event.title}
                                    </h3>

                                </div>

                            </div>
                        ))}

                    </div>
                    )}
                </div>
            </section>

            {/* ================= LIGHTBOX MODAL ================= */}
            {selectedEvent && (
                <div className="fixed inset-0 z-9999 flex items-center justify-center bg-transparent p-4 backdrop-blur-md">

                    {/* Close */}
                    <button
                        onClick={closeModal}
                        className="absolute right-6 top-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl text-primary transition-all duration-300 hover:rotate-90 hover:bg-secondary"
                    >
                        <IoClose />
                    </button>

                    {/* Previous */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 md:left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full cursor-pointer text-3xl  backdrop-blur-xl transition-all duration-300 bg-secondary text-primary"
                    >
                        <IoChevronBack />
                    </button>

                    {/* Next */}
                    <button
                        onClick={nextImage}
                        className="absolute right-4 md:right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full  text-3xl  backdrop-blur-xl transition-all duration-300 cursor-pointer bg-secondary text-primary"
                    >
                        <IoChevronForward />
                    </button>

                    {/* Main Content */}
                    <div className="flex w-full max-w-7xl flex-col items-center">

                        {/* Image */}
                        <div className="relative flex max-h-[80vh] items-center justify-center overflow-hidden rounded-[28px]">

                            <Image
                                src={selectedEvent.multiple_images[currentIndex]?.image}
                                width={1600}
                                height={1600}
                                alt={selectedEvent.title}
                                className="max-h-[80vh] w-auto rounded-[28px] object-contain transition-all duration-500"
                            />

                        </div>

                        {/* Bottom */}
                        <div className="mt-4 flex flex-col items-center text-center">

                            {/* Counter */}
                            <span className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-secondary">
                                {currentIndex + 1} / {selectedEvent.multiple_images.length}
                            </span>

                            {/* Title */}
                            <h3 className="text-3xl  font-black text-secondary">
                                {selectedEvent.title}
                            </h3>

                        </div>

                    </div>

                </div>
            )}
        </>
    );
}