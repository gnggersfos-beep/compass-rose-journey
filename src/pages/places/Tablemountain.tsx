import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import campsBayImage from "@/assets/brent-ninaber-L6EP96_w1Fc-unsplash.jpg";
import { ArrowLeft, MapPin, Camera,Mountain , Compass } from "lucide-react";

const CampsBay = () => {
  const [showBooking, setShowBooking] = useState(false);

  const highlights = [
  {
    icon: <Mountain className="w-6 h-6" />,
    title: "Cable Car Rides",
    description: "Reach the summit effortlessly while enjoying sweeping views of Cape Town",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Panoramic Views",
    description: "Capture breathtaking city, coastline, and ocean vistas from the top",
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Hiking Trails",
    description: "Explore trails ranging from easy strolls to challenging climbs",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Unique Flora & Fauna",
    description: "Discover the mountain's rich biodiversity, including endemic fynbos",
  },
];

const localTips = [
  "Arrive early to avoid crowds, especially on weekends and holidays",
  "Bring sturdy shoes and a hat for hiking and sun protection",
  "Check the weather before visiting; conditions can change quickly on the mountain",
  "Use the cable car if you prefer a less strenuous way to reach the summit",
  "Take your camera – the panoramic views are truly spectacular",
];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={campsBayImage} alt="Table Mountain" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center text-primary-foreground text-center px-4">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Table Mountain</h1>
            <p className="text-xl md:text-2xl opacity-90">Cape Town's Most Glamorous Mountain</p>
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
                <h2 className="text-3xl font-bold mb-4">About Table Mountain</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Table Mountain is one of Cape Town's most iconic landmarks, towering above the city with its flat-topped summit 
  and dramatic cliffs. This natural wonder offers breathtaking panoramic views of the city, coastline, and surrounding 
  mountains, making it a must-visit destination for both locals and tourists.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Visitors can explore a variety of hiking trails ranging from easy walks to challenging climbs, or take the cable 
  car to the summit for an effortless journey. The mountain is home to unique flora and fauna, including endemic 
  fynbos and diverse birdlife, making it a paradise for nature enthusiasts and photographers alike.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                 Table Mountain attracts adventurers, hikers, and sightseers year-round. Whether you're capturing sunrise and 
  sunset views, spotting wildlife, or simply enjoying the fresh mountain air, it offers an unforgettable 
  experience overlooking Cape Town.
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
                <h3 className="text-xl font-bold mb-4">Visit Table Mountain</h3>
                <p className="mb-6 text-sm opacity-90">
                  Include Table Mountain in your Cape Town tour and experience one of the world's most beautiful mountain.
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
                  onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'd like to visit Table Mountain"), "_blank")}
                >
                  WhatsApp Us
                </Button>
              </Card>

              {/* Embedded Map */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.567890123456!2d18.409!3d-33.962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67f2abcd1234%3A0xabcdef1234567890!2sTable%20Mountain%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1696247461234"

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
            <h3 className="text-2xl font-bold mb-4">Explore Things to Do at Table Mountain</h3>
<p className="mb-6 opacity-90">Hiking, cable car rides, wildlife spotting, and panoramic city views</p>

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
