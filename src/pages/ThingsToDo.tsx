import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TourCard from "@/components/sections/TourCard";
import campsBayImage from "@/assets/tyzana-craig-cTcQIscaOrc-unsplash.jpg";
import capePointImage from "@/assets/pexels-dkeats-34090435 (1).jpg";
import winelandsImage from "@/assets/nenad-gataric-2GZvGZh4dJc-unsplash.jpg";
import atlantisDunesImage from "@/assets/atlantis-dunes.jpg";
import heroThingsImage from "@/assets/things.jpg";
import hikingImage from "@/assets/hiking.jpg";
import ghanaImage from "@/assets/devon-janse-van-rensburg-RAAXmcYdoIg-unsplash.jpg";

const ThingsToDo = () => {
  const activities = [
    {
      title: "Beach Days",
      description: "Relax on pristine beaches like Camps Bay, Clifton, and Muizenberg. Perfect for sunbathing, surfing, or sunset watching.",
      image: campsBayImage,
      duration: "Flexible",
      location: "Various beaches",
      groupSize: "Any group size",
    },
    {
      title: "Hiking Adventures",
      description: "Conquer Table Mountain, Lion's Head, or Chapman's Peak. Experience breathtaking views and diverse trails for all fitness levels.",
      image: hikingImage,
      duration: "2-8 hours",
      location: "Cape Peninsula",
      groupSize: "Small groups",
    },
    {
      title: "Wine Tasting Tours",
      description: "Explore world-class wine estates in Stellenbosch, Franschhoek, and Constantia. Savor exceptional wines and gourmet pairings.",
      image: winelandsImage,
      duration: "Full day",
      location: "Winelands",
      groupSize: "2-12 people",
      price: "From R1,400",
    },
    {
      title: "Adventure Sports",
      description: "Sandboarding on Atlantis Dunes, shark cage diving, paragliding from Signal Hill, or kitesurfing in Langebaan.",
      image: atlantisDunesImage,
      duration: "Half to full day",
      location: "Various locations",
      groupSize: "Small groups",
      price: "From R800",
    },
    {
      title: "Wildlife Encounters",
      description: "Visit penguin colonies at Boulders Beach, go whale watching (seasonal), or explore wildlife sanctuaries and nature reserves.",
      image: capePointImage,
      duration: "Half to full day",
      location: "False Bay & surrounds",
      groupSize: "Any group size",
    },
    {
      title: "Cultural Experiences",
      description: "Explore Township tours, Bo-Kaap heritage walks, Robben Island Museum, and local markets showcasing Cape Town's diverse culture.",
      image: ghanaImage,
      duration: "2-6 hours",
      location: "City & townships",
      groupSize: "Small to medium groups",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Things To Do in Cape Town"
        subtitle="Adventures for Everyone"
        description="From adrenaline-pumping activities to relaxing beach days, discover endless possibilities in the Mother City"
        backgroundImage={heroThingsImage}
        height="medium"
      />

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Activities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you seek adventure, relaxation, or cultural immersion, Cape Town has something for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TourCard {...activity} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect activity based on your interests
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Beaches",
              "Hiking",
              "Wine Tours",
              "Adventure",
              "Wildlife",
              "Culture",
              "Shopping",
              "Nightlife",
              "Food Tours",
              "Photography",
              "Water Sports",
              "Scenic Drives"
            ].map((category, index) => (
              <button
                key={category}
                className="p-6 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent(`I'm interested in ${category} activities`), "_blank")}
              >
                <span className="font-semibold text-sm">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThingsToDo;
