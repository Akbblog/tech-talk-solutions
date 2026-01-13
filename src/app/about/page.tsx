import { Metadata } from 'next';
import { Target, Heart, Users, Award, ArrowRight, Phone } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us | TechTalk Solutions',
  description: 'Learn about TechTalk Solutions - helping UK restaurants and takeaways save on fees and grow revenue since 2018.',
};

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure our success by your success. Every solution is designed to deliver measurable ROI.',
  },
  {
    icon: Heart,
    title: 'Partner Mindset',
    description: 'We\'re not just a service provider. We become an extension of your team, invested in your growth.',
  },
  {
    icon: Users,
    title: 'Industry Experts',
    description: 'Our team understands the restaurant industry inside and out, having worked with 500+ businesses.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never settle for good enough. Every interaction represents your brand, and we take that seriously.',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', description: 'Started with a mission to help local restaurants compete' },
  { year: '2019', title: '100 Clients', description: 'Reached our first major milestone' },
  { year: '2021', title: 'National Expansion', description: 'Expanded services across the UK' },
  { year: '2023', title: '500+ Clients', description: 'Trusted by restaurants nationwide' },
  { year: '2024', title: 'Full Suite', description: 'Launched complete digital solutions platform' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Hero */}
        <div className="text-center mb-20">
          <Badge variant="default" className="mb-4">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
            Your Partner in{' '}
            <span className="gradient-text">Growth</span>
          </h1>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            TechTalk Solutions was founded with a simple mission: help independent restaurants 
            and takeaways compete with the big chains by providing enterprise-level technology 
            and support at affordable prices.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
            <div className="space-y-4 text-gray">
              <p>
                We saw the challenges facing local restaurants: rising platform commissions eating 
                into razor-thin margins, missed phone orders during busy periods, and the struggle 
                to build direct customer relationships.
              </p>
              <p>
                So we built TechTalk Solutions — a comprehensive suite of services designed 
                specifically for the food industry. From 24/7 call answering to targeted marketing 
                campaigns, we provide everything restaurants need to thrive in the digital age.
              </p>
              <p>
                Today, we&apos;re proud to serve over 500 restaurants across the UK, helping them 
                save an average of 95% on platform fees and increase revenue by 35%.
              </p>
            </div>
          </div>
          <Card variant="glass" className="p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-primary-red mb-2">500+</p>
                <p className="text-gray text-sm">Happy Clients</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-primary-red mb-2">95%</p>
                <p className="text-gray text-sm">Cost Savings</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-primary-red mb-2">35%</p>
                <p className="text-gray text-sm">Revenue Growth</p>
              </div>
              <div className="text-center p-4">
                <p className="text-4xl font-bold text-primary-red mb-2">24/7</p>
                <p className="text-gray text-sm">Support</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Values</h2>
            <p className="text-gray">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} variant="glow" className="text-center">
                <div className="w-14 h-14 rounded-xl bg-primary-red/20 text-primary-red flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-gray text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Our Journey</h2>
            <p className="text-gray">Growing together with our clients</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-vibrant-teal to-royal-purple hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card variant="glass" className="inline-block p-6">
                      <p className="text-primary-red font-bold text-lg mb-1">{milestone.year}</p>
                      <h3 className="text-xl font-semibold text-dark mb-1">{milestone.title}</h3>
                      <p className="text-gray text-sm">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary-red border-4 border-white hidden md:block relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <Card variant="glass" className="p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-gray mb-6 max-w-xl mx-auto">
            Become part of the TechTalk family and start growing your business today.
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
        </Card>
      </Container>
    </div>
  );
}
