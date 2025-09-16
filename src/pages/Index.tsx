import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Navigation } from "@/components/ui/navigation";
import { Link } from "react-router-dom";
import ohynixLogo from "@/assets/ohynix-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={ohynixLogo} 
                  alt="Ohynix" 
                  className="h-8 w-auto transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg group-hover:drop-shadow-2xl" 
                />
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold gradient-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">Ohynix</span>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
};

export default Index;