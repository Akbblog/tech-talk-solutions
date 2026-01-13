import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import { Container } from '@/components/ui';

const footerLinks = {
  services: [
    { name: 'Call Answering', href: '/services/call-answering' },
    { name: 'Email & SMS Marketing', href: '/services/marketing' },
    { name: 'Customer Diversion', href: '/services/customer-diversion' },
    { name: 'Social Media', href: '/services/social-media' },
    { name: 'EPOS Integration', href: '/services/epos-integration' },
    { name: 'Design & Print', href: '/services/design-print' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-dark to-gray-900 text-white">
      {/* Main Footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Tech Talk icon"
                    width={44}
                    height={44}
                    className="h-11 w-auto"
                  />
                </div>

                <div className="hidden sm:flex flex-col leading-tight">
                  <span className="text-base font-extrabold text-white">Tech Talk</span>
                  <span className="text-xs font-semibold text-primary-red -mt-1">Solution</span>
                </div>
              </div>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Maximize profitability, reduce operational costs, and grow independently 
              with our comprehensive suite of digital services tailored for restaurants.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:01254961661"
                className="flex items-center gap-3 text-white/60 hover:text-primary-red transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>01254 961661</span>
              </a>
              <a
                href="mailto:info@techtalksolution.co"
                className="flex items-center gap-3 text-white/60 hover:text-primary-red transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@techtalksolution.co</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>1A Edmundson Street, Blackburn BB2 1HL, UK</span>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Clock className="w-4 h-4" />
                <span>Monday - Friday, 9am - 6pm</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Tech Talk Solution. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary-red hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
