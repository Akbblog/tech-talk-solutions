import { Metadata } from 'next';
import { Check, X, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Pricing | TechTalk Solutions',
  description: 'Transparent pricing for our restaurant solutions. Find the perfect package for your business.',
};

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small takeaways getting started',
    price: '149',
    period: 'per month',
    popular: false,
    features: [
      { name: 'Call Answering (Business Hours)', included: true },
      { name: 'Basic Email Marketing', included: true },
      { name: 'Social Media (3 posts/week)', included: true },
      { name: 'EPOS Integration', included: true },
      { name: '24/7 Support', included: false },
      { name: 'Customer Diversion', included: false },
      { name: 'SMS Marketing', included: false },
      { name: 'Menu Design', included: false },
    ],
  },
  {
    name: 'Growth',
    description: 'For restaurants ready to scale',
    price: '299',
    period: 'per month',
    popular: true,
    features: [
      { name: '24/7 Call Answering', included: true },
      { name: 'Email & SMS Marketing', included: true },
      { name: 'Social Media (5 posts/week)', included: true },
      { name: 'EPOS Integration', included: true },
      { name: '24/7 Support', included: true },
      { name: 'Customer Diversion', included: true },
      { name: 'Basic Menu Design', included: true },
      { name: 'Monthly Analytics', included: true },
    ],
  },
  {
    name: 'Enterprise',
    description: 'Full-service for multi-location businesses',
    price: 'Custom',
    period: 'contact us',
    popular: false,
    features: [
      { name: 'Everything in Growth', included: true },
      { name: 'Multi-location Support', included: true },
      { name: 'Dedicated Account Manager', included: true },
      { name: 'Custom Integrations', included: true },
      { name: 'Priority Support', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'White-label Options', included: true },
      { name: 'Custom Development', included: true },
    ],
  },
];

const faqs = [
  {
    question: 'Is there a setup fee?',
    answer: 'No, we don\'t charge any setup fees. You only pay the monthly subscription.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time with 30 days notice.',
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Yes! Contact us to discuss a package tailored to your specific needs.',
  },
  {
    question: 'How quickly can I get started?',
    answer: 'Most clients are fully onboarded within 24-48 hours of signing up.',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include our core technology 
            and support to help you succeed.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              variant={plan.popular ? 'glow' : 'glass'}
              className={`relative ${plan.popular ? 'ring-2 ring-primary-red' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="default">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                <p className="text-gray text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== 'Custom' && <span className="text-gray">£</span>}
                  <span className="text-4xl font-bold text-dark">{plan.price}</span>
                </div>
                <p className="text-gray/60 text-sm">{plan.period}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature.name} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-primary-red flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray/30 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-dark/80' : 'text-gray/40'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full"
                variant={plan.popular ? 'primary' : 'outline'}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-dark text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question} variant="glass">
                <h3 className="text-lg font-semibold text-dark mb-2">{faq.question}</h3>
                <p className="text-gray">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card variant="glass" className="p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Not Sure Which Plan is Right?
          </h2>
          <p className="text-gray mb-6 max-w-xl mx-auto">
            Get a free consultation and we&apos;ll recommend the perfect solution for your business.
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
      </Container>
    </div>
  );
}
