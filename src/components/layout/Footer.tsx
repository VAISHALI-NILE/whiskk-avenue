"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { cafeData } from "@/data/cafeData";

export default function Footer() {
  return (
    <footer className="bg-[#0a2a6b] text-white pt-32 pb-12 overflow-hidden relative -mt-20 z-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-royal-blue font-playfair font-bold text-2xl">W</span>
              </div>
              <span className="font-playfair font-bold text-3xl tracking-tighter">
                129 Whiskk
              </span>
            </Link>
            <p className="text-white/40 font-poppins text-sm leading-relaxed max-w-xs">
              Luxury modern café in Chhatrapati Sambhajinagar. Experience handcrafted perfection.
            </p>
            <div className="flex items-center gap-4">
              <Link href={cafeData.instagram} target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-royal-blue transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-royal-blue transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:text-royal-blue transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-playfair font-bold text-xl mb-8 text-luxury-gold uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-4 text-white/50 font-poppins text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Daily</span>
                <span className="text-white">10:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Special Events</span>
                <span className="text-white">Late Night</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-xl mb-8 text-luxury-gold uppercase tracking-widest">Visit Us</h4>
            <ul className="space-y-6 text-white/50 font-poppins text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>{cafeData.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>{cafeData.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-luxury-gold shrink-0" />
                <span>hello@whisk.org.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair font-bold text-xl mb-8 text-luxury-gold uppercase tracking-widest">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6 font-poppins">
              Stay updated with our latest artisanal creations and events.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-luxury-gold transition-colors"
              />
              <button className="bg-luxury-gold text-royal-blue px-4 py-3 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
          <p>© 2026 129 WHISKK AVENUE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Footer background text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none opacity-[0.015]">
        <h2 className="text-[25vw] font-playfair font-bold text-white whitespace-nowrap">WHISKK</h2>
      </div>
    </footer>
  );
}
