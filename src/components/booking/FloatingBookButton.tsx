import { useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";

const FloatingBookButton = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/27625803352", "_blank");
  };

  return (
    <>
      {/* Main floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Options that appear on hover */}
        {showOptions && (
          <div className="flex flex-col gap-2 animate-fade-in">
            <Button
              onClick={() => setShowBooking(true)}
              className="bg-primary text-primary-foreground hover:bg-primary-light shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
              size="lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Now
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="bg-success text-success-foreground hover:bg-success/90 shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        )}

        {/* Toggle button */}
        <button
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
          onClick={() => setShowOptions(!showOptions)}
          className="w-16 h-16 rounded-full text-primary-foreground shadow-2xl hover:shadow-3xl hover:scale-110 transition-all flex items-center justify-center animate-float"
          aria-label="Contact options"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>

      {/* Booking Dialog */}
      <BookingDialog open={showBooking} onOpenChange={setShowBooking} />
    </>
  );
};

export default FloatingBookButton;
