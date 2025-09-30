import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import campsBayImage from "@/assets/print.jpg";
import { ArrowLeft, Landmark, Wine, UtensilsCrossed, Camera } from "lucide-react";

const CampsBay = () => {
  const [showBooking, setShowBooking] = useState(false);

const highlights = [
  {
    icon: <Wine className="w-6 h-6" />,
    title: "Vineyards",
    description: "Explore world-class vineyards and enjoy wine tastings",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Fine Dining",
    description: "Savor gourmet meals at award-winning restaurants",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Scenic Views",
    description: "Capture the stunning mountain and valley landscapes",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "Huguenot Heritage",
    description: "Discover historic sites celebrating Franschhoek’s French settlers",
  },
];

const localTips = [
  "Visit during harvest season for the most scenic vineyards and wine tastings",
  "Book wine estates and restaurants in advance, especially on weekends",
  "The valley can be cool in the mornings and evenings – bring a light jacket",
  "Parking can be limited in town – consider arriving early or using local transport",
  "Take the Franschhoek Wine Tram or scenic walks to explore vineyards and galleries",
];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
<div className="relative h-[60vh] overflow-hidden">
  <img src={campsBayImage} alt="Franschhoek" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-overlay" />
  <div className="absolute inset-0 flex items-center justify-center text-primary-foreground text-center px-4">
    <div className="max-w-3xl animate-fade-up">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Franschhoek</h1>
      <p className="text-xl md:text-2xl opacity-90">The Heart of South Africa’s Wine Country</p>
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
                <h2 className="text-3xl font-bold mb-4">About Franschhoek</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Franschhoek is a picturesque town in South Africa's Cape Winelands, renowned for its world-class vineyards, 
        charming streets, and French Huguenot heritage. Nestled in a valley surrounded by dramatic mountains, 
        Franschhoek offers a serene escape with rolling vineyards, boutique galleries, and gourmet restaurants.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Known as the “food and wine capital” of South Africa, the town combines culinary excellence with 
        breathtaking scenery. Visitors can explore historic wine estates, enjoy tasting experiences, and 
        stroll through art-filled streets that celebrate the town’s rich cultural heritage.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Franschhoek attracts both locals and international travelers seeking sophistication, relaxation, 
        and authentic experiences. From vineyard tours and fine dining to cultural sites and scenic walks, 
        the town offers an unforgettable blend of history, flavor, and natural beauty.
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
                <h3 className="text-xl font-bold mb-4">Visit Franschhoek</h3>
                <p className="mb-6 text-sm opacity-90">
                  Include Franschhoek in your Cape Town tour and experience one of the world's most beautiful locations.
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
                  onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'd like to visit Franschhoek"), "_blank")}
                >
                  WhatsApp Us
                </Button>
              </Card>

              {/* Embedded Map */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.345678901234!2d19.1167!3d-33.909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4c78f26f77ad%3A0xa0760cb5e56f5270!2sFranschhoek%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1696247461234"

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
            <h3 className="text-2xl font-bold mb-4">Explore Things to Do in Franschhoek</h3>
            <p className="mb-6 opacity-90">Wine tastings, gourmet dining, vineyard walks, and art gallery visits</p>

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
