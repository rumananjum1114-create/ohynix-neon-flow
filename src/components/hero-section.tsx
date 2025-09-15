import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import ohynixLogo from "@/assets/ohynix-logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
      <div className="container mx-auto px-6 text-center z-10">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group cursor-pointer">
            <img 
              src={ohynixLogo} 
              alt="Ohynix AI Agency Logo" 
              className="h-32 w-auto animate-float filter drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_50px_rgba(59,130,246,0.8)]"
            />
            <div className="absolute inset-0 animate-pulse-glow rounded-full blur-xl opacity-50 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-70 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 transition-opacity duration-500"></div>
            {/* Sparkle effects */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full animate-ping opacity-75 delay-500"></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-accent rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Transform Your Business</span>
            <br />
            <span className="text-foreground">with AI Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ohynix specializes in AI workflow automation and custom AI agents that streamline operations, 
            boost efficiency, and unlock your business potential.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 my-12">
            <div className="flex items-center space-x-2 text-lg">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <span>Custom AI Agents</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <Zap className="h-6 w-6 text-secondary animate-pulse" />
              <span>Workflow Automation</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <ArrowRight className="h-6 w-6 text-accent animate-pulse" />
              <span>Seamless Integration</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/services">
              <Button variant="outline-neon" size="lg" className="group">
                Explore Services
                <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}