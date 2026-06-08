"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutSection";
import WhyChooseUs from "./Components/WhyChoose";
import FounderSection from "./Components/FounderSection";
import DirectorsSection from "./Components/DirectorsSection";
import FarmerStoriesSection from "./Components/FarmerStoriesSection";
import GlobalPresenceSection from "./Components/GlobalPresenceSection";
import OurProductsSection from "./Components/OurProductsSection";
import BlogSection from "./Components/BlogSection";
import ExperienceSection from "./Components/ExperienceSection";

import { apiUrl } from "@/config";

export default function HomeClient() {

    const [videos, setVideos] = useState<any[]>([]);
    const [homeProducts, setHomeProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchHomeData = async () => {

            try {

                const res = await axios.post(
                    `${apiUrl}/home-listing`
                );

                console.log(res.data, "HOME API");

                if (res.data?.success) {

                    setVideos(
                        res.data?.data?.videos || []
                    );
                    setHomeProducts(
                        res.data?.data?.home_products || []
                    );
                }

            } catch (error) {

                console.log(
                    "Home API Error:",
                    error
                );

            } finally {

                setLoading(false);
            }
        };

        fetchHomeData();

    }, []);

    return (
        <div className="overflow-hidden">

            <HeroSection />

            <AboutUs />

            <ExperienceSection />

            <WhyChooseUs />

            <FounderSection />

            <DirectorsSection />

            <OurProductsSection
                products={homeProducts}
                loading={loading}
            />

            <FarmerStoriesSection
                videos={videos}
                loading={loading}
            />

            <GlobalPresenceSection />

            <BlogSection />

        </div>
    );
}