"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContact() {
    return (
        <div className="fixed bottom-5 right-5 z-9999 flex flex-col gap-4">

            {/* WhatsApp */}
            <Link
                href="https://wa.me/917046777222"
                target="_blank"
                className="
                    relative
                    w-14 h-14
                    rounded-full
                    bg-[#25D366]
                    text-white
                    flex items-center justify-center
                    shadow-2xl
                    hover:scale-110
                    transition-all duration-300
                "
            >
                {/* Ripple Animation */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>

                <FaWhatsapp className="text-3xl relative z-10" />
            </Link>

        </div>
    );
}