import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import campsBayImage from "@/assets/camps-bay.jpg";
import { ArrowLeft, MapPin, Sun, UtensilsCrossed, Camera } from "lucide-react";

const CampsBay = () => {
  const [showBooking, setShowBooking] = useState(false);

  const highlights = [
    { icon: <Sun className="w-6 h-6" />, title: "Pristine Beach", description: "Crystal-clear waters and white sand backed by majestic mountains" },
    { icon: <UtensilsCrossed className="w-6 h-6" />, title: "Dining Scene", description: "World-class restaurants along the vibrant beach promenade" },
    { icon: <Camera className="w-6 h-6" />, title: "Sunset Views", description: "Spectacular sunsets over the Atlantic Ocean" },
    { icon: <MapPin className="w-6 h-6" />, title: "Twelve Apostles", description: "Dramatic mountain backdrop for unforgettable photos" },
  ];

  const localTips = [
    "Visit during sunset for the most spectacular views and photo opportunities",
    "Book restaurants in advance during peak season (December-February)",
    "The beach can get windy - bring a windbreaker even on sunny days",
    "Parking can be challenging - arrive early or use Uber/metered parking",
    "Try the coastal walk to Clifton beaches for stunning ocean views",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={campsBayImage} alt="Camps Bay" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center text-primary-foreground text-center px-4">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Camps Bay</h1>
            <p className="text-xl md:text-2xl opacity-90">Cape Town's Most Glamorous Beach Suburb</p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-pattern-waves">
        <div className="container mx-auto px-4">
          <Link to="/places">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Places
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Camps Bay</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camps Bay is one of Cape Town's most exclusive and beautiful beach suburbs, nestled between the 
                  dramatic Twelve Apostles mountain range and the sparkling Atlantic Ocean. This stunning location 
                  offers pristine white sand beaches, crystal-clear waters, and a vibrant promenade lined with 
                  trendy restaurants, cafés, and bars.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The beach is perfectly framed by the iconic peaks of the Twelve Apostles, creating one of the most 
                  photographed landscapes in South Africa. Whether you're looking to sunbathe, swim, or simply watch 
                  the spectacular sunset while sipping cocktails at a beachfront venue, Camps Bay offers an 
                  unmatched coastal experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The area attracts both locals and international visitors with its sophisticated yet relaxed 
                  atmosphere. During summer months, the beach comes alive with sunbathers, swimmers, and beach 
                  volleyball players, while the promenade buzzes with energy well into the evening.
                </p>
              </div>

              <Card className="p-6 bg-muted/30">
                <h3 className="text-xl font-bold mb-4">Local Insider Tips</h3>
                <ul className="space-y-3">
                  {localTips.map((tip, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-2 mt-1">💡</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Experience Highlights</h3>
                <div className="space-y-4">
                  {highlights.map((highlight) => (
                    <div key={highlight.title} className="flex items-start">
                      <div className="text-primary mr-3 mt-1">{highlight.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-ocean text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Visit Camps Bay</h3>
                <p className="mb-6 text-sm opacity-90">
                  Include Camps Bay in your Cape Town tour and experience one of the world's most beautiful beaches.
                </p>
                <Button 
                  onClick={() => setShowBooking(true)} 
                  variant="secondary"
                  className="w-full mb-3"
                >
                  Book This Experience
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'd like to visit Camps Bay"), "_blank")}
                >
                  WhatsApp Us
                </Button>
              </Card>

              {/* Embedded Map */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8346799999997!2d18.377!3d-33.951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc675d49e7e1f9%3A0x26a431b2035c1479!2sCamps%20Bay%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Related Activities */}
          <Card className="p-8 bg-gradient-sunset text-primary-foreground text-center">
            <h3 className="text-2xl font-bold mb-4">Explore Things to Do in Camps Bay</h3>
            <p className="mb-6 opacity-90">Swimming, dining, beach walks, and sunset watching</p>
            <Link to="/things-to-do">
              <Button variant="secondary" size="lg">
                View All Activities
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <BookingDialog open={showBooking} onOpenChange={setShowBooking} defaultTour="custom-tour" />
      <Footer />
    </div>
  );
};

export default CampsBay;
