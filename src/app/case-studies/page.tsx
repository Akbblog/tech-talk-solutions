'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  ArrowRight, 
  Phone,
  Quote,
  MapPin,
  Utensils,
  Star
} from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';

const caseStudies = [
  {
    id: 'spice-express',
    name: 'Spice Express',
    location: 'Manchester',
    type: 'Indian Takeaway',
    image: '🍛',
    quote: "TechTalk has completely transformed how we operate. We've cut our Just Eat fees by 40% and our direct orders are up by over 50%. The call answering service means we never miss a sale.",
    author: 'Mohammed Khan',
    role: 'Owner',
    challenge: 'Losing 30% of revenue to Just Eat commissions and missing calls during peak hours.',
    solution: 'Implemented 24/7 call answering, customer diversion SMS campaigns, and EPOS integration.',
    results: [
      { metric: '+50%', label: 'Direct Orders', icon: TrendingUp },
      { metric: '40%', label: 'Commission Saved', icon: DollarSign },
      { metric: '98%', label: 'Call Answer Rate', icon: Phone },
    ],
    timeline: '3 months',
  },
  {
    id: 'golden-dragon',
    name: 'Golden Dragon',
    location: 'Birmingham',
    type: 'Chinese Restaurant',
    image: '🥡',
    quote: "The SMS marketing campaigns are incredible. We ran a weekend promotion that brought in £5,000 extra revenue. It's the best investment we've ever made.",
    author: 'Sarah Chen',
    role: 'Manager',
    challenge: 'Low customer retention and difficulty competing with food delivery apps.',
    solution: 'Built customer database, launched targeted SMS/email campaigns, designed promotional materials.',
    results: [
      { metric: '£5,000', label: 'Weekend Revenue', icon: DollarSign },
      { metric: '2,500+', label: 'Customer Database', icon: Users },
      { metric: '35%', label: 'Repeat Orders', icon: TrendingUp },
    ],
    timeline: '6 weeks',
  },
  {
    id: 'pizza-perfect',
    name: 'Pizza Perfect',
    location: 'London',
    type: 'Pizza Takeaway',
    image: '🍕',
    quote: "We were paying thousands to Deliveroo every month. Now we keep most of that profit. TechTalk pays for itself ten times over.",
    author: 'James Wilson',
    role: 'Owner',
    challenge: 'Deliveroo commissions eating into profits, no direct ordering system.',
    solution: 'Complete customer diversion strategy with loyalty program and branded ordering app.',
    results: [
      { metric: '£3,000', label: 'Monthly Savings', icon: DollarSign },
      { metric: '+45%', label: 'Direct Orders', icon: TrendingUp },
      { metric: '4.9★', label: 'Customer Rating', icon: Star },
    ],
    timeline: '2 months',
  },
  {
    id: 'curry-palace',
    name: 'Curry Palace',
    location: 'Leeds',
    type: 'Indian Restaurant',
    image: '🍲',
    quote: "Professional, reliable, and they actually understand the restaurant business. Our customers love the personal touch they get when they call.",
    author: 'Raj Patel',
    role: 'Owner',
    challenge: 'Inconsistent phone service, missed orders during busy periods.',
    solution: '24/7 call answering with trained UK staff, integrated order management.',
    results: [
      { metric: '95%', label: 'Call Answer Rate', icon: Phone },
      { metric: '+30%', label: 'Order Volume', icon: TrendingUp },
      { metric: '£2,500', label: 'Monthly Increase', icon: DollarSign },
    ],
    timeline: '1 month',
  },
];

const aggregateStats = [
  { value: '500+', label: 'Restaurants Helped' },
  { value: '£2M+', label: 'Client Savings/Year' },
  { value: '35%', label: 'Avg Revenue Growth' },
  { value: '98%', label: 'Client Satisfaction' },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card variant="glass" className="h-full group hover:border-primary-red/50 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">{study.image}</div>
            <div>
              <h3 className="text-xl font-bold text-dark group-hover:text-primary-red transition-colors">
                {study.name}
              </h3>
              <div className="flex items-center gap-2 text-gray text-sm">
                <MapPin className="w-3 h-3" />
                {study.location}
                <span className="text-gray/30">•</span>
                <Utensils className="w-3 h-3" />
                {study.type}
              </div>
            </div>
          </div>
          <Badge variant="default" className="text-xs">
            {study.timeline}
          </Badge>
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-4 mb-6">
          <div>
            <p className="text-xs text-gray/60 uppercase tracking-wide mb-1">Challenge</p>
            <p className="text-gray text-sm">{study.challenge}</p>
          </div>
          <div>
            <p className="text-xs text-gray/60 uppercase tracking-wide mb-1">Solution</p>
            <p className="text-gray text-sm">{study.solution}</p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {study.results.map((result) => (
            <div key={result.label} className="text-center p-3 rounded-lg bg-primary-red/10">
              <result.icon className="w-5 h-5 text-primary-red mx-auto mb-1" />
              <p className="text-lg font-bold text-primary-red">{result.metric}</p>
              <p className="text-xs text-gray">{result.label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex gap-3">
            <Quote className="w-5 h-5 text-primary-red/60 flex-shrink-0 mt-1" />
            <div>
              <p className="text-dark/80 text-sm italic mb-2">&ldquo;{study.quote}&rdquo;</p>
              <p className="text-gray text-xs">
                — {study.author}, {study.role}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">Case Studies</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
            Real Results for{' '}
            <span className="gradient-text">Real Restaurants</span>
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            See how restaurants and takeaways across the UK have transformed their business 
            with TechTalk Solutions.
          </p>
        </div>

        {/* Aggregate Stats */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {aggregateStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-primary-red/10 border border-primary-red/20"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary-red mb-1">{stat.value}</p>
              <p className="text-gray text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <Card variant="glass" className="p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-gray mb-6 max-w-xl mx-auto">
            Join 500+ UK restaurants who&apos;ve already cut their platform fees 
            and boosted their direct orders with TechTalk Solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="outline" size="lg">
                Calculate Your Savings
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
