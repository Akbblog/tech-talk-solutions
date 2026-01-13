'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '01254 961661',
    href: 'tel:01254961661',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@techtalksolution.co',
    href: 'mailto:info@techtalksolution.co',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '1A Edmundson Street, Blackburn BB2 1HL, UK',
    href: 'https://maps.google.com/?q=1A+Edmundson+Street+Blackburn+BB2+1HL',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Monday - Friday, 9am - 6pm',
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
            Let&apos;s{' '}
            <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Ready to transform your business? Get in touch and we&apos;ll show you how 
            we can help you save money and grow revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card variant="glass" className="p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-primary-red/20 text-primary-red flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Message Sent!</h3>
                <p className="text-gray mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-cloud mb-6">Send us a message</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-cloud/80 text-sm mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cloud placeholder-cloud/40 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-cloud/80 text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-cloud placeholder-cloud/40 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="john@restaurant.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-dark/80 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-light-gray border border-gray-200 text-dark placeholder-gray focus:outline-none focus:border-primary-red transition-colors"
                      placeholder="07123 456789"
                    />
                  </div>
                  <div>
                    <label className="block text-dark/80 text-sm mb-2">Business Name</label>
                    <input
                      type="text"
                      value={formState.business}
                      onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-light-gray border border-gray-200 text-dark placeholder-gray focus:outline-none focus:border-primary-red transition-colors"
                      placeholder="Your Restaurant"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-dark/80 text-sm mb-2">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-light-gray border border-gray-200 text-dark placeholder-gray focus:outline-none focus:border-primary-red transition-colors resize-none"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card variant="glass" className="p-8">
              <h2 className="text-2xl font-bold text-dark mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-red/20 text-primary-red flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray text-sm">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-dark hover:text-primary-red transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-dark">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card variant="glass" className="p-8">
              <h3 className="text-xl font-bold text-dark mb-4">Our Location</h3>
              <div className="aspect-video rounded-xl bg-light-gray flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-primary-red mx-auto mb-2" />
                  <p className="text-gray">1A Edmundson Street</p>
                  <p className="text-gray">Blackburn BB2 1HL, UK</p>
                </div>
              </div>
            </Card>

            {/* Quick Call CTA */}
            <Card className="p-8 cta-gradient">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Prefer to Talk?</h3>
                <p className="text-white/80 mb-4">Give us a call and speak to one of our team</p>
                <a
                  href="tel:01254961661"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-deep-navy font-semibold hover:bg-cloud transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  01254 961661
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
