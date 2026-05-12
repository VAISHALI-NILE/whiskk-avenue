"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Signature", href: "#signature" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Reservation", href: "#reservation" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-royal-blue rounded-full flex items-center justify-center">
             <span className="text-luxury-gold font-playfair font-bold text-xl">W</span>
          </div>
          <span className={cn(
            "font-playfair font-bold text-2xl tracking-tighter transition-colors",
            isScrolled ? "text-rich-black" : "text-rich-black"
          )}>
            129 Whiskk
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-luxury-gold transition-colors text-rich-black"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5 text-rich-black" />
          </button>
          <Button asChild className="bg-royal-blue hover:bg-royal-blue/90 text-white rounded-full px-6">
            <Link href="#reservation">Reserve Table</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-rich-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium border-b border-muted pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-royal-blue text-white w-full">
              <Link href="#reservation" onClick={() => setIsMobileMenuOpen(false)}>Reserve Table</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
