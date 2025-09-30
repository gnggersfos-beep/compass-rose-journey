import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Coffee, Car } from "lucide-react";
import campsBayImage from "@/assets/pexels-taryn-elliott-7108804.jpg";
import vaWaterfrontImage from "@/assets/pexels-magda-ehlers-pexels-32585933.jpg";
import boKaapImage from "@/assets/pexels-eric-seddon-1664101-29024925.jpg";
import heroStayImage from "@/assets/stay.jpg";
import oberImage from "@/assets/CPT_Observatory-5.jpg";
import conImage from "@/assets/unnamed.jpg";
import seaPointImage from "@/assets/final.jpg";

const AreasToStay = () => {
  const accommodations = [
    {
      category: "Luxury",
      description: "Five-star hotels and exclusive resorts with world-class amenities",
      areas: [
        {
          name: "Camps Bay",
          description: "Beachfront luxury with mountain views and upscale dining",
          image: campsBayImage,
          priceRange: "R3,500 - R15,000 per night",
          amenities: ["Ocean views", "Infinity pools", "Spa services", "Fine dining"],
        },
        {
          name: "V&A Waterfront",
          description: "Premium hotels in the heart of Cape Town's entertainment hub",
          image: vaWaterfrontImage,
          priceRange: "R2,500 - R12,000 per night",
          amenities: ["Harbor views", "Shopping access", "Restaurants", "Marina"],
        },
      ],
    },
    {
      category: "Boutique",
      description: "Unique, character-filled accommodations with personalized service",
      areas: [
        {
          name: "City Bowl",
          description: "Historic guesthouses and boutique hotels in vibrant neighborhoods",
          image: boKaapImage,
          priceRange: "R1,200 - R4,000 per night",
          amenities: ["Local character", "Personalized service", "Central location", "Unique design"],
        },
        {
          name: "Constantia",
          description: "Wine estate lodges and manor houses in leafy suburbs",
          image: conImage,
          priceRange: "R1,500 - R5,000 per night",
          amenities: ["Garden settings", "Wine estates", "Peaceful atmosphere", "Gourmet dining"],
        },
      ],
    },
    {
      category: "Budget-Friendly",
      description: "Comfortable and affordable options without compromising on quality",
      areas: [
        {
          name: "Observatory",
          description: "Trendy neighborhood with affordable guesthouses and B&Bs",
          image: oberImage,
          priceRange: "R400 - R1,200 per night",
          amenities: ["Bohemian vibe", "Local cafés", "Good transport", "Budget-friendly"],
        },
        {
          name: "Sea Point",
          description: "Coastal suburb with apartments and hostels near the promenade",
          image: seaPointImage,
          priceRange: "R350 - R1,000 per night",
          amenities: ["Sea views", "Promenade access", "Restaurants", "Affordable dining"],
        },
      ],
    },
  ];

  const handleContactForBooking = (areaName: string) => {
    const message = `Hi! I'm looking for accommodation recommendations in ${areaName}. Can you help?`;
    window.open(
      `https://wa.me/27625803352?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Where To Stay"
        subtitle="Accommodation in Cape Town"
        description="From luxury resorts to cozy guesthouses, find the perfect place to rest after your Cape Town adventures"
        backgroundImage={heroStayImage}
        height="medium"
        primaryButtonText="Get Recommendations"
      />

      {/* Introduction */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl font-bold mb-6">Your Home Away from Home</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cape Town offers an incredible range of accommodation options to suit every budget and preference. 
              Whether you're seeking beachfront luxury, boutique charm, or budget-friendly comfort, we can help you 
              find the perfect place to stay. Our local expertise means we know the best properties in each area and 
              can secure special rates for our guests.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Categories */}
      {accommodations.map((category, catIndex) => (
        <section
          key={category.category}
          className={`py-20 ${catIndex % 2 === 0 ? "" : "bg-muted/30"}`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-flex items-center gap-2 mb-4">
                {[...Array(category.category === "Luxury" ? 5 : category.category === "Boutique" ? 4 : 3)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.category}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.areas.map((area, areaIndex) => (
                <Card
                  key={area.name}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${areaIndex * 0.1}s` }}
                >
                  <div className="relative h-64">
                    <img
                      src={area.image}
                      alt={area.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                      {area.priceRange}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold">{area.name}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {area.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {area.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleContactForBooking(area.name)}
                      className="w-full"
                    >
                      Get Recommendations
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-20 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Also Arrange</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Let us handle all the details of your Cape Town stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Car, title: "Airport Transfers", description: "Seamless pickup and drop-off" },
              { icon: Coffee, title: "Welcome Packages", description: "Local treats on arrival" },
              { icon: Wifi, title: "Local SIM Cards", description: "Stay connected throughout your trip" },
              { icon: MapPin, title: "Area Guides", description: "Insider tips for your neighborhood" },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="p-6 text-center bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="w-10 h-10 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm opacity-90">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasToStay;
