import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTour?: string;
}

const BookingDialog = ({ open, onOpenChange, defaultTour }: BookingDialogProps) => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourType: defaultTour || "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Booking Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Tour: ${formData.tourType}
Date: ${date ? format(date, "PPP") : "Not specified"}
Notes: ${formData.notes}`;

    // Open WhatsApp
    window.open(`https://wa.me/27625803352?text=${encodeURIComponent(message)}`, "_blank");
    
    // Show success message
    toast({
      title: "Booking Request Sent!",
      description: "We'll get back to you shortly via WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", tourType: "", notes: "" });
    setDate(undefined);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Experience</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get back to you shortly to confirm your booking
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+27 123 456 789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tour">Tour/Service Type *</Label>
            <Select
              value={formData.tourType}
              onValueChange={(value) => setFormData({ ...formData, tourType: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a tour" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cape-point">Cape Point Adventure</SelectItem>
                <SelectItem value="winelands">Winelands Tour</SelectItem>
                <SelectItem value="atlantis-dunes">Atlantis Dunes Safari</SelectItem>
                <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
                <SelectItem value="custom-tour">Custom Tour</SelectItem>
                <SelectItem value="adventure-trip">Adventure Trip</SelectItem>
                <SelectItem value="group-package">Group Package</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any special requirements or questions?"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Send Booking Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
