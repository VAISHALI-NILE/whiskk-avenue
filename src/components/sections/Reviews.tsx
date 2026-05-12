"use client";

import { motion } from "framer-motion";
import { reviews } from "@/data/cafeData";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-cream overflow-hidden py-24 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-luxury-gold/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-blue/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-luxury-gold font-medium uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            Guest Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold text-royal-blue"
          >
            What Our <span className="italic text-luxury-gold">Visitors</span> Say
          </motion.h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex overflow-hidden py-10 -mx-6 md:-mx-12">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 px-4"
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="bg-white/80 backdrop-blur-md p-10 rounded-[40px] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col justify-between min-w-[380px] max-w-[380px] relative group hover:border-luxury-gold/20 transition-colors duration-500"
              >
                <div className="absolute top-8 right-8 text-luxury-gold/10 group-hover:text-luxury-gold/20 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-8 text-luxury-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-rich-black/80 font-poppins text-base leading-relaxed italic mb-10 whitespace-normal">
                    "{review.review}"
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal-blue to-royal-blue/80 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-royal-blue/20">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-playfair font-bold text-lg text-royal-blue">{review.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">Verified Guest</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-cream via-cream/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-cream via-cream/80 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
