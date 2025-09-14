import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Destinations',
      links: [
        { name: 'South Beach Properties', href: '/south-beach' },
        { name: 'Mid Beach Rentals', href: '/mid-beach' },
        { name: 'North Beach Stays', href: '/north-beach' },
        { name: 'Ocean View Suites', href: '/ocean-view' },
        { name: 'Beachfront Penthouses', href: '/penthouses' },
        { name: 'All Properties', href: '/properties' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Concierge Services', href: '/concierge' },
        { name: 'Private Chef', href: '/chef' },
        { name: 'Yacht Charters', href: '/yacht' },
        { name: 'Airport Transfers', href: '/transfers' },
        { name: 'Event Planning', href: '/events' },
        { name: 'Spa Services', href: '/spa' },
      ],
    },
    {
      title: 'Experience',
      links: [
        { name: 'Guest Reviews', href: '/reviews' },
        { name: 'Local Attractions', href: '/attractions' },
        { name: 'Dining Guide', href: '/dining' },
        { name: 'Beach Activities', href: '/activities' },
        { name: 'Nightlife Guide', href: '/nightlife' },
        { name: 'Travel Tips', href: '/tips' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Booking Policy', href: '/booking-policy' },
        { name: 'Cancellation Terms', href: '/cancellation' },
        { name: 'Guest Guidelines', href: '/guidelines' },
        { name: 'Property Care', href: '/property-care' },
        { name: 'Emergency Contact', href: '/emergency' },
        { name: 'Travel Insurance', href: '/insurance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/coastalretreats' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/coastalretreats' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/coastalretreats' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/coastalretreats' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/coastalretreats' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">CR</span>
                </div>
                <span className="font-bold text-xl">Coastal Retreats</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Discover luxury beachfront living in Miami Beach. Our curated collection of 6
                premium apartments offers personalized service and unforgettable ocean experiences
                for discerning travelers.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">reservations@coastalretreats.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (305) 892-7463</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Miami Beach, Florida 33139</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Exclusive Beach Offers</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email for special rates"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Receive insider access to seasonal rates and Miami Beach events. Unsubscribe
                anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Coastal Retreats. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> for Miami Beach
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow our journey:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/property-map"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Property Map
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/guest-support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              24/7 Guest Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
