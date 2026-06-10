"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaArrowRight } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";
import axios from "axios";
import { useEffect, useState } from "react";

import blog1 from "@/app/assets/post-1.jpg";
import blog2 from "@/app/assets/post-2.jpg";
import blog3 from "@/app/assets/post-3.jpg";
import bg from '@/app/assets/kartavya-bg-4.png'
import { apiUrl } from "@/config";

export default function BlogSection() {
  const [event, setEvent] = useState<any>(null);
  const [eventError, setEventError] = useState("");
  const [articles, setArticles] = useState<any[]>([]);
  const [articleError, setArticleError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setEventError("");

        const res = await axios.post(
          `${apiUrl}/event-list`
        );

        if (res.data?.success && res.data?.data?.length > 0) {
          setEvent(res.data.data[0]);
        }
      } catch (error: any) {
        console.log("Event API Error:", error);
        setEventError(
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong while fetching events."
        );
      }
    };

    fetchEvent();
  }, []);

  useEffect(() => {


    const fetchArticles = async () => {
      try {
        setArticleError("");

        const res = await axios.post(
          `${apiUrl}/article-list`
        );

        if (res.data?.success && res.data?.data?.length > 0) {

          setArticles(res.data.data.slice(0, 3));

        } else {

          setArticleError(
            res.data?.message || "No articles found."
          );
        }

      } catch (error: any) {

        console.log("Article API Error:", error);

        setArticleError(
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong while fetching articles."
        );
      }
    };

    fetchArticles();
  }, [])

  return (
    // <section className="py-20 bg-linear-to-br from-blue/50 via-secondary/35  to-primary/50 overflow-hidden relative">
    <section className="py-15 md:py-20 bg-primary overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <p className="flex items-center text-md md:text-lg justify-center gap-3 uppercase tracking-[5px] text-white font-semibold mb-2 md:mb-4">
            <FaLeaf />
            Media & Events
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Know the Latest News & Events
          </h2>
        </div>

        {/* Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 items-start">

          {/* LEFT SIDE EVENTS */}

          <div className="">
            <Link href='/events'>
              <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-500 group">

                {/* Image */}
                <div className="relative h-50 md:h-88 overflow-hidden">
                  <Image
                    src={event?.masterimage}
                    alt={event?.title || "Event Image"}

                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">

                  <p className="text-secondary uppercase tracking-[3px] font-semibold mb-3">
                    Events
                  </p>

                  <h3 className="text-xl md:text-3xl font-bold text-primary mb-5 leading-tight">
                    {eventError
                      ? eventError
                      : event?.title || "Loading Event..."}
                  </h3>
                </div>
              </div>
            </Link>
            <div className="pt-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-3 text-secondary font-semibold text-lg hover:gap-4 transition-all duration-300"
              >
                View More Events
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE NEWS & ARTICLES */}
          <div className="space-y-3">

            {articleError ? (

              <div className="rounded-3xl bg-white p-8 text-center text-red-500 font-semibold">
                {articleError}
              </div>

            ) : articles.length > 0 ? (

              <>
                {articles.map((article) => (

                  <Link
                    key={article.id}
                    href='/news-articles'
                    className="grid grid-cols-1 md:h-42.5 md:grid-cols-[40%_60%] rounded-3xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-500 group"
                  >

                    {/* Image */}
                    <div className="relative h-40 md:h-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        unoptimized
                        className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 flex flex-col justify-center">

                      <p className="text-secondary uppercase tracking-[3px] font-semibold mb-3">
                        News & Article
                      </p>

                      <h3 className="text-xl font-bold text-primary leading-tight transition duration-300 group-hover:text-secondary line-clamp-2">
                        {article.title}
                      </h3>

                    </div>

                  </Link>

                ))}

                {/* Button */}
                <div className="pt-1 flex justify-end">
                  <Link
                    href="/news-articles"
                    className="inline-flex items-center gap-3 text-secondary font-semibold text-lg hover:gap-4 transition-all duration-300"
                  >
                    View More News
                    <FaArrowRight />
                  </Link>
                </div>
              </>

            ) : (

              <div className="rounded-3xl bg-white p-8 text-center font-semibold text-primary">
                Loading articles...
              </div>

            )}

          </div>

        </div>
      </div>

      <div className="absolute -bottom-1 h-[305vh] md:h-[150vh] w-full opacity-30 pointer-events-none">
        <Image
          src={bg.src}
          alt="background-texture"
          fill
          className="object-cover object-bottom"
        />
      </div>
    </section>



  );
}