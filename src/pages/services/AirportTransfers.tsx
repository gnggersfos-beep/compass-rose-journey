import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import heroImage from "@/assets/hero-table-mountain.jpg";
import { ArrowLeft, Clock, Users, Shield, Wifi } from "lucide-react";

const AirportTransfers = () => {
  const [showBooking, setShowBooking] = useState(false);

  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", description: "Round-the-clock service for early flights and late arrivals" },
    { icon: <Users className="w-6 h-6" />, title: "Professional Drivers", description: "Experienced, friendly, and knowledgeable local drivers" },
    { icon: <Shield className="w-6 h-6" />, title: "Flight Tracking", description: "We monitor your flight and adjust pickup times automatically" },
    { icon: <Wifi className="w-6 h-6" />, title: "Luxury Vehicles", description: "Clean, comfortable cars with WiFi and bottled water" },
  ];

  const vehicles = [
    { name: "Sedan", passengers: "1-3", luggage: "2-3 bags", price: "From R450" },
    { name: "SUV", passengers: "1-6", luggage: "4-6 bags", price: "From R650" },
    { name: "Mini Van", passengers: "7-12", luggage: "8-12 bags", price: "From R950" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Airport Transfers"
        subtitle="Reliable & Comfortable"
        description="Professional transportation between Cape Town International Airport and your destination"
        backgroundImage={heroImage}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Stress-Free Airport Transfers</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Start your Cape Town adventure the right way with our premium airport transfer service. We provide reliable, 
                comfortable transportation from Cape Town International Airport to any destination in the greater Cape Town area.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our professional drivers will meet you at arrivals with a personalized sign, assist with your luggage, 
                and ensure a smooth journey to your accommodation. We track all incoming flights, so even if your flight 
                is delayed, we'll be there waiting for you.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">What's Included:</h3>
                <ul className="space-y-2">
                  {[
                    "Meet & greet at arrivals",
                    "Flight tracking service",
                    "Luggage assistance",
                    "Complimentary bottled water",
                    "Free WiFi in vehicle",
                    "Fixed price - no hidden fees"
                  ].map((item) => (
                    <li key={item} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button onClick={() => setShowBooking(true)} size="lg" className="mr-4">
                Book Transfer
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'd like to book an airport transfer"), "_blank")}
              >
                WhatsApp Us
              </Button>
            </div>

            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Vehicle Options</h3>
                <div className="space-y-4">
                  {vehicles.map((vehicle) => (
                    <div key={vehicle.name} className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{vehicle.name}</h4>
                        <p className="text-sm text-muted-foreground">{vehicle.passengers} passengers • {vehicle.luggage}</p>
                      </div>
                      <span className="font-bold text-primary">{vehicle.price}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <Card key={feature.title} className="p-6 text-center">
                    <div className="flex justify-center mb-3 text-primary">{feature.icon}</div>
                    <h4 className="font-semibold mb-2 text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog open={showBooking} onOpenChange={setShowBooking} defaultTour="airport-transfer" />
      <Footer />
    </div>
  );
};

export default AirportTransfers;
