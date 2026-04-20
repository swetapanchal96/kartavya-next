"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";



const slides = [
  {
    id: 1,
    title: "Science led Innovation",
    subtitle: "Developing high-yield seeds through research.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000",
    origin: "20% 20%",
    zoomType: "in"
  },
  {
    id: 2,
    title: "Seed for every need",
    subtitle: "Empowering farmers with quality and reliability.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000",
    origin: "80% 80%",
    zoomType: "in"
  },
  {
    id: 3,
    title: "Rooted in Excellence",
    subtitle: "Sustainable agriculture for a better tomorrow.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000",
    origin: "center center",
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
    <section className="relative h-[90vh] mt-28.75 w-full overflow-hidden bg-dark-grey">
      
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
                      className="h-2 w-24 mb-8"
                      style={{ backgroundColor: "#FFF212" }}
                    />

                    <div className="overflow-hidden mb-4">
                      {/* 2. ADDED HOVER TRIGGERS & CURSOR-NONE */}
                      <motion.h1
                        onMouseEnter={() => setIsHoveringTitle(true)}
                        onMouseLeave={() => setIsHoveringTitle(false)}
                        className="text-6xl md:text-[70px] font-black text-white leading-[0.9] tracking-tighter cursor-none select-none"
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {slide.title.toUpperCase()}
                      </motion.h1>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="text-2xl md:text-3xl text-white/80 font-medium max-w-xl"
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