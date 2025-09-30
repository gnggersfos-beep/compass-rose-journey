import { useEffect, useState } from "react";
import Booking from "@/assets/Booking Asset 3.png";
import Tripad from "@/assets/Trip AdvisorAsset 2.png"
import CapeTravel from "@/assets/Capetown Asset 4.png"
import { Image } from "@radix-ui/react-avatar";
const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Replace with actual image URLs of partner logos
  const partners = [
    { logo: Booking},
    { logo: Tripad },
    { logo: CapeTravel },
    { logo: Booking},
    { logo: Tripad },
    { logo: CapeTravel },
     { logo: Booking},
    { logo: Tripad },
    { logo: CapeTravel },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
          Trusted Partners & Affiliates
        </h3>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-12 items-center justify-center"
            style={{
              transform: `translateX(-${currentIndex * 150}px)`,
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-24 flex items-center justify-center bg-card rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-110 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt="Partner Logo"
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
