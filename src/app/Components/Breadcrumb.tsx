"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBannerProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs: BreadcrumbItem[];
};

export default function Breadcrumb({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <section className="relative mt-22 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-grey/75" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/70 via-transparent to-secondary/20" />

      {/* Decorative Blur Shapes */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex min-h-90 flex-col items-center justify-center py-20 text-center md:min-h-107.5">
            {/* Subtitle */}
            {subtitle && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                <span className="text-sm font-medium tracking-wide text-white">
                  {subtitle}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              {title}
            </h1>

            {/* Accent Line */}
            <div className="mt-6 h-1 w-24 rounded-full bg-secondary" />

            {/* Breadcrumb */}
            <div className="mt-8">
              <div className="inline-flex flex-wrap items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <div key={index} className="flex items-center">
                      {item.href && !isLast ? (
                        <Link
                          href={item.href}
                          className="text-sm font-medium text-white/80 transition duration-300 hover:text-secondary"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-sm font-semibold text-secondary">
                          {item.label}
                        </span>
                      )}

                      {!isLast && (
                        <FaChevronRight className="mx-3 text-xs text-white/50" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-15 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}