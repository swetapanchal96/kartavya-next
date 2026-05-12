"use client";

import Breadcrumb from "@/app/Components/Breadcrumb";
import header from "@/app/assets/page-header-bg.jpg";

import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";

const relatedBlogs = [
  {
    title: "Future of Sustainable Farming",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    slug: "future-of-sustainable-farming",
    date: "08 May 2026",
  },
  {
    title: "Modern Seed Technology",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
    slug: "modern-seed-technology",
    date: "12 May 2026",
  },
  {
    title: "Eco-Friendly Agriculture",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop",
    slug: "eco-friendly-agriculture",
    date: "18 May 2026",
  },
];

export default function BlogDetailPage() {
  return (
    <>
      <Breadcrumb
        title="Blog Details"
        subtitle="Growing Trust Since Years"
        backgroundImage={header.src}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: "Blog Details" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#f8f8f8] py-20">
        {/* Blur */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        {/* <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" /> */}

        <div className="container relative z-10 mx-auto px-4 md:px-12">
          <div className="grid gap-5 xl:grid-cols-[70%_30%]">
            {/* LEFT CONTENT */}
            <div>
              {/* Blog Image */}
              <div className="relative overflow-hidden rounded-[40px]">
                <div className="relative h-137.5 overflow-hidden rounded-[40px]">
                  <Image
                    src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop"
                    alt="Blog"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-dark-grey/70 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-10 left-10 max-w-4xl">
                    {/* Meta */}
                    {/* <div className="mb-6 flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-md">
                        <FaCalendarAlt className="text-secondary" />

                        <span className="text-sm font-bold uppercase tracking-[2px]">
                          08 May 2026
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white backdrop-blur-md">
                        <FaUserAlt className="text-secondary" />

                        <span className="text-sm font-bold uppercase tracking-[2px]">
                          Admin
                        </span>
                      </div>
                    </div> */}

                    {/* Title */}
                    <h2 className="text-4xl font-black uppercase  text-white md:text-5xl">
                      Future Of Sustainable Farming
                    </h2>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="mt-5">
                {/* Intro */}
                <p className="text-lg  text-[#555]">
                  Sustainable farming is transforming the agricultural industry
                  by combining innovation, environmental responsibility and
                  scientific advancement. Modern agricultural practices now
                  focus on improving productivity while preserving natural
                  resources for future generations.
                </p>

                {/* Content Blocks */}
                <div className="mt-6 space-y-10">
                  <div>
                    <h3 className="mb-2 text-3xl font-black text-dark-grey">
                      Innovation In Agriculture
                    </h3>

                    <p className="text-lg  text-[#666]">
                      Agricultural innovation plays a vital role in improving
                      crop productivity and enhancing farming efficiency.
                      Advanced seed technology, smart irrigation systems and
                      sustainable crop management techniques help farmers
                      achieve better outcomes while reducing environmental
                      impact.
                    </p>
                  </div>

                  {/* <div className="grid gap-8 md:grid-cols-2">
                    <div className="relative overflow-hidden rounded-[30px]">
                      <div className="relative h-75">
                        <Image
                          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop"
                          alt="Blog"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[30px]">
                      <div className="relative h-75">
                        <Image
                          src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop"
                          alt="Blog"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div> */}

                  <div>
                    <h3 className="mb-5 text-3xl font-black text-dark-grey">
                      Building A Greener Future
                    </h3>

                    <p className="text-lg  text-[#666]">
                      Sustainable agriculture is not only about higher yields
                      but also about maintaining soil health, conserving water
                      and supporting biodiversity. Through research and
                      innovation, modern seed companies continue to develop
                      varieties that are resilient, productive and adaptable to
                      changing environmental conditions.
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="rounded-[25px] border-l-[5px] border-secondary bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                    <p className="text-2xl font-bold  text-dark-grey">
                      “Agriculture is the foundation of sustainable growth and
                      innovation is the seed that drives its future.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div>
              <div className="sticky top-0">
                {/* Related Blogs */}
                <div className="rounded-[35px] border border-[#e5e5e5] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  {/* Heading */}
                  <div className="mb-5">
                    <span className="text-sm font-bold uppercase tracking-[4px] text-primary">
                      Related Blogs
                    </span>

                    <h3 className="mt-1 text-3xl font-black text-dark-grey">
                      Latest Articles
                    </h3>
                  </div>

                  {/* Related Blog List */}
                  <div className="space-y-5">
                    {relatedBlogs.map((blog, index) => (
                      <Link
                        key={index}
                        href={`/blog-detail`}
                        className="group flex gap-5"
                      >
                        {/* Image */}
                        <div className="relative h-28 w-28 min-w-28 overflow-hidden rounded-[22px]">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col justify-center">
                          {/* <span className="mb-3 text-xs font-bold uppercase tracking-[3px] text-secondary">
                            {blog.date}
                          </span> */}

                          <h4 className="text-lg font-black  text-dark-grey transition duration-300 group-hover:text-secondary">
                            {blog.title}
                          </h4>

                          <div className="mt-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[2px] text-secondary">
                            Read More

                            <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}