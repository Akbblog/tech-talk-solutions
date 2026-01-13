import { Metadata } from 'next';
import { Phone, Clock, HeadphonesIcon, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Call Answering & Support | TechTalk Solutions',
  description: 'Never miss an order with 24/7 professional call handling. We recover lost revenue while you focus on cooking.',
};

const features = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock call answering ensures you never miss an order, even during peak hours or when you\'re busy.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Professional Agents',
    description: 'Trained agents who understand the restaurant industry and represent your brand professionally.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Recovery',
    description: 'Capture orders that would otherwise be lost to voicemail or busy signals.',
  },
];

const benefits = [
  'Never miss a phone order again',
  'Professional customer service 24/7',
  'Upselling and cross-selling on every call',
  'Detailed call analytics and reporting',
  'Seamless EPOS integration',
  'Multi-language support available',
  'Custom scripts for your brand',
  'Overflow handling during peak times',
];

export default function CallAnsweringPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="default" className="mb-4">Call Answering</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-cloud mb-6">
              Never Miss an Order with{' '}
              <span className="gradient-text">24/7 Support</span>
            </h1>
            <p className="text-lg text-cloud/60 mb-8">
              Professional call handling that ensures every customer reaches a friendly voice. 
              We process orders, handle inquiries, and upsell on your behalf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Get Started
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
                  <Phone className="w-8 h-8 text-primary-red" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">95%</p>
                  <p className="text-gray">Call Answer Rate</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Average Response Time</span>
                  <span className="text-primary-red font-semibold">&lt; 3 rings</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Order Accuracy</span>
                  <span className="text-primary-red font-semibold">99.8%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Customer Satisfaction</span>
                  <span className="text-primary-red font-semibold">4.9/5</span>
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
            <h2 className="text-3xl font-bold text-dark mb-4">Why Choose Our Call Answering?</h2>
            <p className="text-gray max-w-2xl mx-auto">
              We don&apos;t just answer calls — we help grow your business.
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
            Ready to Stop Missing Orders?
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto">
            Get started with our 24/7 call answering service and never lose a customer to voicemail again.
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
