import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { ContactForm } from "@/components/contact-form";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Clock, Shield } from "lucide-react";
import ohynixLogo from "@/assets/ohynix-logo.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
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
              <span className="text-xl font-bold gradient-text">Ohynix</span>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden particle-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">Get In Touch</span>
              <br />
              <span className="text-foreground">Let's Build Something Amazing</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with AI? Share your vision with us and we'll create 
              a custom solution that drives real results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Benefits */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-primary/10 glow-cyan">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Free Consultation</h3>
              <p className="text-muted-foreground">
                Get expert advice on your AI automation needs with no commitment
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-secondary/10 glow-purple">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Quick Response</h3>
              <p className="text-muted-foreground">
                We'll get back to you within 24 hours with a detailed proposal
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-accent/10 glow-orange">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Trusted Partner</h3>
              <p className="text-muted-foreground">
                Join hundreds of businesses that trust us with their AI transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={ohynixLogo} alt="Ohynix" className="h-6 w-auto" />
              <span className="text-lg font-semibold gradient-text">Ohynix AI Agency</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Ohynix. Transforming businesses with AI automation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}