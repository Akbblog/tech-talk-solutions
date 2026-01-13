import { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Mail,
  Users,
  Share2,
  Monitor,
  Palette,
  ArrowRight,
} from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Our Services | TechTalk Solutions',
  description: 'Complete digital solutions for restaurants and takeaways. From 24/7 call answering to marketing, we help you save on fees and grow revenue.',
};

const services = [
  {
    icon: Phone,
    title: 'Call Answering & Support',
    description: 'Never miss an order with 24/7 professional call handling. We recover lost revenue while you focus on cooking.',
    features: ['24/7 Management', 'Personalized Support', 'Revenue Recovery', 'Order Processing', 'Customer Service'],
    href: '/services/call-answering',
    color: 'electric-blue',
  },
  {
    icon: Mail,
    title: 'Email & SMS Marketing',
    description: 'High-ROI promotional campaigns using your customer data. Turn one-time buyers into loyal regulars.',
    features: ['EPOS Integration', 'Targeted Campaigns', 'GDPR Compliant', 'Analytics Dashboard', 'A/B Testing'],
    href: '/services/marketing',
    color: 'vibrant-teal',
  },
  {
    icon: Users,
    title: 'Customer Diversion',
    description: 'Shift customers from costly third-party apps to your direct channels. Keep more of every order.',
    features: ['Strategic Redirection', 'Data Capture', 'Commission Reduction', 'Loyalty Programs', 'Direct Ordering'],
    href: '/services/customer-diversion',
    color: 'sunset-orange',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Custom content creation and scheduling across all platforms. Build your brand while staying busy.',
    features: ['Brand Engagement', 'Multi-Platform', 'Community Building', 'Content Calendar', 'Analytics'],
    href: '/services/social-media',
    color: 'royal-purple',
  },
  {
    icon: Monitor,
    title: 'EPOS & Website Integration',
    description: 'Seamless digital ordering through smart connected systems. Real-time updates and automated tracking.',
    features: ['Real-time Updates', 'Automated Tracking', 'Digital Visibility', 'Menu Sync', 'Order Management'],
    href: '/services/epos-integration',
    color: 'electric-blue',
  },
  {
    icon: Palette,
    title: 'Menu Design & Print',
    description: 'Professional end-to-end design and print support. Make your menu as appetizing as your food.',
    features: ['Menu Design', 'High-Quality Prints', 'Brand Alignment', 'Packaging Design', 'Flyers & Posters'],
    href: '/services/design-print',
    color: 'vibrant-teal',
  },
];

const colorMap: Record<string, string> = {
  'electric-blue': 'bg-primary-red/20 text-primary-red',
  'vibrant-teal': 'bg-primary-red/20 text-primary-red',
  'sunset-orange': 'bg-primary-red/20 text-primary-red',
  'royal-purple': 'bg-royal-purple/20 text-royal-purple',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
            Complete Solutions for{' '}
            <span className="gradient-text">Your Business</span>
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            From 24/7 call handling to complete digital marketing, we provide everything 
            your restaurant or takeaway needs to thrive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block">
              <Card variant="glow" className="h-full">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[service.color]}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary-red transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs px-2 py-1 rounded-full bg-light-gray text-gray"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-electric-blue font-medium">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card variant="glass" className="p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-gray mb-6">
              Get a free consultation and we&apos;ll help you find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call 01254 961661
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
