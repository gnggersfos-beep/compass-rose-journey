import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import campsBayImage from "@/assets/janan-OoW1DMDCV1Y-unsplash.jpg";
import { ArrowLeft, MapPin, Sun, UtensilsCrossed, Camera , Compass, Lamp} from "lucide-react";
const CampsBay = () => {
  const [showBooking, setShowBooking] = useState(false);

  const highlights = [
  {
    icon: <Lamp className="w-6 h-6" />,
    title: "Cape Point Lighthouse",
    description: "Visit the iconic lighthouse perched on the cliffs with panoramic views",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Scenic Views",
    description: "Capture breathtaking ocean vistas, cliffs, and dramatic landscapes",
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Nature Trails",
    description: "Explore hiking paths through fynbos, coastal cliffs, and wildlife areas",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Cape of Good Hope",
    description: "Stand at the famous landmark where the Atlantic and Indian Oceans meet",
  },
];

const localTips = [
  "Arrive early to avoid crowds, especially at the lighthouse and viewpoint",
  "Wear comfortable shoes for hiking and exploring the cliffs",
  "Bring a windbreaker – Cape Point can be very windy even on sunny days",
  "Keep an eye out for baboons and local wildlife, but do not feed them",
  "Take the scenic drive along the Cape Point route and stop for photo opportunities",
];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
     <div className="relative h-[60vh] overflow-hidden">
  <img src={campsBayImage} alt="Cape Point" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-overlay" />
  <div className="absolute inset-0 flex items-center justify-center text-primary-foreground text-center px-4">
    <div className="max-w-3xl animate-fade-up">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Cape Point</h1>
      <p className="text-xl md:text-2xl opacity-90">Where the Atlantic and Indian Oceans Meet</p>
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
                <h2 className="text-3xl font-bold mb-4">About Cape Point</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cape Point is a dramatic promontory at the southeastern tip of the Cape Peninsula, where the Atlantic and 
        Indian Oceans converge. Famous for its rugged cliffs, sweeping ocean views, and rich biodiversity, 
        Cape Point is part of the Table Mountain National Park and offers a truly spectacular natural setting.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The area features scenic hiking trails, iconic lighthouses, and lookout points that provide breathtaking 
        panoramas of the coastline. Visitors can spot wildlife, explore the fynbos vegetation, and experience 
        one of South Africa’s most photographed natural landmarks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cape Point attracts both nature enthusiasts and adventure seekers from around the world. With dramatic 
        cliffs, powerful ocean waves, and rich flora and fauna, it offers an unforgettable experience for all 
        who visit this iconic destination.
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
                <h3 className="text-xl font-bold mb-4">Visit Cape Point</h3>
                <p className="mb-6 text-sm opacity-90">
                  Include Cape Point in your Cape Town tour and experience one of the world's most beautiful beaches.
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
                  onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'd like to visit Cape Point"), "_blank")}
                >
                  WhatsApp Us
                </Button>
              </Card>

              {/* Embedded Map */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.1234567890123!2d18.498!3d-34.356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdbeb3c7f6f123%3A0xabcdef1234567890!2sCape%20Point%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1696247461234"
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
            <h3 className="text-2xl font-bold mb-4">Explore Things to Do in Cape Point</h3>
            <p className="mb-6 opacity-90">Hiking, wildlife spotting, lighthouse visits, and scenic ocean views</p>
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
