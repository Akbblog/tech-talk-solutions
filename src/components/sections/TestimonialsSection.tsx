'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import { Container, Card } from '@/components/ui';
import testimonials from '@/data/testimonials';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = (newDirection: number) => {
    const newIndex = (activeIndex + newDirection + testimonials.length) % testimonials.length;
    setActiveIndex([newIndex, newDirection]);
  };

  const goToSlide = (index: number) => {
    const direction = index > activeIndex ? 1 : -1;
    setActiveIndex([index, direction]);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex, isAutoPlaying]);

  return (
    <section
      ref={ref}
      className="py-24 bg-light-gray relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-red/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full border border-primary-red/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full border border-dark/5"
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
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.span>
            <span className="text-sm font-medium">Client Success Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4"
          >
            What Our{' '}
            <motion.span
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-primary-red via-red-500 to-primary-red bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Clients Say
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it. Here&apos;s what restaurant owners across the UK say about us.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative h-[450px] md:h-[380px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <Card variant="glass" className="h-full p-8 md:p-12 text-center bg-white shadow-xl">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-red/10 text-primary-red mb-6"
                  >
                    <Quote className="w-7 h-7" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center gap-1 mb-6"
                  >
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 text-primary-red fill-primary-red" />
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-dark mb-6 leading-relaxed"
                  >
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </motion.blockquote>

                  {/* Metric Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-4 py-2 rounded-full bg-primary-red/10 text-primary-red font-semibold mb-6"
                  >
                    {testimonials[activeIndex].metric}
                  </motion.div>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center justify-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-red to-red-700 flex items-center justify-center text-white font-bold">
                      {testimonials[activeIndex].avatar}
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-semibold text-dark">
                        {testimonials[activeIndex].author}
                      </p>
                      <p className="text-gray text-sm">
                        {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark hover:bg-primary-red hover:text-white hover:border-primary-red transition-all shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    width: index === activeIndex ? 32 : 8,
                    backgroundColor: index === activeIndex ? '#e31937' : 'rgba(0,0,0,0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2 rounded-full"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark hover:bg-primary-red hover:text-white hover:border-primary-red transition-all shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray text-sm mb-4">Trusted by restaurants across the UK</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Manchester', 'Birmingham', 'Leeds', 'London', 'Bristol', 'Liverpool'].map((city, index) => (
              <motion.span
                key={city}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1, color: '#e31937' }}
                className="text-dark font-medium cursor-default transition-colors"
              >
                {city}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
