"use client";

import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/cafeData";
import { useState } from "react";
import Image from "next/image";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  const filteredItems = menuCategories.find(cat => cat.name === activeCategory)?.items || [];

  return (
    <section id="menu" className="bg-white text-rich-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold font-medium uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            Taste the Extraordinary
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-royal-blue"
          >
            The Curated Menu
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`relative px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category.name 
                  ? "text-royal-blue" 
                  : "text-rich-black/30 hover:text-rich-black/60"
              }`}
            >
              {category.name}
              {activeCategory === category.name && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-luxury-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-32"
            >
              {filteredItems.map((item) => (
                <div key={item.name} className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg font-bold group-hover:text-luxury-gold transition-colors duration-300 font-playfair">
                      {item.name}
                    </h4>
                    <div className="flex-1 border-b border-dotted border-rich-black/10 mx-4 h-0" />
                    <span className="font-bold text-royal-blue text-sm">{item.price}</span>
                  </div>
                  <p className="text-[12px] text-rich-black/50 font-poppins italic">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Brewing Guide Style Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-cream p-10 rounded-2xl flex flex-col justify-between min-h-[300px] border border-luxury-gold/10"
          >
            <div>
              <h4 className="text-xl font-playfair font-bold text-royal-blue mb-4 uppercase tracking-tighter">Brewing Guide</h4>
              <p className="text-royal-blue/70 text-[13px] leading-relaxed mb-8">
                Master the art of the perfect pour. Our guides help you recreate the 129 Whiskk experience at home.
              </p>
            </div>
            <button className="text-royal-blue text-xs font-bold border-b border-royal-blue w-fit pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-all">
              READ MORE →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-royal-blue p-10 rounded-2xl flex flex-col justify-between min-h-[300px] text-white"
          >
            <div>
              <h4 className="text-xl font-playfair font-bold text-luxury-gold mb-4 uppercase tracking-tighter">Artisan Roast</h4>
              <p className="text-white/70 text-[13px] leading-relaxed mb-8">
                Every bean is roasted in small batches to preserve its unique character and complex aroma profile.
              </p>
            </div>
            <button className="text-luxury-gold text-xs font-bold border-b border-luxury-gold w-fit pb-1 hover:text-white hover:border-white transition-all">
              EXPLORE BEANS →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden min-h-[300px]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop" 
              alt="Brewing" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
