import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { ContactForm } from "@/components/contact-form";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Bot, 
  Workflow, 
  Zap, 
  Brain, 
  MessageSquare, 
  Search, 
  BarChart3,
  Shield,
  Clock,
  Target
} from "lucide-react";
import ohynixLogo from "@/assets/ohynix-logo.png";

const services = [
  {
    category: "AI Workflow Services",
    description: "Streamline your operations with intelligent automation",
    icon: Workflow,
    color: "neon-cyan",
    services: [
      {
        title: "Process Automation",
        description: "Automate repetitive tasks and workflows to increase efficiency by up to 80%",
        icon: Zap,
        features: ["Data Processing", "Email Automation", "Report Generation", "Task Scheduling"]
      },
      {
        title: "Integration Solutions",
        description: "Connect your existing tools and systems for seamless data flow",
        icon: BarChart3,
        features: ["API Integrations", "Database Syncing", "CRM Connectivity", "Cloud Migration"]
      },
      {
        title: "Workflow Optimization",
        description: "Analyze and optimize your business processes for maximum efficiency",
        icon: Target,
        features: ["Process Analysis", "Bottleneck Identification", "Performance Metrics", "Continuous Improvement"]
      }
    ]
  },
  {
    category: "Custom AI Agents",
    description: "Intelligent agents tailored to your specific business needs",
    icon: Bot,
    color: "neon-purple",
    services: [
      {
        title: "Chatbots & Virtual Assistants",
        description: "24/7 customer support and internal assistance powered by AI",
        icon: MessageSquare,
        features: ["Natural Language Processing", "Multi-language Support", "Knowledge Base Integration", "Escalation Handling"]
      },
      {
        title: "Research Assistants",
        description: "AI-powered research and data analysis for informed decision making",
        icon: Search,
        features: ["Market Research", "Competitive Analysis", "Data Mining", "Trend Identification"]
      },
      {
        title: "Smart Automation Bots",
        description: "Intelligent bots that learn and adapt to your business patterns",
        icon: Brain,
        features: ["Machine Learning", "Pattern Recognition", "Predictive Analytics", "Adaptive Responses"]
      }
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Time Savings",
    description: "Reduce manual work by up to 80% with intelligent automation"
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "99.9% uptime with robust, enterprise-grade solutions"
  },
  {
    icon: Target,
    title: "Precision",
    description: "AI-driven accuracy that improves over time with machine learning"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
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
      <section className="relative py-20 overflow-hidden particle-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="gradient-text">AI Solutions</span>
              <br />
              <span className="text-foreground">Built for Your Business</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how our AI workflow services and custom agents can transform your operations, 
              boost efficiency, and drive unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-12">
                {/* Category Header */}
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className={`p-4 rounded-full bg-${category.color}/10 glow-${category.color.split('-')[1]}`}>
                      <category.icon className={`h-12 w-12 text-${category.color}`} />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold gradient-text">{category.category}</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="bg-card/80 backdrop-blur-sm border-primary/20 hover-glow-cyan group">
                      <CardHeader className="space-y-4">
                        <div className="flex justify-center">
                          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <service.icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-center text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-center text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold gradient-text">Why Choose Ohynix?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver measurable results that transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-secondary/10 glow-purple">
                    <benefit.icon className="h-12 w-12 text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
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