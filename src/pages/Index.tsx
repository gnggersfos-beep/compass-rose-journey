import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TourCard from "@/components/sections/TourCard";
import PartnerCarousel from "@/components/sections/PartnerCarousel";
import FloatingBookButton from "@/components/booking/FloatingBookButton";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-table-mountain.jpg";
import heroAboutImage from "@/assets/abouts.jpg";
import capePointImage from "@/assets/cape-point.jpg";
import winelandsImage from "@/assets/Wines.jpg";
import atlantisDunesImage from "@/assets/atlantis-dunes.jpg";
import campsBayImage from "@/assets/campss.jpg";
import boKaapImage from "@/assets/bo-kaap.jpg";
import vaWaterfrontImage from "@/assets/Waterfront.jpg";
import { MapPin, Calendar, Users, Compass } from "lucide-react";

const Index = () => {
  const featuredTours = [
    {
      title: "Cape Point Adventure",
      description: "Explore the dramatic cliffs where two oceans meet, visit the lighthouse, and spot wildlife at the Cape of Good Hope.",
      image: capePointImage,
      duration: "Full Day (8-9 hours)",
      location: "Cape Peninsula",
      groupSize: "Small groups (2-8 people)",
      price: "From R1,200",
    },
    {
      title: "Winelands Experience",
      description: "Savor world-class wines at picturesque estates in Stellenbosch and Franschhoek with stunning mountain views.",
      image: winelandsImage,
      duration: "Full Day (8 hours)",
      location: "Stellenbosch & Franschhoek",
      groupSize: "Private & Group tours",
      price: "From R1,400",
    },
    {
      title: "Atlantis Dunes Safari",
      description: "An adrenaline-pumping adventure through massive sand dunes with stunning ocean views and thrilling 4x4 rides.",
      image: atlantisDunesImage,
      duration: "Half Day (4 hours)",
      location: "West Coast",
      groupSize: "Groups up to 12",
      price: "From R900",
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

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to plan your perfect Cape Town experience. Our team is ready to help you create unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/27625803352" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-success text-success-foreground hover:bg-success/90 shadow-md hover:shadow-lg hover:scale-105 h-14 rounded-lg px-10 text-base">
                  Book Your Tour
                </button>
              </a>
              <a href="/contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground h-14 rounded-lg px-10 text-base">
                  Get In Touch
                </button>
              </a>
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
