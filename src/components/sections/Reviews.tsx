import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    name: "Sarah Mitchell",
    initials: "SM",
    review:
      "Absolutely amazing experience! Our guide was knowledgeable and made the tour unforgettable. The attention to detail and personalized service exceeded all expectations.",
    tour: "Cape Point Adventure",
    rating: 5,
    location: "London, UK",
  },
  {
    name: "James Kowalski",
    initials: "JK",
    review:
      "The wine tour was exceptional. Beautiful views, great company, and world-class wines. A perfect day in the Cape Winelands!",
    tour: "Winelands Experience",
    rating: 5,
    location: "Toronto, Canada",
  },
  {
    name: "Amelia Rodriguez",
    initials: "AR",
    review:
      "Such a thrilling day at Atlantis Dunes. Perfect mix of adventure and breathtaking scenery! The sandboarding was incredible.",
    tour: "Atlantis Dunes Safari",
    rating: 5,
    location: "Barcelona, Spain",
  },
  {
    name: "Michael Chen",
    initials: "MC",
    review:
      "Cape Town is stunning! This team made the whole trip smooth and exciting. Highly recommend for first-time visitors!",
    tour: "City Highlights Tour",
    rating: 5,
    location: "Singapore",
  },
  {
    name: "Emma Thompson",
    initials: "ET",
    review:
      "The Table Mountain hike was breathtaking! Our guide was patient and informative. Best views I've ever seen in my life.",
    tour: "Table Mountain Trek",
    rating: 5,
    location: "Sydney, Australia",
  },
  {
    name: "David Okonkwo",
    initials: "DO",
    review:
      "Professional service from start to finish. The airport transfer was seamless and the tour of Bo-Kaap was colorful and enlightening.",
    tour: "City & Culture Tour",
    rating: 5,
    location: "Lagos, Nigeria",
  },
  {
    name: "Sophie Laurent",
    initials: "SL",
    review:
      "An unforgettable experience exploring the Cape Peninsula. The penguins at Boulders Beach were adorable! Merci beaucoup!",
    tour: "Peninsula Full Day Tour",
    rating: 5,
    location: "Paris, France",
  },
  {
    name: "Carlos Silva",
    initials: "CS",
    review:
      "Fantastic wine tasting experience in Stellenbosch. The scenery was magnificent and the wines were world-class. Will definitely return!",
    tour: "Stellenbosch Wine Tour",
    rating: 5,
    location: "São Paulo, Brazil",
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-pattern-waves relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-ocean mb-6">
            <Quote className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-ocean bg-clip-text text-transparent">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of travelers who've discovered Cape Town with us
          </p>
        </div>

        {/* Reviews Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-secondary fill-secondary"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-foreground/90 mb-6 flex-grow leading-relaxed">
                      "{review.review}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-semibold text-sm">
                          {review.initials}
                        </span>
                      </div>
                      
                      {/* Details */}
                      <div className="flex-grow text-left">
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.tour}</p>
                        <p className="text-xs text-muted-foreground/70">{review.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static translate-y-0 bg-card hover:bg-gradient-ocean hover:text-primary-foreground border-border shadow-md" />
            <CarouselNext className="relative static translate-y-0 bg-card hover:bg-gradient-ocean hover:text-primary-foreground border-border shadow-md" />
          </div>
        </Carousel>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center animate-fade-up">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Travelers</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Tour Options</div>
          </div>
          <div className="text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl md:text-4xl font-bold text-success mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
