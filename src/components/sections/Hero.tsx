import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  showSecondaryButton?: boolean;
  height?: "full" | "large" | "medium";
  overlay?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryButtonText = "Book Now",
  primaryButtonAction,
  showSecondaryButton = true,
  height = "full",
  overlay = true,
}: HeroProps) => {
  const heightClasses = {
    full: "h-screen",
    large: "h-[600px] md:h-[700px]",
    medium: "h-[400px] md:h-[500px]",
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/27625803352", "_blank");
  };

  const scrollToContent = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-overlay" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        {subtitle && (
          <p className="text-sm md:text-base font-medium uppercase tracking-wider mb-4 opacity-90 animate-fade-in">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="hero"
            size="lg"
            onClick={primaryButtonAction || handleWhatsApp}
          >
            {primaryButtonText}
          </Button>
          
          {showSecondaryButton && (
            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsApp}
              className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </Button>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {height === "full" && (
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      )}
    </section>
  );
};

export default Hero;
