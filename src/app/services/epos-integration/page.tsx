import { Metadata } from 'next';
import { Monitor, RefreshCcw, Globe, Zap, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'EPOS & Website Integration | TechTalk Solutions',
  description: 'Seamless digital ordering through smart connected systems. Real-time updates and automated tracking for your restaurant.',
};

const features = [
  {
    icon: RefreshCcw,
    title: 'Real-Time Sync',
    description: 'Orders flow directly into your EPOS system - no manual entry, no errors.',
  },
  {
    icon: Globe,
    title: 'Online Ordering',
    description: 'Commission-free ordering website fully integrated with your operations.',
  },
  {
    icon: Zap,
    title: 'Instant Updates',
    description: 'Menu changes, prices, and availability sync automatically across all channels.',
  },
];

const benefits = [
  'Real-time menu synchronization',
  'Automated order processing',
  'Stock level management',
  'Multi-location support',
  'Delivery driver integration',
  'Customer order tracking',
  'Analytics dashboard',
  'API integrations available',
];

export default function EposIntegrationPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="default" className="mb-4">EPOS Integration</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-cloud mb-6">
              Seamless Digital{' '}
              <span className="gradient-text">Integration</span>
            </h1>
            <p className="text-lg text-cloud/60 mb-8">
              Connect your EPOS, website, and ordering channels into one unified system. 
              Save time, reduce errors, and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Get Integrated
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
                  <Monitor className="w-8 h-8 text-primary-red" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">50+</p>
                  <p className="text-gray">EPOS Systems Supported</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Order Accuracy</span>
                  <span className="text-primary-red font-semibold">99.9%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Time Saved Daily</span>
                  <span className="text-primary-red font-semibold">2+ hours</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Setup Time</span>
                  <span className="text-primary-red font-semibold">24 hours</span>
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
            <h2 className="text-3xl font-bold text-dark mb-4">Powerful Integration Features</h2>
            <p className="text-gray max-w-2xl mx-auto">
              Connect everything for smooth, automated operations.
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
            Ready to Streamline Operations?
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto">
            Connect your systems and watch efficiency improve immediately.
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
