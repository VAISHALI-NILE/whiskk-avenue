"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Users, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  date: z.string().min(1, { message: "Please select a date." }),
  guests: z.string().min(1, { message: "Please select number of guests." }),
});

export default function Reservation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      guests: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const message = `Hello 129 Whiskk Avenue, I'd like to reserve a table for ${values.guests} on ${values.date}. Name: ${values.name}`;
    window.open(`https://wa.me/917385082554?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <section id="reservation" className="bg-royal-blue text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Info Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-gold font-medium uppercase tracking-[0.3em] text-[10px] mb-4 block"
            >
              Secure Your Table
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Make a <span className="italic text-luxury-gold">Reservation</span>
            </h2>
            <p className="text-white/70 text-base mb-12 font-poppins max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Whether it's a coffee date, a celebration, or a late-night hangout, we ensure your experience at 129 Whiskk Avenue is exceptional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-luxury-gold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">Daily Timings</h4>
                  <p className="text-white/50 text-[12px]">10:00 AM - 11:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-luxury-gold">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">WhatsApp Concierge</h4>
                  <p className="text-white/50 text-[12px]">+91 73850 82554</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 md:p-12 rounded-3xl"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70 text-xs">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-11 text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70 text-xs">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-11 text-sm" {...field} />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70 text-xs">Preferred Date</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold" />
                              <Input type="date" className="bg-white/5 border-white/10 text-white pl-12 h-11 text-sm" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70 text-xs">Number of Guests</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold" />
                              <Input type="number" min="1" placeholder="2" className="bg-white/5 border-white/10 text-white pl-12 h-11 text-sm" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-white hover:bg-luxury-gold text-royal-blue font-bold py-6 rounded-xl transition-all shadow-xl hover:text-white uppercase tracking-widest text-xs">
                    Confirm Reservation
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/917385082554"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[1000] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </motion.a>
    </section>
  );
}
