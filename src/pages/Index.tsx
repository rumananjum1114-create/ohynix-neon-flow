import { HeroSection } from "@/components/hero-section";
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
            <Link to="/" className="flex items-center space-x-3">
              <img src={ohynixLogo} alt="Ohynix" className="h-8 w-auto" />
              <span className="text-xl font-bold gradient-text">Ohynix</span>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
};

export default Index;