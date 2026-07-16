import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ImageShowcase from "@/components/ImageShowcase";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductsSection from "@/components/ProductsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ImageShowcase />
    <ServicesSection />
    <GallerySection />
    <WhyChooseUs />
    <ProductsSection />
    <TestimonialsSection />
    <CTASection />
    <ContactSection />
    <Footer />
    <Chatbot />
  </div>
);

export default Index;
