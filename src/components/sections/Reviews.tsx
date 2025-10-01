import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah L.",
    review:
      "Absolutely amazing experience! Our guide was knowledgeable and made the tour unforgettable.",
    tour: "Cape Point Adventure",
    rating: 5,
  },
  {
    name: "James K.",
    review:
      "The wine tour was exceptional. Beautiful views, great company, and world-class wines.",
    tour: "Winelands Experience",
    rating: 4,
  },
  {
    name: "Amelia R.",
    review:
      "Such a thrilling day at Atlantis Dunes. Perfect mix of adventure and breathtaking scenery!",
    tour: "Atlantis Dunes Safari",
    rating: 5,
  },
  {
    name: "Michael B.",
    review:
      "Cape Town is stunning! This team made the whole trip smooth and exciting. Highly recommend!",
    tour: "City Highlights Tour",
    rating: 5,
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000); // slides every 5s
    return () => clearInterval(interval);
  }, []);

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-20 bg-muted/10 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from travelers who experienced Cape Town with us
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="absolute left-0 md:-left-12 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Review Card */}
          <Card className="max-w-xl w-full p-8 shadow-md hover:shadow-lg transition-all duration-500 animate-fade-up text-center">
            <p className="text-lg mb-6 italic">&ldquo;{reviews[current].review}&rdquo;</p>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < reviews[current].rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <h3 className="font-semibold">{reviews[current].name}</h3>
            <p className="text-sm text-muted-foreground">{reviews[current].tour}</p>
          </Card>

          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="absolute right-0 md:-right-12 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
