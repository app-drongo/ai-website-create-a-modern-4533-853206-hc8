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
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      ],
      specs: { beds: 3, baths: 2, sqft: 2400 },
      price: '$485/night',
      amenities: ['Ocean View', 'Private Balcony', 'Pool Access'],
    },
    {
      id: 2,
      title: 'Beachfront Paradise Suite',
      location: 'Mid-Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 2, sqft: 1850 },
      price: '$395/night',
      amenities: ['Direct Beach Access', 'Gourmet Kitchen', 'Spa Bathroom'],
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
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      ],
      specs: { beds: 2, baths: 1, sqft: 1650 },
      price: '$325/night',
      amenities: ['Historic Building', 'Rooftop Terrace', 'Premium Linens'],
    },
    {
      id: 4,
      title: 'Sunset Bay Waterfront',
      location: 'Bay Harbor Islands, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      ],
      specs: { beds: 4, baths: 3, sqft: 2800 },
      price: '$625/night',
      amenities: ['Bay Views', 'Private Dock', "Chef's Kitchen"],
    },
    {
      id: 5,
      title: 'Modern Coastal Haven',
      location: 'North Beach, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      ],
      specs: { beds: 1, baths: 1, sqft: 1200 },
      price: '$275/night',
      amenities: ['Smart Home', 'Fitness Center', 'Beach Chairs'],
    },
    {
      id: 6,
      title: 'Tropical Oasis Penthouse',
      location: 'Fisher Island, Miami Beach',
      mainImage:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop',
      ],
      specs: { beds: 3, baths: 3, sqft: 3200 },
      price: '$750/night',
      amenities: ['Private Island', 'Concierge Service', 'Infinity Pool'],
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
            Discover our exclusive portfolio of premium beachfront apartments, each offering
            unparalleled ocean views and sophisticated coastal living
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay with Gallery Count */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute bottom-4 right-4 gap-2 bg-background/90 backdrop-blur-sm"
                  >
                    <Grid3x3 className="size-4" />
                    {property.images.length} Photos
                  </Button>
                </div>

                {/* Quick View Button */}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-sm"
                >
                  <Expand className="size-4" />
                </Button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    <span className="font-semibold text-sm">{property.price}</span>
                  </div>
                </div>

                {/* Ocean View Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-accent/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Waves className="size-3" />
                    <span className="text-xs font-medium">Ocean View</span>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-1">{property.title}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <MapPin className="size-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Specs */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Bed className="size-4" />
                    <span>{property.specs.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="size-4" />
                    <span>{property.specs.baths} baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="size-4" />
                    <span>{property.specs.sqft} sqft</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {property.amenities.slice(0, 2).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 2 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{property.amenities.length - 2} more
                      </span>
                    )}
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
                        alt={`${property.title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-card border border-muted rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Experience Miami Beach Luxury
            </h3>
            <p className="text-muted-foreground mb-6">
              Each property includes personalized concierge service, premium amenities, and our
              signature welcome package
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Now
              </Button>
              <Button size="lg" variant="outline">
                Schedule Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
