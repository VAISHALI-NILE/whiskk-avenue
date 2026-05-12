"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <div className="flex-1 relative group w-full">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
                alt="129 Whiskk Avenue Atmosphere"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/30 to-transparent" />
            </motion.div>
            
            <div className="absolute bottom-8 left-8 z-20">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-white font-playfair font-bold text-3xl leading-none"
              >
                Since <br /> <span className="text-luxury-gold">2020</span>
              </motion.h3>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-luxury-gold font-poppins uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">
                The Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-blue mb-8 leading-[1.2] tracking-tight">
                Crafting <span className="italic text-luxury-gold">Memories</span> in every whisk.
              </h2>
              <div className="space-y-6 text-rich-black/70 text-sm md:text-base font-poppins leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  129 Whiskk Avenue is a luxury modern café in Chhatrapati Sambhajinagar known for its aesthetic interiors, artisanal desserts, and premium café experience.
                </p>
                <p>
                  The brand began in 2020 with a vision to create a space where people could enjoy desserts, coffee, pizzas, and memorable experiences in a rich yet comfortable atmosphere.
                </p>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-8">
                <div className="flex-1 text-left">
                  <div className="w-8 h-[2px] bg-luxury-gold mb-4" />
                  <h4 className="font-playfair font-bold text-lg text-royal-blue mb-2 uppercase">Aesthetic</h4>
                  <p className="text-[12px] text-rich-black/50 font-poppins">Instagrammable interiors with warm lighting and elegant seating.</p>
                </div>
                <div className="flex-1 text-left">
                  <div className="w-8 h-[2px] bg-luxury-gold mb-4" />
                  <h4 className="font-playfair font-bold text-lg text-royal-blue mb-2 uppercase">Artisanal</h4>
                  <p className="text-[12px] text-rich-black/50 font-poppins">Handcrafted beverages and wood-fired pizzas made fresh.</p>
                </div>
              </div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="mt-12 inline-flex items-center gap-4 text-royal-blue font-bold tracking-widest text-[10px] uppercase cursor-pointer"
              >
                Explore Our Story
                <div className="w-8 h-[1px] bg-royal-blue" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
