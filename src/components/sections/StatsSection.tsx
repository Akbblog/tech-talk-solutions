'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, DollarSign, Percent, Clock, Zap } from 'lucide-react';
import { Container } from '@/components/ui';

const stats = [
  {
    icon: DollarSign,
    value: 95,
    suffix: '%',
    label: 'Savings vs Third-Party',
    description: 'Compared to platform fees',
    color: 'primary-red',
  },
  {
    icon: TrendingUp,
    value: 35,
    suffix: '%',
    label: 'Revenue Growth',
    description: 'Average increase for clients',
    color: 'dark-accent',
  },
  {
    icon: Percent,
    value: 40,
    suffix: '%',
    label: 'Commission Reduction',
    description: 'Decrease in platform fees',
    color: 'primary-red',
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Support Availability',
    description: 'Round-the-clock service',
    color: 'dark-accent',
  },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

const colorMap: Record<string, string> = {
  'primary-red': 'from-primary-red/10 to-primary-red/5 border-primary-red/20',
  'dark-accent': 'from-dark/10 to-dark/5 border-dark/20',
};

const iconColorMap: Record<string, string> = {
  'primary-red': 'text-primary-red',
  'dark-accent': 'text-primary-red',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      stiffness: 100,
      damping: 15,
    },
  },
};

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-light-gray/50 to-white" />
        
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-primary-red/5 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-[10%] w-32 h-32 rounded-full bg-dark/5 blur-xl"
        />
      </div>
      
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-red/10 text-primary-red mb-4"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-4 h-4" />
            </motion.span>
            <span className="text-sm font-medium">Proven Results</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            Results That{' '}
            <motion.span
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-primary-red via-red-500 to-primary-red bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Speak
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray max-w-2xl mx-auto"
          >
            Our clients see real, measurable improvements to their bottom line.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br border text-center group cursor-default ${colorMap[stat.color]}`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-red/10 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white mb-4 shadow-sm ${iconColorMap[stat.color]} group-hover:shadow-lg group-hover:shadow-primary-red/10 transition-shadow duration-300`}
                >
                  <stat.icon className="w-7 h-7" />
                </motion.div>

                {/* Value */}
                <motion.div
                  initial={{ scale: 1 }}
                  animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`text-5xl font-bold mb-2 ${iconColorMap[stat.color]}`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-dark mb-1 group-hover:text-primary-red transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray">
                  {stat.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-primary-red/50 to-primary-red rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
