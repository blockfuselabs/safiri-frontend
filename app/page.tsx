import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/Landingpage/HeroSection";
import AboutSection from "./components/Landingpage/AboutSection";
import FeaturesSection from "./components/Landingpage/FeaturesSection";
import BenefitsSection from "./components/Landingpage/BenefitsSection";
import WaitlistSection from "./components/Landingpage/WaitlistSection";

export default function Home() {
  return (
    <div>
     <Header />
     <HeroSection />
     <AboutSection />
     <FeaturesSection />
     <BenefitsSection />
     <WaitlistSection />

     <Footer />
    </div>
  );
}
