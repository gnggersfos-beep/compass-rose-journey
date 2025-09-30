import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import capePointImage from "@/assets/cape-point.jpg";
import { ArrowLeft, MapPin, Clock, Users, Heart } from "lucide-react";
import customImage from "@/assets/asher-pardey-KQqzXXS4mug-unsplash.jpg";

const CustomTours = () => {
  const [showBooking, setShowBooking] = useState(false);

  const tourIdeas = [
    { title: "Romantic Sunset Tour", description: "Champagne, scenic drives, and sunset at Camps Bay", duration: "4 hours" },
    { title: "Photography Tour", description: "Visit the most Instagram-worthy spots with perfect lighting", duration: "6 hours" },
    { title: "Foodie Experience", description: "Local markets, wine farms, and gourmet restaurants", duration: "Full day" },
    { title: "Adventure Combo", description: "Mix hiking, beaches, and adrenaline activities", duration: "Full day" },
    { title: "Cultural Heritage", description: "Townships, museums, and Cape Malay cuisine", duration: "Half day" },
    { title: "Family Fun Day", description: "Kid-friendly attractions and activities", duration: "Full day" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Custom Tours"
        subtitle="Your Journey, Your Way"
        description="Personalized experiences designed around your interests, pace, and preferences"
        backgroundImage={customImage}
        height="medium"
      />

      <section className="py-16 bg-pattern-fynbos">
        <div className="container mx-auto px-4">
          <Link to="/services">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Create Your Perfect Cape Town Experience</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every traveler is unique, and so should be their Cape Town experience. We work with you to craft 
              a personalized itinerary that matches your interests, fitness level, and time constraints. Whether 
              you're a wine enthusiast, adventure seeker, history buff, or photography lover, we'll design the 
              perfect tour just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tourIdeas.map((tour, index) => (
              <Card key={tour.title} className="p-6 hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-3">{tour.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                <div className="flex items-center text-sm text-primary">
                  <Clock className="w-4 h-4 mr-2" />
                  {tour.duration}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-ocean text-primary-foreground mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: <MapPin className="w-8 h-8" />, title: "Any Destination", description: "From city to countryside" },
                { icon: <Clock className="w-8 h-8" />, title: "Flexible Duration", description: "Half day to multi-day tours" },
                { icon: <Users className="w-8 h-8" />, title: "Private or Group", description: "Solo travelers to large groups" },
                { icon: <Heart className="w-8 h-8" />, title: "Your Interests", description: "Tailored to what you love" },
              ].map((feature) => (
                <div key={feature.title}>
                  <div className="flex justify-center mb-3">{feature.icon}</div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Custom Tour?</h3>
            <p className="text-muted-foreground mb-6">Contact us to discuss your ideas and get a personalized quote</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setShowBooking(true)} size="lg">
                Request Custom Tour
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'd like to plan a custom tour"), "_blank")}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog open={showBooking} onOpenChange={setShowBooking} defaultTour="custom-tour" />
      <Footer />
    </div>
  );
};

export default CustomTours;
