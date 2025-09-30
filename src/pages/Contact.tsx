import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import campsBayImage from "@/assets/camps-bay.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    tourInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `New Inquiry from ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Tour Interest: ${formData.tourInterest}
Message: ${formData.message}`;
    
    window.open(
      `https://wa.me/27625803352?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    
    toast.success("Redirecting to WhatsApp...");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Get In Touch"
        subtitle="Contact Us"
        description="We're here to help plan your perfect Cape Town adventure"
        backgroundImage={campsBayImage}
        height="medium"
        showSecondaryButton={false}
        primaryButtonText="Call Us Now"
        primaryButtonAction={() => window.location.href = "tel:+27625803352"}
      />

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <Card className="p-6 hover:shadow-xl transition-all animate-fade-up">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+27625803352"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +27 62 580 3352
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:info@compassrosetravel.co.za"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@compassrosetravel.co.za
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Frizita Business Complex<br />
                    Cape Town, 7441
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 animate-fade-up">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 123 456 789"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="date">Preferred Date of Visit</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="tourInterest">Tour of Interest</Label>
                  <Input
                    id="tourInterest"
                    name="tourInterest"
                    value={formData.tourInterest}
                    onChange={handleChange}
                    placeholder="e.g., Cape Point, Winelands, Custom Tour"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans and preferences..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="flex-1">
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </Button>
                  <Button type="button" variant="outline" onClick={() => window.location.href = "tel:+27625803352"}>
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                </div>
              </form>
            </Card>

            {/* Map & Hours */}
            <div className="space-y-6">
              <Card className="p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm">
                    <strong>24/7 WhatsApp Support Available</strong>
                    <br />
                    We're always here to answer your travel questions!
                  </p>
                </div>
              </Card>

              {/* Google Map */}
              <Card className="overflow-hidden animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105834.64018733838!2d18.424041995312503!3d-33.9248685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Compass Rose Travel Location"
                ></iframe>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
