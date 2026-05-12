import Navbar from "@/components/layout/Navbar";
import LuxuryCafeHero from "@/components/sections/Hero2";
import About from "@/components/sections/About";
import SignatureDishes from "@/components/sections/SignatureDishes";
import MenuSection from "@/components/sections/MenuSection";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import Reservation from "@/components/sections/Reservation";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LuxuryCafeHero />
      <About />
      <SignatureDishes />
      <MenuSection />
      <Reviews />
      <Gallery />
      <Reservation />
      <MapSection />
      <Footer />
    </main>
  );
}
