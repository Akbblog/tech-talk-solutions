import { Metadata } from 'next';
import { UtensilsCrossed, TrendingUp, Phone, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Restaurant Solutions | TechTalk Solutions',
  description: 'Complete digital solutions tailored for restaurants and takeaways. Reduce platform fees and increase direct orders.',
};

const challenges = [
  {
    problem: 'High Platform Commissions',
    solution: 'Customer diversion strategies reduce dependency on costly apps',
    metric: '40% commission savings',
  },
  {
    problem: 'Missed Phone Orders',
    solution: '24/7 call answering ensures every order is captured',
    metric: '95% call answer rate',
  },
  {
    problem: 'Low Customer Retention',
    solution: 'Email & SMS marketing brings customers back',
    metric: '35% repeat order increase',
  },
  {
    problem: 'Weak Online Presence',
    solution: 'Social media management builds your brand',
    metric: '150% engagement growth',
  },
];

const benefits = [
  'Reduce platform fees by up to 95%',
  'Increase revenue by 35%+',
  '24/7 professional call handling',
  'Build your own customer database',
  'Targeted marketing campaigns',
  'Seamless EPOS integration',
  'Professional menu design',
  'Social media management',
];

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Hero */}
        <div className="text-center mb-20">
          <Badge variant="default" className="mb-4">
            <UtensilsCrossed className="w-4 h-4 mr-2" />
            Restaurants & Takeaways
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
            Built for{' '}
            <span className="gradient-text">Restaurants</span>
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto mb-10">
            We understand the unique challenges restaurants face. Our solutions are specifically 
            designed to help you reduce costs, increase revenue, and focus on what you do best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <Card variant="glass" className="text-center p-6">
            <p className="text-4xl font-bold text-primary-red mb-2">95%</p>
            <p className="text-gray text-sm">Cost Savings</p>
          </Card>
          <Card variant="glass" className="text-center p-6">
            <p className="text-4xl font-bold text-primary-red mb-2">35%</p>
            <p className="text-gray text-sm">Revenue Growth</p>
          </Card>
          <Card variant="glass" className="text-center p-6">
            <p className="text-4xl font-bold text-primary-red mb-2">500+</p>
            <p className="text-gray text-sm">Happy Clients</p>
          </Card>
          <Card variant="glass" className="text-center p-6">
            <p className="text-4xl font-bold text-primary-red mb-2">24/7</p>
            <p className="text-gray text-sm">Support</p>
          </Card>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">We Solve Your Biggest Challenges</h2>
            <p className="text-gray">Real problems, proven solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((item) => (
              <Card key={item.problem} variant="glow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-red/20 text-primary-red flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">{item.problem}</h3>
                    <p className="text-gray text-sm mb-2">{item.solution}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-red/20 text-primary-red text-sm font-medium">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Benefits */}
        <Card variant="glass" className="p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark mb-4">Everything You Need to Succeed</h2>
            <p className="text-gray">Complete solutions for modern restaurants</p>
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
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto">
            Join 500+ UK restaurants already saving money and growing revenue with TechTalk.
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
