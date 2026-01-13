'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Phone, Star, CheckCircle } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Container, Button, Badge } from '@/components/ui';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-light-background to-light-gray"
    >
      {/* Animated Background Elements */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        animate={prefersReducedMotion ? {} : { x: [0, 6, 0, -6, 0], y: [0, -4, 0, 4, 0] }}
        transition={prefersReducedMotion ? {} : { duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-primary-red/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-dark/5 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Animated Lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/20 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent"
        />
      </motion.div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div style={{ y: textY, opacity }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="premium" className="mb-6 group">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                </motion.span>
                Trusted by 500+ UK Restaurants
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight"
            >
              Empower Your Restaurant{' '}
              <motion.span
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="bg-gradient-to-r from-primary-red via-red-500 to-primary-red bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                With Tech Talk
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray mb-8 max-w-xl"
            >
              Maximize profitability, reduce operational costs, and grow independently
              with our comprehensive suite of digital services.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {[
                { text: 'Save up to 95%', highlight: true },
                { text: '35% Revenue Growth', highlight: true },
                { text: '24/7 Support', highlight: false },
              ].map((benefit, i) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    benefit.highlight
                      ? 'bg-primary-red/10 text-primary-red'
                      : 'bg-dark/5 text-dark'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-medium text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="group w-full sm:w-auto shadow-xl shadow-primary-red/20">
                  Get Your Free Quote
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" size="lg" className="group w-full sm:w-auto">
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-5 h-5 mr-2 fill-primary-red/20" />
                  </motion.span>
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-red to-red-700 border-3 border-white shadow-md flex items-center justify-center text-white text-xs font-bold"
                    >
                      {['MK', 'SC', 'JW', 'RP'][i - 1]}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">500+ Happy Clients</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                      >
                        <Star className="w-4 h-4 fill-primary-red text-primary-red" />
                      </motion.span>
                    ))}
                    <span className="text-sm text-gray ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            style={{ y: imageY, opacity }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-full"
            >
              {/* Image (clean, no overlay) */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <motion.video
                  ref={(el) => {
                    videoRef.current = el;
                  }}
                  src="/hero_video.mp4"
                  poster="/bzynBUPsfxh5PXeKZ8skWj.png"
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.05, 1] }}
                  transition={
                    prefersReducedMotion
                      ? {}
                      : { duration: 10, repeat: Infinity, ease: 'easeInOut' }
                  }
                  style={{ transformOrigin: 'center center' }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Stats Cards - left stat removed as requested */}

                {/* Right stat card removed as requested */}

                {/* Bottom testimonial removed per request */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-dark/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-red"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Local hook fallback to detect reduced-motion preference without importing framer-motion's hook
function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => setPrefersReduced(e.matches);
    // Set initial value
    setPrefersReduced(mq.matches);
    // Attach listener (use any-cast to handle environments where legacy methods exist)
    const anyMq: any = mq;
    if (typeof anyMq.addEventListener === 'function') anyMq.addEventListener('change', handleChange);
    else if (typeof anyMq.addListener === 'function') anyMq.addListener(handleChange);
    return () => {
      if (typeof anyMq.removeEventListener === 'function') anyMq.removeEventListener('change', handleChange);
      else if (typeof anyMq.removeListener === 'function') anyMq.removeListener(handleChange);
    };
  }, []);

  return prefersReduced;
}
