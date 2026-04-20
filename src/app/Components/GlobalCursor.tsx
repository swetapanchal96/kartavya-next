"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useCursor } from "@/app/context/CursorContext";

export default function GlobalCursor() {
  const { active } = useCursor();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, {
    damping: 25,
    stiffness: 200,
  });

  const cursorY = useSpring(mouseY, {
    damping: 25,
    stiffness: 200,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        width: active ? 90 : 0,
        height: active ? 90 : 0,
        backgroundColor: "#F0D3F0",
        opacity: active ? 1 : 0,
      }}
    />
  );
}