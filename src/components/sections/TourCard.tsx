import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface TourCardProps {
  title: string;
  description: string;
  image: string;
  duration?: string;
  location?: string;
  groupSize?: string;
  price?: string;
  link?: string;
}

const TourCard = ({
  title,
  description,
  image,
  duration,
  location,
  groupSize,
  price,
  link,
}: TourCardProps) => {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${title} tour. Can you provide more information?`;
    window.open(
      `https://wa.me/27625803352?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {price && (
          <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold shadow-lg">
            {price}
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Tour Details */}
        <div className="space-y-2">
          {duration && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              <span>{duration}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <span>{location}</span>
            </div>
          )}
          {groupSize && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span>{groupSize}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-2">
        {link ? (
          <Button variant="default" className="flex-1" asChild>
            <Link to={link}>Learn More</Link>
          </Button>
        ) : (
          <Button variant="default" className="flex-1" onClick={handleWhatsApp}>
            Book Now
          </Button>
        )}
        <Button variant="outline" onClick={handleWhatsApp}>
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
