'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Waves } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Reservations',
      description: 'Book your Miami Beach getaway',
      contact: 'reservations@coastalretreats.com',
      action: 'Send Inquiry',
    },
    {
      icon: Phone,
      title: 'Concierge Hotline',
      description: '24/7 guest support',
      contact: '+1 (305) 555-BEACH',
      action: 'Call Now',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      description: 'Instant booking assistance',
      contact: 'Available during stay',
      action: 'Message Us',
    },
  ];

  const properties = [
    {
      name: 'Ocean Vista Penthouse',
      address: '1455 Ocean Drive, South Beach',
      type: 'Beachfront • 3BR/2BA',
    },
    {
      name: 'Sunset Terrace Suite',
      address: '2201 Collins Avenue, Mid-Beach',
      type: 'Ocean View • 2BR/2BA',
    },
    {
      name: 'Art Deco Loft',
      address: '1020 Washington Avenue, South Beach',
      type: 'Historic District • 1BR/1BA',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Waves className="size-4 mr-2" />
            Booking Inquiry
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Reserve Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Miami Beach Escape
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to experience luxury beachfront living? Our concierge team is here to help you
            find the perfect coastal retreat for your Miami Beach vacation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Booking Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                Request Availability
              </CardTitle>
              <CardDescription>
                Tell us about your ideal Miami Beach stay and we'll check availability across our
                luxury properties.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Martinez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Preferred Property
                  </label>
                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Any available property</option>
                    <option value="ocean-vista">Ocean Vista Penthouse</option>
                    <option value="sunset-terrace">Sunset Terrace Suite</option>
                    <option value="art-deco">Art Deco Loft</option>
                    <option value="beachfront-only">Beachfront properties only</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Booking Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Check-in: March 15, 2024&#10;Check-out: March 22, 2024&#10;Guests: 4 adults&#10;Special requests: Ocean view preferred, celebrating anniversary"
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Check Availability
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="size-5 text-primary" />
                Concierge Services
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Featured Properties */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Our Miami Beach Properties
              </h3>
              <div className="space-y-3">
                {properties.map((property, index) => (
                  <div
                    key={index}
                    className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{property.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{property.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {property.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Concierge Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Concierge Availability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Booking Inquiries</span>
                    <span>Daily 8:00 AM - 10:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guest Support</span>
                    <span>24/7 During Your Stay</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Line</span>
                    <span>Always Available</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Waves className="size-4" />
                    Same-day bookings available for last-minute beach getaways
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
