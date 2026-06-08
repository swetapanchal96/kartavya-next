"use client";

import { useState } from "react";
import Image from "next/image";
import logo from '@/app/assets/Kartavya-Seeds-Logo-round.png';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

type DropdownItem = {
  label: string;
  href: string;
};

type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Research & Development", href: "/research&development" },
  {
    label: "Services",
    href: "#",
    dropdown: [
      {
        label: "Increment of Basic Seed",
        href: "/basic-seed",
      },
      {
        label: "Production",
        href: "/production",
      },
    ],
  },
  {
    label: "Product",
    href: "#",
    dropdown: [
      {
        label: "Vegetables Products",
        href: "/product?slug=vegetables",
      },
      {
        label: "Fruit Crops Products",
        href: "/product?slug=fruit",
      },
      {
        label: "Field Crops Products",
        href: "/product?slug=field",
      }

    ],
  },
  { label: "Partnership", href: "/partnership" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);


  return (
    // CHANGED: 'relative' to 'fixed top-0 left-0'
    <header className="w-full fixed top-0 left-0 z-100 shadow-lg bg-primary " >

      {/* Top Accent Bar */}
      <div className="h-1 w-full" style={{ backgroundColor: "#FFF212" }} />
      <div className="relative bg-primary shadow-lg">
        <div className="flex justify-between items-center px-6 py-1 max-w-7xl h-21 mx-auto">

          {/* Logo Section */}
          <Link href="/" className="absolute md:left-12 -top-2  z-50 shrink-0 transition-transform hover:scale-105 py-2">
            <Image
              src={logo.src}
              alt="Kartavya Seeds"
              width={130}
              height={100}
              priority
              className="drop-shadow-sm"
            />
          </Link>

          {/* Navigation */}
          <nav className="ml-auto hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
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
                </Link>

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
                      {link.dropdown.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-6 py-4 text-sm font-bold text-primary hover:text-primary transition-all duration-200 border-b border-gray-100 last:border-0"
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFF212")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden ml-auto text-white z-50"
          >
            {mobileMenu ? <IoClose size={34} /> : <HiMenuAlt3 size={34} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300
            ${mobileMenu
              ? "max-h-[700px] opacity-100"
              : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="bg-primary border-t border-white/10 px-4 pb-6 pt-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>

                  {link.dropdown ? (

                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                      className="
                      w-full flex items-center justify-between
                      py-3 text-white uppercase text-sm
                      font-semibold tracking-wide
                    "
                    >
                      {link.label}

                      {link.dropdown && (
                        <svg
                          className={`w-4 h-4 transition-transform ${openDropdown === link.label
                              ? "rotate-180 text-yellow-300"
                              : "text-yellow-300"
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>

                  ) : (

                    <Link
                      href={link.href}
                      onClick={() => setMobileMenu(false)}
                      className="
          block py-3 text-white uppercase text-sm
          font-semibold tracking-wide
        "
                    >
                      {link.label}
                    </Link>

                  )}

                  {/* Mobile Dropdown */}
                  {link.dropdown &&
                    openDropdown === link.label && (
                      <div className="ml-4 border-l border-yellow-300/40">
                        {link.dropdown.map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="
                              block py-3 pl-4 text-sm
                              text-white/90 hover:text-yellow-300
                              transition
                            "
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom thin line */}
        <div className="h-0.5 w-full" style={{ backgroundColor: "#B4D342", opacity: 0.3 }} />
      </div>
    </header>
  );
}