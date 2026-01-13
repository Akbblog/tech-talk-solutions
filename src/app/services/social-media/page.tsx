import { Metadata } from 'next';
import { Share2, Instagram, Facebook, Twitter, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Social Media Management | TechTalk Solutions',
  description: 'Custom content creation and scheduling across all platforms. Build your brand while you focus on your business.',
};

const features = [
  {
    icon: Instagram,
    title: 'Content Creation',
    description: 'Professional food photography guidelines and engaging posts that showcase your menu.',
  },
  {
    icon: Facebook,
    title: 'Multi-Platform Management',
    description: 'Consistent presence across Facebook, Instagram, Twitter and more.',
  },
  {
    icon: Share2,
    title: 'Community Engagement',
    description: 'Active engagement with followers, responding to comments and building your community.',
  },
];

const benefits = [
  'Custom branded content',
  'Professional post scheduling',
  'Story and reel creation',
  'Review management',
  'Competition and giveaway management',
  'Influencer collaboration',
  'Monthly analytics reports',
  'Ad campaign management',
];

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="premium" className="mb-4">Social Media</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-cloud mb-6">
              Build Your Brand{' '}
              <span className="gradient-text">Without the Hassle</span>
            </h1>
            <p className="text-lg text-cloud/60 mb-8">
              Professional social media management that keeps your brand active and engaging 
              while you focus on running your restaurant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Start Growing
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
                  <Share2 className="w-8 h-8 text-primary-red" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark">150%</p>
                  <p className="text-gray">Avg. Engagement Growth</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Posts Per Week</span>
                  <span className="text-primary-red font-semibold">5-7</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Follower Growth</span>
                  <span className="text-primary-red font-semibold">200+/mo</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-light-gray">
                  <span className="text-dark/80">Response Time</span>
                  <span className="text-primary-red font-semibold">&lt; 2 hours</span>
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
            <h2 className="text-3xl font-bold text-dark mb-4">Full-Service Social Management</h2>
            <p className="text-gray max-w-2xl mx-auto">
              We handle everything so you can focus on cooking.
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
            Ready to Grow Your Following?
          </h2>
          <p className="text-gray mb-8 max-w-xl mx-auto">
            Let us build your social presence while you focus on what you do best.
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
