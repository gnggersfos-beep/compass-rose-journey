import { useEffect, useState } from "react";

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Partner logos (placeholder - would be real partner logos)
  const partners = [
    { name: "Cape Town Tourism", logo: "🏛️" },
    { name: "SA Tourism", logo: "🇿🇦" },
    { name: "Table Mountain", logo: "⛰️" },
    { name: "V&A Waterfront", logo: "⚓" },
    { name: "Cape Winelands", logo: "🍷" },
    { name: "Two Oceans Aquarium", logo: "🐠" },
    { name: "Robben Island", logo: "🏝️" },
    { name: "Kirstenbosch Gardens", logo: "🌺" },
  ];

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
                className="flex-shrink-0 w-32 h-24 flex flex-col items-center justify-center bg-card rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-110 cursor-pointer"
              >
                <span className="text-4xl mb-2">{partner.logo}</span>
                <p className="text-xs text-center font-medium text-muted-foreground">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;
