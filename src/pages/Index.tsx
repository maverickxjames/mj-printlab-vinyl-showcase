import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CollectionsSection from '@/components/CollectionsSection';
import HowToSection from '@/components/HowToSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CollectionsSection />
      <HowToSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
