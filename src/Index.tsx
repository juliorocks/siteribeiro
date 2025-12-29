import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { LaunchSection } from "@/components/LaunchSection";
import { ProductsSection } from "@/components/ProductsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { DeliveryVideosSection } from "@/components/DeliveryVideosSection";
import { PaymentSection } from "@/components/PaymentSection";
import { WarrantySection } from "@/components/WarrantySection";
import { ContactSection } from "@/components/ContactSection";
import { VideoSection } from "@/components/VideoSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <GallerySection />
      <LaunchSection />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <DeliveryVideosSection />
      <PaymentSection />
      <WarrantySection />
      <ContactSection />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
};

export default Index;
