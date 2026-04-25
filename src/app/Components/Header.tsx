"use client";

import { useState } from "react";
import Image from "next/image";
import logo from '@/app/assets/logo.png';

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Research & Development", href: "#" },
  { 
    label: "Services", 
    href: "#",
    dropdown: ["Increment of Basic Seed", "Production"] 
  },
  {
    label: "Product",
    href: "#",
    dropdown: ["Vegetables Products", "Field Crops Products"],
  },
  { label: "Partnership", href: "#" },
  { label: "Contact Us", href: "#" },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    // CHANGED: 'relative' to 'fixed top-0 left-0'
    <header className="w-full fixed top-0 left-0 z-100 shadow-lg bg-primary" >
      
      {/* Top Accent Bar */}
      <div className="h-1 w-full" style={{ backgroundColor: "#FFF212" }} />

      <div className="flex justify-between items-center px-6 py-1 max-w-7xl mx-auto">

        {/* Logo Section */}
        <a href="#" className="shrink-0 transition-transform hover:scale-105 py-2">
          <Image
            src={logo.src}
            alt="Kartavya Seeds"
            width={100} 
            height={60}
            priority
            className="drop-shadow-sm"
          />
        </a>

        {/* Navigation */}
        <nav className="flex items-center">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className={`
                  flex items-center gap-1.5 px-4 py-6 text-[15px] font-semibold uppercase tracking-wider transition-all duration-300
                  ${openDropdown === link.label ? "text-white" : "text-white hover:text-yellow"}
                `}
              >
                {link.label}
                {link.dropdown && (
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${openDropdown === link.label ? "rotate-180 text-yellow" : "text-yellow"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Dropdown */}
              {link.dropdown && openDropdown === link.label && (
                <div
                  className="absolute top-full left-0 z-110 w-64 pt-0 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div 
                    className="overflow-hidden rounded-b-lg shadow-2xl border-t-4"
                    style={{ 
                        backgroundColor: "#ffffff", 
                        borderTopColor: "#FFF212" 
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-6 py-4 text-sm font-bold text-primary hover:text-primary transition-all duration-200 border-b border-gray-100 last:border-0"
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF212")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      
      {/* Bottom thin line */}
      <div className="h-0.5 w-full" style={{ backgroundColor: "#B4D342", opacity: 0.3 }} />
    </header>
  );
}