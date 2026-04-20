"use client";

import { motion } from "framer-motion";
import { useCursor } from "@/app/context/CursorContext";

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export default function AnimatedHeading({
  children,
  as = "h1",
  className,
}: Props) {
  const { setActive } = useCursor();

  const Tag = motion[as];

  return (
    <Tag
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`cursor-none select-none ${className}`}
    >
      {children}
    </Tag>
  );
}