import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import campsBayImage from "@/assets/camps-bay.jpg";
import boKaapImage from "@/assets/bo-kaap.jpg";
import vaWaterfrontImage from "@/assets/va-waterfront.jpg";
import capePointImage from "@/assets/cape-point.jpg";
import winelandsImage from "@/assets/winelands.jpg";
import heroImage from "@/assets/hero-table-mountain.jpg";

const Places = () => {
  const areas = [
    {
      title: "Camps Bay",
      description: "One of Cape Town's most glamorous beach suburbs, featuring pristine white sand beaches backed by the spectacular Twelve Apostles mountain range.",
      image: campsBayImage,
      highlights: [
        "Stunning beach promenade",
        "World-class restaurants and cafés",
        "Dramatic mountain views",
        "Vibrant nightlife",
      ],
    },
    {
      title: "Bo-Kaap",
      description: "The colorful heart of Cape Town's Cape Malay community, known for its brightly painted houses, cobblestone streets, and rich cultural heritage.",
      image: boKaapImage,
      highlights: [
        "Instagram-worthy colorful houses",
        "Bo-Kaap Museum",
        "Traditional Cape Malay cuisine",
        "Historic mosques",
      ],
    },
    {
      title: "V&A Waterfront",
      description: "Cape Town's premier shopping and entertainment destination, combining historic harbor atmosphere with modern amenities and attractions.",
      image: vaWaterfrontImage,
      highlights: [
        "Over 450 retail outlets",
        "Two Oceans Aquarium",
        "Waterfront dining experiences",
        "Zeitz MOCAA art museum",
      ],
    },
    {
      title: "Cape Point",
      description: "Where two oceans meet at the dramatic southwestern tip of Africa, offering breathtaking coastal scenery and abundant wildlife.",
      image: capePointImage,
      highlights: [
        "Iconic lighthouse views",
        "Spectacular hiking trails",
        "Penguin colonies at Boulders Beach",
        "Cape of Good Hope",
      ],
    },
    {
      title: "Cape Winelands",
      description: "A picturesque region of rolling vineyards, historic estates, and world-renowned wines, just an hour from Cape Town.",
      image: winelandsImage,
      highlights: [
        "Award-winning wine tastings",
        "Cape Dutch architecture",
        "Gourmet dining experiences",
        "Stunning mountain scenery",
      ],
    },
  ];

  const handleBookNow = (placeName: string) => {
    const message = `Hi! I'd like to learn more about visiting ${placeName}. Can you provide information about tours?`;
    window.open(
      `https://wa.me/27625803352?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Explore Cape Town"
        subtitle="Discover Amazing Places"
        description="From pristine beaches to vibrant neighborhoods, discover the diverse attractions that make Cape Town unforgettable"
        backgroundImage={heroImage}
        height="medium"
      />

      {/* Places Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each area of Cape Town has its own unique character and attractions
            </p>
          </div>

          <div className="space-y-12">
            {areas.map((area, index) => (
              <Card
                key={area.title}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-up ${
                  index % 2 === 0 ? "" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  index % 2 === 0 ? "" : "lg:grid-flow-dense"
                }`}>
                  {/* Image */}
                  <div
                    className={`relative h-80 lg:h-auto overflow-hidden ${
                      index % 2 === 0 ? "" : "lg:col-start-2"
                    }`}
                  >
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4">{area.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold mb-3 text-primary">Highlights:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {area.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <span className="text-primary mr-2">✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => handleBookNow(area.title)}>
                        Book a Tour
                      </Button>
                      <Button variant="outline" onClick={() => handleBookNow(area.title)}>
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sunset text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Ready to Explore These Amazing Places?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Let us create a custom itinerary that takes you to all the must-see destinations in Cape Town
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open("https://wa.me/27625803352", "_blank")}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Plan Your Trip
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Places;
