"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function LuxuryCoffeeHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      // LOCK scroll while animation is active
      if (
        (progress < 1 && isScrollingDown) ||
        (progress > 0 && isScrollingUp)
      ) {
        e.preventDefault();

        setProgress((prev) => {
          let next = prev + e.deltaY * 0.001;
          next = Math.max(0, Math.min(next, 1));
          return next;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [progress]);

  // CUP ANIMATION
  const cupRotate = progress * 360;
  const cupScale = 1 + progress * 0.15;

  // FOOD EMERGING FROM CUP
  const cupcake = { x: -320 * progress, y: -220 * progress, scale: progress, opacity: progress };
  const croissant = { x: 320 * progress, y: -220 * progress, scale: progress, opacity: progress };
  const waffle = { x: -260 * progress, y: 240 * progress, scale: progress, opacity: progress };
  const cheesecake = { x: 300 * progress, y: 240 * progress, scale: progress, opacity: progress };
  const donut = { x: -430 * progress, y: 30 * progress, scale: progress, opacity: progress };
  const pancake = { x: 430 * progress, y: 30 * progress, scale: progress, opacity: progress };

  // RANDOM BEANS
  const beans = useMemo(() => {
    return [...Array(14)].map(() => ({
      x: (Math.random() - 0.5) * 1100,
      y: (Math.random() - 0.5) * 800,
      size: Math.random() * 20 + 16,
      duration: Math.random() * 6 + 6,
    }));
  }, []);

  return (
    <div className="relative bg-cream">
      <section className="relative h-[280vh] -mt-10 pt-30 pb-0">
        <div className="sticky top-0 h-[screen ]overflow-hidden bg-cream flex flex-col items-center justify-center">
          
          {/* BACKGROUND BLURS */}
          <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-luxury-gold/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-royal-blue/10 blur-[120px] rounded-full" />

          {/* HUGE TEXT */}
          <motion.h1
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[18vw] font-black text-royal-blue/5 tracking-[-0.08em] whitespace-nowrap z-0 select-none"
          >
            WHISKK
          </motion.h1>

          {/* MAIN CONTENT CONTAINER */}
          <div className="relative w-full h-full flex flex-col items-center justify-center pt-20">
            
            {/* ELEMENTS WRAPPER (for proper layering) */}
            <div className="relative flex items-center justify-center h-[50vh]">
              {/* FOOD ELEMENTS */}
              <motion.div style={{ x: cupcake.x, y: cupcake.y, scale: cupcake.scale, opacity: cupcake.opacity }} animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute z-10">
                <Image src="/cupcake.png" alt="" width={180} height={180} className="md:w-[180px] w-[90px] object-contain" />
              </motion.div>
              <motion.div style={{ x: croissant.x, y: croissant.y, scale: croissant.scale, opacity: croissant.opacity }} animate={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute z-10">
                <Image src="/croissant.png" alt="" width={200} height={200} className="md:w-[200px] w-[100px] object-contain" />
              </motion.div>
              <motion.div style={{ x: waffle.x, y: waffle.y, scale: waffle.scale, opacity: waffle.opacity }} animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute z-10">
                <Image src="/waffle.png" alt="" width={180} height={180} className="md:w-[180px] w-[100px] object-contain" />
              </motion.div>
              <motion.div style={{ x: cheesecake.x, y: cheesecake.y, scale: cheesecake.scale, opacity: cheesecake.opacity }} animate={{ rotate: [0, -8, 8, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute z-10">
                <Image src="/cheesecake.png" alt="" width={180} height={180} className="md:w-[180px] w-[100px] object-contain" />
              </motion.div>
              <motion.div style={{ x: donut.x, y: donut.y, scale: donut.scale, opacity: donut.opacity }} animate={{ rotate: [0, 12, -12, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute z-10">
                <Image src="/donut.png" alt="" width={150} height={150} className="md:w-[150px] w-[90px] object-contain" />
              </motion.div>
              <motion.div style={{ x: pancake.x, y: pancake.y, scale: pancake.scale, opacity: pancake.opacity }} animate={{ rotate: [0, -12, 12, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute z-10">
                <Image src="/pancake.png" alt="" width={180} height={180} className="md:w-[180px] w-[100px] object-contain" />
              </motion.div>

              {/* MAIN CUP */}
              <motion.div style={{ rotate: cupRotate, scale: cupScale }} className="relative z-20">
                <div className="absolute inset-0 bg-luxury-gold/20 blur-[100px] rounded-full scale-110" />
                <motion.div animate={{ y: [0, -40], opacity: [0.3, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-10 left-1/2 -translate-x-1/2 w-40 md:w-56 h-40 md:h-56 bg-white/40 blur-[60px] rounded-full" />
                <Image src="/coffee-cupp.png" alt="Coffee" width={480} height={480} priority className="md:w-[480px] w-[240px] object-contain relative z-20 drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]" />
              </motion.div>

              {/* BEANS */}
              {beans.map((bean, i) => (
                <motion.div key={i} style={{ x: bean.x * progress, y: bean.y * progress, scale: progress, opacity: progress }} animate={{ rotate: [0, 360] }} transition={{ duration: bean.duration, repeat: Infinity, ease: "linear" }} className="absolute z-30">
                  <Image src="/bean.png" alt="" width={bean.size} height={bean.size} className="object-contain" />
                </motion.div>
              ))}
            </div>

            {/* TEXT & CTAs */}
            <div className="text-center z-50 px-5 w-full max-w-4xl mt-12 md:mt-20">
              <span className="uppercase tracking-[0.35em] text-luxury-gold text-[10px] md:text-[12px] font-bold block mb-4">
                Luxury Café Experience
              </span>
              <p className="text-rich-black text-sm md:text-lg leading-relaxed mt-2 mx-auto font-poppins max-w-2xl">
                Crafted coffee, artisanal desserts, and unforgettable moments <br className="hidden md:block" /> at 129 Whiskk Avenue.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8">
                <Link href="#menu" className="bg-royal-blue text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold transition-all hover:scale-105 shadow-2xl shadow-royal-blue/20 text-xs uppercase tracking-widest">
                  Explore Menu
                </Link>

                <Link href="#reservation" className="bg-white text-royal-blue border border-royal-blue/20 hover:bg-royal-blue hover:text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold transition-all text-xs uppercase tracking-widest">
                  Reserve Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}