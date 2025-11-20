import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, MapPin, Compass, ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-table-mountain.jpg";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Places", href: "/places", icon: <MapPin className="w-5 h-5" /> },
    { name: "Services", href: "/services", icon: <Compass className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <MapPin className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Hero
        title="404"
        subtitle="Lost Your Way?"
        description="It looks like you've wandered off the beaten path. Let us guide you back to your Cape Town adventure."
        backgroundImage={heroImage}
        height="medium"
        showSecondaryButton={false}
        primaryButtonText="Return Home"
        primaryButtonAction={() => navigate("/")}
      />

      {/* Main Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Error Message Card */}
            <Card className="p-8 md:p-12 text-center mb-12 animate-fade-up">
              <div className="mb-6">
                <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
                  404
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The page you're looking for seems to have taken a detour. Don't worry, 
                  we'll help you find your way back to exploring Cape Town!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  size="lg"
                  onClick={() => navigate("/")}
                  className="h-12 px-8"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back Home
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate(-1)}
                  className="h-12 px-8"
                >
                  Previous Page
                </Button>
              </div>
            </Card>

            {/* Quick Links */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold text-center mb-8">
                Popular Destinations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Card
                    key={link.name}
                    className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-up"
                    style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                    onClick={() => navigate(link.href)}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        {link.icon}
                      </div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <Card className="p-8 bg-gradient-ocean text-primary-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help Finding Something?</h3>
                <p className="mb-6 opacity-90">
                  Our team is here to help you navigate and plan your perfect Cape Town adventure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => navigate("/contact")}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://wa.me/27781275522", "_blank")}
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
