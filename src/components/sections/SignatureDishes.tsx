"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { signatureDishes } from "@/data/cafeData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SignatureDishes() {
  return (
    <section id="signature" className="bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold font-medium uppercase tracking-[0.3em] text-[10px] mb-4 block"
          >
            Chef's Recommendations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-playfair font-bold text-royal-blue"
          >
            Signature Creations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[1/1] relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-playfair font-bold text-lg text-royal-blue group-hover:text-luxury-gold transition-colors">{dish.name}</h3>
                  <span className="text-luxury-gold font-bold text-sm">{dish.price}</span>
                </div>
                <p className="text-[12px] text-rich-black/50 font-poppins line-clamp-2 italic">
                  {dish.description}
                </p>
                <Link href="#reservation" className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-royal-blue/40 group-hover:text-luxury-gold transition-colors pt-2">
                  Reserve Now <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
