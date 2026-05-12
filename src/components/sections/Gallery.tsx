"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521017432531-fbd92d74426b?q=80&w=1000&auto=format&fit=crop",
];

export default function Gallery() {
  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-luxury-gold font-medium uppercase tracking-[0.3em] text-[10px] mb-4 block text-left">
              Visual Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-blue leading-tight text-left">
              The Art of Ambience & Flavor
            </h2>
          </div>
          <p className="text-rich-black/50 font-poppins max-w-sm text-right hidden md:block text-[12px]">
            Take a glimpse into the moments and flavors that define the 129 Whiskk Avenue experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group"
          >
            <Image src={galleryImages[0]} alt="Cafe" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <Image src={galleryImages[1]} alt="Coffee" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <Image src={galleryImages[2]} alt="Interior" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-2 relative rounded-3xl overflow-hidden group"
          >
            <Image src={galleryImages[3]} alt="Dessert" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
