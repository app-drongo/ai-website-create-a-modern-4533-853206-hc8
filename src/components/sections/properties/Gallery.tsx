import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
  Grid3x3,
  Bed,
  Bath,
  Square,
  MapPin,
  Wifi,
  Car,
  Waves,
} from 'lucide-react';

export default function Gallery() {
  const galleries = [
    {
      id: 1,
      title: 'Ocean Breeze Penthouse',
      location: 'South Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
      ],
      specs: { beds: 3, baths: 2, sqft: 2100 },
      price: '$485/night',
      amenities: ['Ocean View', 'Private Balcony', 'Pool Access'],
    },
    {
      id: 2,
      title: 'Beachfront Paradise Suite',
      location: 'Mid-Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 1650 },
      price: '$395/night',
      amenities: ['Direct Beach Access', 'Concierge', 'Spa Services'],
    },
    {
      id: 3,
      title: 'Art Deco Luxury Retreat',
      location: 'Collins Avenue, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 1, sqft: 1400 },
      price: '$325/night',
      amenities: ['Historic Building', 'Rooftop Terrace', 'Premium Location'],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Miami Beach Luxury Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked beachfront apartments through stunning visual galleries
            showcasing every detail of your perfect coastal escape
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-muted"
            >
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-background/95 hover:bg-background text-foreground"
                  >
                    <Grid3x3 className="size-4" />
                    {property.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/95 hover:bg-background text-foreground"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-lg">
                    <span className="font-semibold text-sm">{property.price}</span>
                  </div>
                </div>

                {/* Beach Access Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-accent/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Waves className="size-3 text-accent-foreground" />
                    <span className="text-xs font-medium text-accent-foreground">Beach Access</span>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-2">{property.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="size-4 text-primary" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Specs */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="size-4 text-primary" />
                    <span>{property.specs.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="size-4 text-primary" />
                    <span>{property.specs.baths} baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="size-4 text-primary" />
                    <span>{property.specs.sqft} sqft</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {property.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnail Preview */}
                <div className="grid grid-cols-4 gap-1">
                  {property.images.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-muted"
                    >
                      <img
                        src={img}
                        alt={`${property.title} view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Explore All Miami Beach Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
