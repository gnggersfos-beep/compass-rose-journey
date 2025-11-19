import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TourCard from "@/components/sections/TourCard";
import PartnerCarousel from "@/components/sections/PartnerCarousel";
import FloatingBookButton from "@/components/booking/FloatingBookButton";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-table-mountain.jpg";
import capePointImage from "@/assets/pexels-jayscape-artist-12344305.jpg";
import winelandsImage from "@/assets/Wines.jpg";
import atlantisDunesImage from "@/assets/atlantis-dunes.jpg";
import campsBayImage from "@/assets/campss.jpg";
import boKaapImage from "@/assets/bo-kaap.jpg";
import vaWaterfrontImage from "@/assets/print.jpg";
import { MapPin, Calendar, Users, Compass, ArrowRight } from "lucide-react";
import Reviews from "@/components/sections/Reviews";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const featuredTours = [
    {
      title: "Cape Point Adventure",
      description: "Explore the dramatic cliffs where two oceans meet, visit the lighthouse, and spot wildlife at the Cape of Good Hope.",
      image: capePointImage,
      duration: "Full Day (8-9 hours)",
      location: "Cape Peninsula",
      groupSize: "Small groups (2-8 people)",
    },
    {
      title: "Winelands Experience",
      description: "Savor world-class wines at picturesque estates in Stellenbosch and Franschhoek with stunning mountain views.",
      image: winelandsImage,
      duration: "Full Day (8 hours)",
      location: "Stellenbosch & Franschhoek",
      groupSize: "Private & Group tours",
    },
    {
      title: "Atlantis Dunes Safari",
      description: "An adrenaline-pumping adventure through massive sand dunes with stunning ocean views and thrilling 4x4 rides.",
      image: atlantisDunesImage,
      duration: "Half Day (4 hours)",
      location: "West Coast",
      groupSize: "Groups up to 12",
    },
  ];

  const areas = [
    {
      title: "Camps Bay",
      description: "Pristine beaches backed by the Twelve Apostles",
      image: campsBayImage,
    },
    {
      title: "Bo-Kaap",
      description: "Colorful streets and Cape Malay heritage",
      image: boKaapImage,
    },
    {
      title: "Franschhoek",
      description: "Shopping, dining, and entertainment hub",
      image: vaWaterfrontImage,
    },
  ];

  const services = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Custom Tours",
      description: "Tailor-made experiences designed around your interests and schedule.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Group Packages",
      description: "Special rates for families, friends, and corporate groups.",
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Expert Guides",
      description: "Local knowledge and passion for Cape Town's hidden gems.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Airport Transfers",
      description: "Comfortable, reliable transfers to and from Cape Town International.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Hero
        title="Discover Cape Town"
        subtitle="Unforgettable Adventures Await"
        description="Experience the beauty of the Mother City with expertly guided tours, personalized itineraries, and exceptional service."
        backgroundImage={heroImage}
      />

      {/* Featured Tours Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tours</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular adventures and create memories that last a lifetime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <div
                key={tour.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TourCard {...tour} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Cape Town Section */}
      <section className="py-20 bg-pattern-fynbos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Cape Town</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the vibrant neighborhoods and iconic landmarks that make Cape Town unique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <a
                key={area.title}
                href={`/places/${area.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
              >
                <Card
                  className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                      <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                      <p className="text-sm opacity-90">{area.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              We're committed to providing exceptional experiences with personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* CTA Section - Large & Bold (Preserved) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-scale-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-foreground">
              Ready to Start <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Your Adventure?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              Contact us today to plan your perfect Cape Town experience. Our team is ready to help you create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/27781275522" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-success hover:bg-success/90 text-white">
                  Book Your Tour Now
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-10 text-lg rounded-full border-2 hover:bg-primary/5"
                onClick={() => navigate('/contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PartnerCarousel />
      <FloatingBookButton />
      <Footer />
    </div>
  );
};

export default Index;
