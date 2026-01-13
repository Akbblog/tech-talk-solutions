import {
  HeroSection,
  ServicesSection,
  StatsSection,
  CTASection,
} from '@/components/sections';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
