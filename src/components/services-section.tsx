import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Workflow, 
  MessageSquare, 
  Zap, 
  Brain,
  ArrowRight
} from "lucide-react";

const featuredServices = [
  {
    title: "AI Call Agents",
    description: "Intelligent voice agents for inbound and outbound calls with natural conversation",
    icon: MessageSquare,
    features: ["Natural Voice Processing", "Call Routing & Transfer", "Appointment Scheduling"]
  },
  {
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency by up to 80%",
    icon: Zap,
    features: ["Data Processing", "Email Automation", "Report Generation"]
  },
  {
    title: "Smart AI Bots",
    description: "Intelligent bots that learn and adapt to your business patterns",
    icon: Brain,
    features: ["Machine Learning", "Pattern Recognition", "Predictive Analytics"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8 mb-16">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-primary/10 glow-cyan">
              <Workflow className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI solutions can transform your business operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 hover-glow-cyan group">
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

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}