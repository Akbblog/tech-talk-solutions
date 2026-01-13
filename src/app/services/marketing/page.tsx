import { Metadata } from 'next';
import { Mail, MessageSquare, BarChart3, Target, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Email & SMS Marketing | TechTalk Solutions',
  description: 'High-ROI promotional campaigns using your customer data. Turn one-time buyers into loyal regulars with targeted marketing.',
};

const features = [
  {
    icon: Mail,
    title: 'Email Campaigns',
    description: 'Professional email campaigns that drive repeat orders and keep your brand top of mind.',
  },
  {
    icon: MessageSquare,
    title: 'SMS Marketing',
    description: 'Direct, high-open-rate SMS messages for time-sensitive promotions and offers.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Track every campaign with detailed analytics showing opens, clicks, and conversions.',
  },
];

const benefits = [
  'EPOS data integration for targeting',
  'GDPR compliant campaigns',
  'Automated birthday & anniversary offers',
  'Win-back campaigns for lapsed customers',
  'A/B testing for optimization',
  'Custom branded templates',
  'Segmented customer lists',
  'Real-time performance tracking',
];

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="success" className="mb-4">Marketing</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-cloud mb-6">
              Turn Customers into{' '}
              <span className="gradient-text">Loyal Regulars</span>
            </h1>
            <p className="text-lg text-cloud/60 mb-8">
              High-ROI email and SMS campaigns that bring customers back again and again. 
              We use your EPOS data to create targeted, personalized marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Start Marketing
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
                  <Target className="w-8 h-8 text-primary-red" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">300%</p>
                  <p className="text-gray">Average ROI</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Email Open Rate</span>
                  <span className="text-primary-red font-semibold">45%+</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">SMS Open Rate</span>
                  <span className="text-primary-red font-semibold">98%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Conversion Rate</span>
                  <span className="text-primary-red font-semibold">12%+</span>
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
            <h2 className="text-3xl font-bold text-dark mb-4">Powerful Marketing Features</h2>
            <p className="text-gray max-w-2xl mx-auto">
              Everything you need to run effective marketing campaigns.
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
            Ready to Boost Your Sales?
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto">
            Start turning your customer data into revenue with targeted marketing campaigns.
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
