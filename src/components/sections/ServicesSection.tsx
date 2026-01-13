'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Phone,
  Mail,
  Users,
  Share2,
  Monitor,
  Palette,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { Container, Card, Badge } from '@/components/ui';

const services = [
  {
    icon: Phone,
    title: 'Call Answering & Support',
    description: 'Never miss an order with 24/7 professional call handling. We recover lost revenue while you focus on cooking.',
    features: ['24/7 Management', 'Personalized Support', 'Revenue Recovery'],
    href: '/services/call-answering',
    color: 'primary-red',
    stat: '98%',
    statLabel: 'Answer Rate',
  },
  {
    icon: Mail,
    title: 'Email & SMS Marketing',
    description: 'High-ROI promotional campaigns using your customer data. Turn one-time buyers into loyal regulars.',
    features: ['EPOS Integration', 'Targeted Campaigns', 'GDPR Compliant'],
    href: '/services/marketing',
    color: 'dark',
    stat: '45%',
    statLabel: 'Open Rate',
  },
  {
    icon: Users,
    title: 'Customer Diversion',
    description: 'Shift customers from costly third-party apps to your direct channels. Keep more of every order.',
    features: ['Strategic Redirection', 'Data Capture', 'Commission Reduction'],
    href: '/services/customer-diversion',
    color: 'primary-red',
    stat: '40%',
    statLabel: 'Fee Reduction',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Custom content creation and scheduling across all platforms. Build your brand while staying busy.',
    features: ['Brand Engagement', 'Multi-Platform', 'Community Building'],
    href: '/services/social-media',
    color: 'dark',
    stat: '3x',
    statLabel: 'Engagement',
  },
  {
    icon: Monitor,
    title: 'EPOS & Website Integration',
    description: 'Seamless digital ordering through smart connected systems. Real-time updates and automated tracking.',
    features: ['Real-time Updates', 'Automated Tracking', 'Digital Visibility'],
    href: '/services/epos-integration',
    color: 'primary-red',
    stat: '100%',
    statLabel: 'Sync Rate',
  },
  {
    icon: Palette,
    title: 'Menu Design & Print',
    description: 'Professional end-to-end design and print support. Make your menu as appetizing as your food.',
    features: ['Menu Design', 'High-Quality Prints', 'Brand Alignment'],
    href: '/services/design-print',
    color: 'dark',
    stat: '500+',
    statLabel: 'Designs',
  },
];

const colorMap: Record<string, string> = {
  'primary-red': 'bg-primary-red/10 text-primary-red group-hover:bg-primary-red',
  'dark': 'bg-dark/10 text-dark group-hover:bg-dark',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-light-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-primary-red/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-dark/5"
        />
      </div>

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="default" className="mb-4">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
              </motion.span>
              Our Services
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Everything You Need to{' '}
            <motion.span
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-primary-red via-red-500 to-primary-red bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Grow
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray max-w-2xl mx-auto"
          >
            From 24/7 call handling to complete digital marketing, we provide the tools 
            and support your business needs to thrive.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={service.href} className="group block h-full">
                <Card variant="glow" className="h-full flex flex-col bg-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-red/0 to-primary-red/0 group-hover:from-primary-red/5 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Top Row: Icon and Stat */}
                    <div className="flex items-start justify-between mb-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${colorMap[service.color]} group-hover:text-white group-hover:shadow-lg`}
                      >
                        <service.icon className="w-7 h-7" />
                      </motion.div>

                      {/* Stat Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-right"
                      >
                        <p className="text-2xl font-bold text-primary-red">{service.stat}</p>
                        <p className="text-xs text-gray">{service.statLabel}</p>
                      </motion.div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary-red transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + featureIndex * 0.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(227, 25, 55, 0.1)' }}
                          className="text-xs px-3 py-1 rounded-full bg-light-gray text-gray cursor-default transition-colors duration-200"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>

                    {/* Link */}
                    <motion.div
                      className="flex items-center text-primary-red font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.span>
                    </motion.div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
