"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {

  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const smoothX = useSpring(mouseX, {
  stiffness: 50,
  damping: 20,
});

const smoothY = useSpring(mouseY, {
  stiffness: 50,
  damping: 20,
});

const handleMouseMove = (e: React.MouseEvent) => {
  const { innerWidth, innerHeight } = window;

  const x = (e.clientX - innerWidth / 2) / 40;
  const y = (e.clientY - innerHeight / 2) / 40;

  mouseX.set(x);
  mouseY.set(y);
};
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 500], [0, 200]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const cupY = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
  ref={containerRef}
  onMouseMove={handleMouseMove} className="relative h-screen w-full overflow-hidden bg-rich-black flex items-center justify-center">
      {/* Cinematic Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.png"
          alt="Luxury Café Interior"
          fill
          className="object-cover opacity-60 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/60 via-transparent to-rich-black" />
      </motion.div>

      {/* Floating Large Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <motion.h1
          style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[25vw] font-playfair font-bold text-white whitespace-nowrap leading-none select-none tracking-tighter"
        >
          WHISKK
        </motion.h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div 
          style={{ y: textY }}
          className="flex-1 text-center md:text-left pt-20 md:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-luxury-gold font-poppins uppercase text-sm font-medium mb-6 block"
            >
              Est. 2026 • 129 Whiskk Avenue
            </motion.span>
            <h2 className="text-white font-playfair text-6xl md:text-8xl font-bold leading-[1] mb-8 tracking-tight">
              Friendly <br />
              <span className="text-luxury-gold">Atmosphere</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-12 font-poppins leading-relaxed">
              Experience the perfect blend of artisanal coffee, gourmet delicacies, and a sophisticated ambience crafted for the elite.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <Button asChild className="bg-luxury-gold hover:bg-white text-royal-blue rounded-full px-10 py-7 text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-luxury-gold/20">
                <Link href="#menu">Explore Menu</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg backdrop-blur-sm transition-all hover:scale-105">
                <Link href="#reservation">Reserve Table</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Realistic Floating Image Component */}
    <motion.div
  style={{
    y: cupY,
    x: smoothX,
  }}
          className="flex-1 relative aspect-square max-w-[550px] w-full group"
        >
          {/* Main Floating Cup */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full h-full z-20"
          >
            <Image
              src="/floating-cup.png"
              alt="Premium Coffee"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Floating Coffee Beans */}

<motion.img
  src="/bean1.png"
  alt=""
  className="absolute top-10 left-0 w-24 z-30"
  animate={{
    y: [0, -25, 0],
    rotate: [0, 15, -15, 0],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    x: smoothX,
    y: smoothY,
  }}
/>

<motion.img
  src="/bean2.png"
  alt=""
  className="absolute bottom-20 right-0 w-32 z-30 blur-[1px]"
  animate={{
    y: [0, 20, 0],
    rotate: [0, -12, 12, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    x: smoothX.get() * -0.5,
    y: smoothY.get() * -0.5,
  }}
/>
<motion.div
  animate={{
    x: [0, 20, 0],
    y: [0, -20, 0],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -bottom-20 -left-20 w-72 h-72 bg-luxury-gold/20 blur-[120px] rounded-full z-0"
/>
<motion.div
  style={{
    x: smoothX.get() * 1.2,
    y: smoothY.get() * 1.2,
  }}
  transition={{
    duration: 0.1,
    ease: "easeOut",
  }}
  className="absolute top-32 left-40 w-24 h-24 rounded-full bg-white/20 blur-xl"
/>

<motion.div
  style={{
    x: smoothX.get() * 0.8,
    y: smoothY.get() * 0.8,
  }}
  transition={{
    duration: 0.1,
    ease: "easeOut",
  }}
  className="absolute bottom-40 right-40 w-20 h-20 rounded-full bg-luxury-gold/30 blur-xl"
/>
          
          {/* Dynamic Shadow that moves opposite to the cup */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.15, 0.3],
              y: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-black/40 blur-3xl rounded-full z-10"
          />

          {/* Floating Particles (Coffee Beans / Gold Flakes) */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                x: [0, (i % 2 === 0 ? 20 : -20), 0],
                rotate: [0, 360],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className={cn(
                "absolute w-4 h-4 rounded-full blur-[1px] z-30",
                i % 2 === 0 ? "bg-luxury-gold/40" : "bg-white/20"
              )}
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 15}%`,
              }}
            />
          ))}
          
          {/* Subtle light effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-luxury-gold/10 rounded-full blur-[120px] pointer-events-none z-0" />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase">Discover More</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-16 bg-gradient-to-b from-luxury-gold to-transparent" 
          />
        </div>
      </motion.div>
    </section>
  );
}
