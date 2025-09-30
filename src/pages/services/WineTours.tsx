import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import winelandsImage from "@/assets/winelands.jpg";
import { ArrowLeft, Wine, UtensilsCrossed, Camera, MapPin } from "lucide-react";

const WineTours = () => {
  const [showBooking, setShowBooking] = useState(false);

  const estates = [
    { name: "Stellenbosch", description: "Historic wine estates and mountain views", highlights: "MCC tastings, cellar tours" },
    { name: "Franschhoek", description: "French heritage and gourmet cuisine", highlights: "Wine tram, cheese pairings" },
    { name: "Constantia", description: "Oldest wine region in South Africa", highlights: "Sweet wines, ocean views" },
    { name: "Paarl", description: "Diverse wine styles and beautiful landscapes", highlights: "Red blends, brandy" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Cape Winelands Tours"
        subtitle="World-Class Wine Experiences"
        description="Explore legendary wine estates, taste exceptional vintages, and savor gourmet cuisine"
        backgroundImage={winelandsImage}
        height="medium"
      />

      <section className="py-16 bg-pattern-protea">
        <div className="container mx-auto px-4">
          <Link to="/services">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">A Journey Through the Winelands</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discover South Africa's world-renowned wine regions, just an hour from Cape Town. The Cape Winelands 
                offer a perfect blend of spectacular scenery, exceptional wines, and rich history dating back over 
                350 years.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our wine tours take you to carefully selected estates known for their quality, hospitality, and 
                stunning settings. Whether you're a wine connoisseur or a casual enthusiast, our expert guides will 
                ensure a memorable and educational experience.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Wine className="w-6 h-6" />, title: "Wine Tastings", description: "5-7 estates per day" },
                  { icon: <UtensilsCrossed className="w-6 h-6" />, title: "Gourmet Lunch", description: "Farm-to-table cuisine" },
                  { icon: <Camera className="w-6 h-6" />, title: "Photo Stops", description: "Scenic vineyard views" },
                  { icon: <MapPin className="w-6 h-6" />, title: "Multiple Regions", description: "Stellenbosch & more" },
                ].map((feature) => (
                  <Card key={feature.title} className="p-4 text-center">
                    <div className="flex justify-center mb-2 text-primary">{feature.icon}</div>
                    <h4 className="font-semibold mb-1 text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>

              <div className="flex gap-4">
                <Button onClick={() => setShowBooking(true)} size="lg">
                  Book Wine Tour
                </Button>
                <Button 
                  variant="whatsapp" 
                  size="lg"
                  onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'd like to book a wine tour"), "_blank")}
                >
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Wine Regions</h3>
                <div className="space-y-4">
                  {estates.map((estate) => (
                    <div key={estate.name} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <h4 className="font-bold mb-2">{estate.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{estate.description}</p>
                      <p className="text-xs text-primary">✓ {estate.highlights}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-sunset text-primary-foreground">
                <h3 className="text-xl font-bold mb-4">Tour Includes</h3>
                <ul className="space-y-2">
                  {[
                    "Hotel pickup and drop-off",
                    "Professional wine guide",
                    "Wine tastings at 4-5 estates",
                    "Gourmet lunch with wine pairing",
                    "Cellar tours and vineyard walks",
                    "Bottled water throughout the day"
                  ].map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <span className="mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-lg font-bold">From R1,400 per person</p>
                  <p className="text-sm opacity-90">Full day tour (8-9 hours)</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog open={showBooking} onOpenChange={setShowBooking} defaultTour="winelands" />
      <Footer />
    </div>
  );
};

export default WineTours;
