"use client";

import { motion } from "framer-motion";
import { cafeData } from "@/data/cafeData";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${cafeData.coordinates.lat},${cafeData.coordinates.lng}`;
  const iframeUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.484!2d${cafeData.coordinates.lng}!3d${cafeData.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba299c8577777%3A0x1eb3600f68204686!2s129%20Whiskk%20Avenue!5e0!3m2!1sen!2sin!4v1715545000000!5m2!1sen!2sin`;

  return (
    <section className="bg-white rounded-b-[60px] md:rounded-b-[100px] relative z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-gold font-medium uppercase tracking-[0.3em] text-[10px] mb-4 block"
            >
              Locate Us
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-blue mb-8">
              Find Us In <br /> <span className="italic text-luxury-gold">Chhatrapati Sambhajinagar</span>
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-royal-blue/5 flex items-center justify-center text-royal-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-royal-blue">Address</h4>
                  <p className="text-rich-black/60 text-sm font-poppins">{cafeData.address}</p>
                  <p className="text-luxury-gold text-xs font-medium mt-1">Landmark: {cafeData.landmark}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-royal-blue/5 flex items-center justify-center text-royal-blue shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-royal-blue">Contact</h4>
                  <p className="text-rich-black/60 text-sm font-poppins">{cafeData.phone}</p>
                </div>
              </div>
            </div>

            <motion.a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 bg-royal-blue text-white px-8 py-3 rounded-full font-bold shadow-xl shadow-royal-blue/20 text-xs uppercase tracking-widest"
            >
              Get Directions
            </motion.a>
          </div>

          <div className="flex-1 w-full aspect-square md:aspect-video lg:aspect-square bg-cream rounded-[40px] overflow-hidden relative border border-luxury-gold/10 shadow-2xl">
            <iframe
              src={iframeUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
