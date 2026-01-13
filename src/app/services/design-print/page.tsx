import { Metadata } from 'next';
import { Palette, Printer, FileText, Package, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Menu Design & Print | TechTalk Solutions',
  description: 'Professional end-to-end design and print support. Make your menu as appetizing as your food.',
};

const features = [
  {
    icon: FileText,
    title: 'Menu Design',
    description: 'Eye-catching menus designed to highlight your best sellers and increase average order value.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description: 'Branded packaging that makes every delivery a marketing opportunity.',
  },
  {
    icon: Printer,
    title: 'High-Quality Print',
    description: 'Premium printing on durable materials that represent your brand quality.',
  },
];

const benefits = [
  'Professional menu design',
  'Branded packaging solutions',
  'Flyer and poster design',
  'Business card printing',
  'Loyalty card design',
  'A-frame and signage',
  'Fast turnaround times',
  'Bulk order discounts',
];

export default function DesignPrintPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="success" className="mb-4">Design & Print</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-cloud mb-6">
              Professional Design{' '}
              <span className="gradient-text">That Sells</span>
            </h1>
            <p className="text-lg text-cloud/60 mb-8">
              From menus to packaging, we create stunning designs that reflect your brand 
              quality and help drive more orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Start Designing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call 01254 961661
              </Button>
            </div>
          </div>
          <div className="relative">
            <Card variant="glass" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary-red/20 flex items-center justify-center">
                  <Palette className="w-8 h-8 text-primary-red" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">1000+</p>
                  <p className="text-gray">Designs Completed</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Design Turnaround</span>
                  <span className="text-primary-red font-semibold">48 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Print Turnaround</span>
                  <span className="text-primary-red font-semibold">3-5 days</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Client Satisfaction</span>
                  <span className="text-primary-red font-semibold">99%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => (
            <Card key={feature.title} variant="glow" className="text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-red/20 text-primary-red flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <Card variant="glass" className="p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark mb-4">Complete Design Services</h2>
            <p className="text-gray max-w-2xl mx-auto">
              Everything you need to look professional and stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-3 rounded-lg bg-light-gray">
                <CheckCircle className="w-5 h-5 text-primary-red flex-shrink-0" />
                <span className="text-dark/80">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Ready to Look Professional?
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto">
            Get stunning designs that make your brand stand out from the competition.
          </p>
          <Button size="lg">
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
