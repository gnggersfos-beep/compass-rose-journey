import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, MapIcon, Wine, Mountain, Users, Car } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-table-mountain.jpg";
import winelandsImage from "@/assets/winelands.jpg";
import capePointImage from "@/assets/cape-point.jpg";
import atlantisDunesImage from "@/assets/atlantis-dunes.jpg";

const Services = () => {
  const services = [
    {
      icon: <Plane className="w-12 h-12 text-primary" />,
      title: "Airport Transfers",
      description: "Comfortable, reliable transfers between Cape Town International Airport and your accommodation. Professional drivers and luxury vehicles.",
      image: heroImage,
      features: [
        "Meet & greet service",
        "Flight tracking",
        "Luxury vehicles",
        "24/7 availability",
        "Competitive rates",
      ],
      link: "/services/airport-transfers",
    },
    {
      icon: <MapIcon className="w-12 h-12 text-primary" />,
      title: "Custom Tours",
      description: "Personalized itineraries designed around your interests, schedule, and budget. Experience Cape Town your way with our expert local guides.",
      image: capePointImage,
      features: [
        "Tailored experiences",
        "Flexible scheduling",
        "Expert local guides",
        "Private or small groups",
        "Unique experiences",
      ],
      link: "/services/custom-tours",
    },
    {
      icon: <Wine className="w-12 h-12 text-primary" />,
      title: "Wine Tours",
      description: "Explore world-renowned wine regions including Stellenbosch, Franschhoek, and Constantia. Taste exceptional wines and enjoy gourmet pairings.",
      image: winelandsImage,
      features: [
        "Premium wine estates",
        "Cellar tours",
        "Gourmet lunch included",
        "Wine tastings",
        "Scenic routes",
      ],
      link: "/services/wine-tours",
    },
    {
      icon: <Mountain className="w-12 h-12 text-primary" />,
      title: "Adventure Trips",
      description: "Adrenaline-pumping activities including sandboarding, shark cage diving, paragliding, and more. Perfect for thrill-seekers.",
      image: atlantisDunesImage,
      features: [
        "Professional equipment",
        "Safety certified",
        "Experienced instructors",
        "Various difficulty levels",
        "Photo opportunities",
      ],
      link: "/services/adventure-trips",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Group Packages",
      description: "Special rates and customized experiences for families, corporate groups, and large parties. Team building and events catering available.",
      image: capePointImage,
      features: [
        "Discounted group rates",
        "Event coordination",
        "Team building activities",
        "Custom itineraries",
        "Large vehicle options",
      ],
      link: "/services/group-packages",
    },
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: "Private Shuttles",
      description: "Comfortable transportation for any occasion. Point-to-point service, day trips, or multi-day tours with professional drivers.",
      image: heroImage,
      features: [
        "Clean, modern vehicles",
        "Professional chauffeurs",
        "Flexible routes",
        "WiFi available",
        "Complimentary water",
      ],
      link: "/services/shuttles",
    },
  ];

  const handleContactForService = (serviceName: string) => {
    const message = `Hi! I'm interested in your ${serviceName} service. Can you provide more details?`;
    window.open(
      `https://wa.me/27625803352?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Our Services"
        subtitle="Excellence in Travel"
        description="From airport transfers to custom adventures, we provide comprehensive travel services tailored to your needs"
        backgroundImage={heroImage}
        height="medium"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional, reliable, and personalized travel services designed to make your Cape Town experience unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Icon/Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-ocean">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-primary-foreground group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 text-primary">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-xs text-muted-foreground"
                        >
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleContactForService(service.title)}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleContactForService(service.title)}
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Book With Us?</h2>
              <p className="text-muted-foreground">
                Experience the difference of working with local experts who truly care about your experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Expertise",
                  description: "Born and raised in Cape Town, we know the city inside out and share hidden gems tourists rarely discover.",
                },
                {
                  title: "Personalized Service",
                  description: "No cookie-cutter tours here. Every experience is tailored to your interests, pace, and preferences.",
                },
                {
                  title: "Best Value",
                  description: "Competitive pricing with no hidden fees. We offer exceptional value without compromising on quality.",
                },
              ].map((benefit, index) => (
                <Card
                  key={benefit.title}
                  className="p-6 text-center hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sunset text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Ready to Start Planning?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Get in touch today and let us create the perfect Cape Town experience for you
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open("https://wa.me/27625803352", "_blank")}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
