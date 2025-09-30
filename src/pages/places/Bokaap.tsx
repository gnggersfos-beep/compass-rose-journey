import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingDialog from "@/components/booking/BookingDialog";
import boKaapImage from "@/assets/madiba-de-african-inspiration-XrNKe8VLMRo-unsplash.jpg";
import { ArrowLeft, MapPin, Sun, UtensilsCrossed, Camera, Palette, Landmark, BookOpen } from "lucide-react";

const CampsBay = () => {
  const [showBooking, setShowBooking] = useState(false);

 const highlights = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Colorful Streets",
    description: "Walk among vibrant houses and cobblestone lanes",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Cape Malay Cuisine",
    description: "Taste authentic dishes and traditional spices",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "Historic Mosques",
    description: "Discover landmarks like the Auwal Mosque",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Living Heritage",
    description: "Explore museums and hear community stories",
  },
];

  const localTips = [
  "Visit in the morning or late afternoon for the best light on the colorful houses",
  "Join a guided walking tour to learn about the area’s rich history and culture",
  "Respect residents’ privacy when taking photos in the neighborhood",
  "Try local Cape Malay dishes from family-run eateries or cooking classes",
  "Stop by the Bo-Kaap Museum for deeper insight into the community’s heritage",
];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={boKaapImage} alt="Camps Bay" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center text-primary-foreground text-center px-4">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Camps Bay</h1>
            <p className="text-xl md:text-2xl opacity-90">Cape Town's Most Glamorous Beach Suburb</p>
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
                <h2 className="text-3xl font-bold mb-4">About Bo Kaap</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bo-Kaap is one of Cape Town’s most vibrant and historic neighborhoods, known for its brightly painted houses, cobblestone streets, and rich cultural heritage. Nestled against the slopes of Signal Hill, this area is a living testament to resilience, community, and tradition.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Originally established in the 1760s, Bo-Kaap was home to freed slaves, artisans, and immigrants brought to the Cape from Malaysia, Indonesia, and other parts of Africa and Asia. Over the centuries, these communities blended their traditions, giving rise to a unique Cape Malay culture that continues to shape the area today.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The neighborhood is famous for its colorful houses, each one painted in bold hues that represent freedom, individuality, and joy. Walking through Bo-Kaap, you’ll encounter the sounds of the athaan (call to prayer) from centuries-old mosques, the aroma of spices drifting from family kitchens, and the warmth of a community that has preserved its identity through generations.

Bo-Kaap is more than a tourist destination—it is a living, breathing heritage site. It embodies history, faith, and culture, while also representing the ongoing fight to preserve traditions in the face of modern challenges. From its delicious Cape Malay cuisine to its festivals, music, and stories, Bo-Kaap stands as a symbol of Cape Town’s multicultural spirit.
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
                <h3 className="text-xl font-bold mb-4">Visit Bo-Kaap</h3>
                <p className="mb-6 text-sm opacity-90">
                  Include Bo-Kaap in your Cape Town tour and experience one of the world's most beautiful neighborhoods.
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
                  onClick={() => window.open("https://wa.me/27625803352?text=" + encodeURIComponent("I'd like to visit Camps Bay"), "_blank")}
                >
                  WhatsApp Us
                </Button>
              </Card>

              {/* Embedded Map */}
   <Card className="p-6">
  <h3 className="text-xl font-bold mb-4">Location</h3>
  <div className="aspect-video rounded-lg overflow-hidden">
    <iframe
      title="Bo-Kaap, Cape Town — interactive map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.445099813261!2d18.409!3d-33.9183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67619b7dc24d%3A0x9af294ee8b5d0df!2sBo-Kaap%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1696247461234!5m2!1sen!2sza"
      className="w-full h-full border-0"
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
            <h3 className="text-2xl font-bold mb-4">Explore Things to Do in Bo Kaap</h3>
            <p className="mb-6 opacity-90">Swimming, dining, beach walks, and sunset watching</p>
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
