import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import atlantisDunesImage from "@/assets/atlantis-dunes.jpg";
import { ArrowLeft, Mountain, Wind, Waves, Zap } from "lucide-react";

const AdventureTrips = () => {
  const [showBooking, setShowBooking] = useState(false);

  const adventures = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Sandboarding",
      description: "Ride down massive dunes at Atlantis",
      duration: "Half day",
      price: "From R800"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Paragliding",
      description: "Tandem flights from Signal Hill",
      duration: "2-3 hours",
      price: "From R1,200"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Shark Cage Diving",
      description: "Face-to-face with great whites",
      duration: "Full day",
      price: "From R2,500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Abseiling",
      description: "Rappel down Table Mountain",
      duration: "Half day",
      price: "From R950"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Adventure Trips"
        subtitle="Adrenaline & Thrills"
        description="Push your limits with exciting activities that showcase Cape Town's wild side"
        backgroundImage={atlantisDunesImage}
        height="medium"
      />

      <section className="py-16 bg-pattern-waves">
        <div className="container mx-auto px-4">
          <Link to="/services">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Unleash Your Inner Adventurer</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cape Town is an adventure playground for thrill-seekers. From sandboarding down towering dunes to 
              coming face-to-face with great white sharks, we offer experiences that will get your heart racing 
              and create memories that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {adventures.map((adventure, index) => (
              <Card 
                key={adventure.title} 
                className="p-8 hover:shadow-2xl transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-primary">{adventure.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{adventure.title}</h3>
                    <p className="text-muted-foreground mb-4">{adventure.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{adventure.duration}</span>
                      <span className="font-bold text-primary">{adventure.price}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => setShowBooking(true)}
                  className="w-full mt-4"
                  variant="outline"
                >
                  Book This Adventure
                </Button>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-ocean text-primary-foreground">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-4xl font-bold mb-2">100%</h4>
                <p className="text-sm opacity-90">Safety Certified</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold mb-2">10+</h4>
                <p className="text-sm opacity-90">Adventure Activities</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold mb-2">5★</h4>
                <p className="text-sm opacity-90">Expert Guides</p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready for an Adventure?</h3>
            <p className="text-muted-foreground mb-6">All safety equipment provided • Professional instructors • Small groups</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setShowBooking(true)} size="lg">
                Book Now
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'm interested in adventure activities"), "_blank")}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog open={showBooking} onOpenChange={setShowBooking} defaultTour="adventure-trip" />
      <Footer />
    </div>
  );
};

export default AdventureTrips;
