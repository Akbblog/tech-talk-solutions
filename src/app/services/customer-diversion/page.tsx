import { Metadata } from 'next';
import { Users, TrendingDown, Database, Repeat, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Customer Diversion | TechTalk Solutions',
  description: 'Shift customers from costly third-party apps to direct channels. Keep more of every order with strategic customer diversion.',
};

const features = [
  {
    icon: TrendingDown,
    title: 'Commission Reduction',
    description: 'Stop paying 30%+ commissions on every order. Keep more profit for your business.',
  },
  {
    icon: Database,
    title: 'Data Ownership',
    description: 'Build your own customer database for future marketing and loyalty programs.',
  },
  {
    icon: Repeat,
    title: 'Direct Relationships',
    description: 'Build lasting relationships with customers who order directly from you.',
  },
];

const benefits = [
  'Strategic flyering and inserts',
  'QR codes for direct ordering',
  'First-order incentives for switchers',
  'Loyalty program integration',
  'Customer data capture',
  'Reduced platform dependency',
  'Higher profit margins',
  'Better customer relationships',
];

export default function CustomerDiversionPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="warning" className="mb-4">Customer Diversion</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-cloud mb-6">
              Stop Giving Away{' '}
              <span className="gradient-text">40% of Your Profit</span>
            </h1>
            <p className="text-lg text-cloud/60 mb-8">
              Third-party apps take huge commissions on every order. We help you divert 
              customers to your direct channels where you keep more of every sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Start Saving
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
                  <Users className="w-8 h-8 text-primary-red" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">40%</p>
                  <p className="text-gray">Commission Saved</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Average Conversion Rate</span>
                  <span className="text-primary-red font-semibold">25%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Customer Retention</span>
                  <span className="text-primary-red font-semibold">70%+</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Profit Increase</span>
                  <span className="text-primary-red font-semibold">35%</span>
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
            <h2 className="text-3xl font-bold text-dark mb-4">Take Back Control</h2>
            <p className="text-gray max-w-2xl mx-auto">
              Build direct relationships and keep more of your hard-earned revenue.
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
            Ready to Keep More Profit?
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto">
            Start diverting customers to direct channels and watch your margins grow.
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
