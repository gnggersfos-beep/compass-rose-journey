import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import heroGalImage from "@/assets/boa.jpg";
import campsBayImage from "@/assets/44.jpg";
import boKaapImage from "@/assets/loyiso-mali-5oYjOEsK0iw-unsplash.jpg";
import vaWaterfrontImage from "@/assets/waterfront.jpg";
import capePointImage from "@/assets/pexels-jeferson-eduardo-araujo-1128466699-28120661.jpg";
import winelandsImage from "@/assets/Wines.jpg";
import atlantisDunesImage from "@/assets/atlantis-dunes.jpg";
import campBayImage from "@/assets/timo-wielink-jvOFvRzVCx4-unsplash.jpg";
import abImage from "@/assets/janan-OoW1DMDCV1Y-unsplash.jpg";
import acImage from "@/assets/pexels-fotios-photos-34027070.jpg";
import adImage from "@/assets/ad.jpg";
import aeImage from "@/assets/ae.jpg";
import afImage from "@/assets/af.jpg";
import agImage from "@/assets/ag.jpg";
import printImage from "@/assets/print.jpg";
import pexelsImage from "@/assets/pexels-dorota-semla-1929451-8912045.jpg";
import tomImage from "@/assets/thomas-bennie-B21WLsX6a5c-unsplash.jpg";
import ajImage from "@/assets/pexels-jayscape-artist-12344305.jpg";
import desImage from "@/assets/pexels-naimbic-2030037.jpg";
import thingsImage from "@/assets/things.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; category: string } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Landscapes", "Beaches", "Wine Country", "Adventures", "City Life"];

  const images = [
    {
      src: heroGalImage,
      title: "Table Mountain at Sunset",
      category: "Landscapes",
    },
    {
      src: campsBayImage,
      title: "Camps Bay Beach",
      category: "Beaches",
    },
    {
      src: boKaapImage,
      title: "Colorful Bo-Kaap",
      category: "City Life",
    },
    {
      src: vaWaterfrontImage,
      title: "V&A Waterfront",
      category: "City Life",
    },
    {
      src: capePointImage,
      title: "Cape Point Lighthouse",
      category: "Landscapes",
    },
    {
      src: winelandsImage,
      title: "Cape Winelands",
      category: "Wine Country",
    },
    {
      src: atlantisDunesImage,
      title: "Atlantis Dunes Adventure",
      category: "Adventures",
    },
    {
      src: campBayImage,
      title: "Coastal Paradise",
      category: "Beaches",
    },
    {
      src: heroGalImage,
      title: "Mountain Majesty",
      category: "Landscapes",
    },
    {
      src: abImage,
      title: "Sun-Kissed Shores",
      category: "Beaches",
    },
    {
      src: acImage,
      title: "Vibrant Streets", 
      category: "City Life",
    },
    {
      src: adImage,
      title: "Harbor Lights",
      category: "City Life",
    },
    {
      src: aeImage,
      title: "Ocean's Edge",
      category: "Landscapes", 
    }, 
    {
      src: afImage,
      title: "Vineyard Views",
      category: "Wine Country",
    },
    {
      src: agImage,

      title: "Dune Adventures",
      category: "Adventures",
    },
      {
    src: printImage,
    title: "Wine Tasting",
    category: "Wine Country",
  },
  {
    src: pexelsImage,
    title: "Bo-Kaap Colors",
    category: "City Life",
  },
  {
    src: tomImage,
    title: "Mountain Hike",
    category: "Adventures",
  },
  {
    src: ajImage,
    title: "Lighthouse at Cape Point",
    category: "Landscapes",
  },
  {src 
    : desImage,
    title: "Cape Town Apartments",
    category: "City Life",
  },
  {src : thingsImage,
    title: "Adventure Activities",
    category: "Adventures",
  }
  ];

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        title="Photo Gallery"
        subtitle="Visual Journey"
        description="Experience the beauty of Cape Town through our lens - from stunning landscapes to vibrant city scenes"
        backgroundImage={heroGalImage}
        height="medium"
        showSecondaryButton={false}
        primaryButtonText="Plan Your Visit"
      />

      {/* Category Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={`${image.title}-${index}`}
                className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-primary-foreground">
                      <p className="text-sm font-medium opacity-80 mb-1">{image.category}</p>
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl p-0 overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-overlay p-6 text-primary-foreground">
                <p className="text-sm opacity-80 mb-1">{selectedImage.category}</p>
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Create Your Own Memories
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            These are just glimpses of what awaits you. Book your Cape Town adventure and capture your own unforgettable moments.
          </p>
          <button
            onClick={() => window.open("https://wa.me/27625803352", "_blank")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary-foreground text-primary hover:opacity-90 shadow-xl hover:shadow-2xl hover:scale-105 text-base font-semibold h-14 rounded-lg px-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Book Your Experience
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
