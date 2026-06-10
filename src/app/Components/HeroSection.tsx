"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import banner1 from '@/app/assets/banner-1.jpeg';
import banner2 from '@/app/assets/banner-2.jpg';
import banner3 from '@/app/assets/banner-3.jpg';
import banner4 from '@/app/assets/banner-4.jpg';
import banner5 from '@/app/assets/banner-5.jpg';

const slides = [
  {
    id: 1,
    title: "Kisan ka Vikas Hi Hamara Kartavya",
    subtitle: "20 years of empowering Indian farming community.",
    image: banner1.src,
    origin: "20% 20%",
    zoomType: "in"
  },
  {
    id: 2,
    title: "Premium Seeds for Bumper Harvest",
    subtitle: "Research based seeds for maximum stand and top yields.",
    image: banner2.src,
    origin: "80% 80%",
    zoomType: "in"
  },
  {
    id: 3,
    title: "Gold Standard in Seed Research",
    subtitle: "Recognised by Department of Scientific and Industrial Research, Govt of India",
    image: banner3.src,
    origin: "center center",
    zoomType: "out"
  },
  {
    id: 4,
    title: "Seeding the Future of Agriculture",
    subtitle: "Investing in R&D & infrastructure to power breakthroughs.",
    image: banner4.src,
    origin: "20% 20%",
    zoomType: "out"
  },
  {
    id: 5,
    title: "Taking on Climate Challenges",
    subtitle: "Seeds developed for superior drought tolerance and disease resistance.",
    image: banner5.src,
    origin: "20% 20%",
    zoomType: "out"
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringTitle, setIsHoveringTitle] = useState(false);

  // --- MOUSE TRACKING LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-[250px] md:h-[90vh] mt-22.5 w-full overflow-hidden bg-dark-grey">
      
      {/* 1. THE CUSTOM CURSOR ELEMENT */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-999 flex items-center justify-center rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHoveringTitle ? 90 : 0, // Appears only on hover
          height: isHoveringTitle ? 90 : 0,
          backgroundColor: "#F0D3F0", // Light color to pop via mix-blend
          opacity: isHoveringTitle ? 1 : 0,
        }}
      >
        {/* {isHoveringTitle && (
          <span className="text-black font-bold text-2xl">V</span>
        )} */}
      </motion.div>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={2000}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={slide.zoomType === "in" ? { scale: 1 } : { scale: 1.5 }}
                animate={
                  activeIndex === index 
                    ? { scale: slide.zoomType === "in" ? 1.5 : 1 } 
                    : { scale: slide.zoomType === "in" ? 1 : 1.5 }
                }
                transition={{ duration: 8, ease: "easeOut" }}
                style={{ 
                  transformOrigin: slide.origin,
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-black/40 z-10 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
            </div>

            <div className="relative z-20 flex h-full items-center px-10 md:px-24 max-w-8xl mx-auto">
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div key={slide.id} className="max-w-4xl">
                    <motion.div
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
                      className="h-2 w-12 md:w-24 mb-4 md:mb-8"
                      style={{ backgroundColor: "#FFF212" }}
                    />

                    <div className="overflow-hidden mb-4">
                      {/* 2. ADDED HOVER TRIGGERS & CURSOR-NONE */}
                      <motion.h1
                        // onMouseEnter={() => setIsHoveringTitle(true)}
                        // onMouseLeave={() => setIsHoveringTitle(false)}
                        className="text-2xl md:text-[70px] font-black text-white leading-[0.9] tracking-tighter cursor-none select-none"
                        // initial={{ y: "110%" }}
                        // animate={{ y: 0 }}
                        // transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {slide.title.toUpperCase()}
                      </motion.h1>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="text-md md:text-3xl text-white/80 font-medium max-w-xl"
                    >
                      {slide.subtitle}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>



  );
}