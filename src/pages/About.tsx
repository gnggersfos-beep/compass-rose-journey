import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-table-mountain.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Passion for Travel",
      description: "We live and breathe Cape Town. Our team's passion for this incredible city shines through in every tour we create.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Local Expertise",
      description: "Born and raised in Cape Town, we know the hidden gems, best times to visit, and authentic experiences.",
    },
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: "Quality Service",
      description: "From luxury vehicles to professional guides, we ensure every detail of your experience exceeds expectations.",
    },
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: "Sustainability",
      description: "We're committed to responsible tourism that benefits local communities and preserves Cape Town's natural beauty.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="About Compass Rose Travel"
        subtitle="Our Story"
        description="Sharing the magic of Cape Town with travelers from around the world"
        backgroundImage={heroImage}
        height="medium"
        showSecondaryButton={false}
        primaryButtonText="Contact Us"
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-foreground">The Journey Began with a Vision</h2>
              
              <p className="text-muted-foreground mb-6">
                Compass Rose Travel was founded on a simple but powerful idea: everyone deserves to experience the breathtaking beauty and rich culture of Cape Town in an authentic, meaningful way. What started as a passion project by a group of local Cape Town enthusiasts has grown into a premier travel company dedicated to creating unforgettable experiences.
              </p>

              <p className="text-muted-foreground mb-6">
                Our name, Compass Rose, represents our guiding philosophy. Just as the compass rose on ancient maps helped explorers navigate uncharted waters, we guide our guests through Cape Town's wonders, ensuring they discover not just the famous landmarks, but also the hidden treasures that make this city truly special.
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">Why Cape Town?</h3>
              
              <p className="text-muted-foreground mb-6">
                Cape Town isn't just our workplace—it's our home, our heritage, and our heart. From the majestic Table Mountain standing guard over the city to the pristine beaches where the Atlantic and Indian Oceans meet, from the colorful streets of Bo-Kaap to the world-renowned winelands, every corner of this region tells a story.
              </p>

              <p className="text-muted-foreground mb-6">
                We've walked these paths countless times, but each journey still fills us with wonder. This enthusiasm is what we bring to every tour, every interaction, and every recommendation we make. When you travel with Compass Rose, you're not just getting a guide—you're gaining a local friend who genuinely wants you to fall in love with Cape Town as much as we have.
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">Our Commitment to You</h3>
              
              <p className="text-muted-foreground mb-6">
                We understand that travel is about more than seeing sights—it's about creating memories, forming connections, and broadening perspectives. That's why we go beyond the standard tourist experience. Our tours are carefully crafted to balance must-see attractions with authentic local experiences, giving you a true taste of Cape Town life.
              </p>

              <p className="text-muted-foreground mb-6">
                Whether you're watching the sunset from Chapman's Peak, tasting award-winning wines in Stellenbosch, or exploring the penguin colony at Boulders Beach, we ensure every moment is special. Our small group sizes mean personalized attention, flexibility to adapt to your interests, and the opportunity to ask questions and engage deeply with your surroundings.
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">Community and Sustainability</h3>
              
              <p className="text-muted-foreground mb-6">
                As proud Cape Town locals, we believe in giving back to our community and protecting the natural beauty that draws visitors from around the world. We partner with local businesses, from family-owned restaurants to small craft workshops, ensuring tourism benefits the people who call this place home.
              </p>

              <p className="text-muted-foreground mb-6">
                Environmental sustainability is at the core of what we do. We practice responsible tourism by minimizing our ecological footprint, respecting wildlife, and educating our guests about conservation efforts. We're actively involved in beach clean-ups, support local conservation projects, and continually seek ways to make our operations more sustainable.
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">Meet Our Team</h3>
              
              <p className="text-muted-foreground mb-6">
                Our guides aren't just knowledgeable—they're storytellers, photographers, naturalists, and historians who bring Cape Town's past and present to life. Each team member has been carefully selected not only for their expertise but for their genuine love of sharing Cape Town with others.
              </p>

              <p className="text-muted-foreground mb-6">
                Many of our guides have grown up in the very neighborhoods we visit, giving them insights no guidebook can provide. They know which café makes the best coffee, where to find the most Instagrammable sunset views, and the stories behind the street names. This local knowledge transforms a good tour into an extraordinary one.
              </p>

              <h3 className="text-2xl font-bold mt-12 mb-6 text-foreground">Your Adventure Awaits</h3>
              
              <p className="text-muted-foreground mb-6">
                Whether you're a first-time visitor wanting to see the highlights or a returning guest looking to explore deeper, we're here to make your Cape Town experience exceptional. We offer flexibility in our tours, can accommodate special requests, and are always happy to customize itineraries to match your interests and schedule.
              </p>

              <p className="text-muted-foreground">
                From the moment you contact us to the day you reluctantly head to the airport, we're committed to providing service that's professional, friendly, and genuinely caring. We want you to leave Cape Town not just with beautiful photos, but with stories to tell, memories to treasure, and a desire to return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
