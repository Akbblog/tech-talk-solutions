export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  metric: string;
  avatar?: string; // initials or image path
}

const testimonials: Testimonial[] = [
  {
    quote:
      "TechTalk has transformed our business. We've cut our Just Eat fees by 40% and our direct orders are up 50%. The 24/7 call answering means we never miss a sale.",
    author: 'Mohammed Khan',
    role: 'Owner, Spice Express',
    location: 'Manchester',
    rating: 5,
    metric: '+50% Direct Orders',
    avatar: 'MK',
  },
  {
    quote:
      "The SMS marketing campaigns are incredible. We ran a promotion that brought in £5,000 extra revenue in just one weekend. Best investment we've made.",
    author: 'Sarah Chen',
    role: 'Manager, Golden Dragon',
    location: 'Birmingham',
    rating: 5,
    metric: '£5,000 Weekend Revenue',
    avatar: 'SC',
  },
  {
    quote:
      "Professional, reliable, and they actually understand the restaurant business. Our customers love the personal touch they get when they call.",
    author: 'Raj Patel',
    role: 'Owner, Curry Palace',
    location: 'Leeds',
    rating: 5,
    metric: '95% Call Answer Rate',
    avatar: 'RP',
  },
  {
    quote:
      "We were paying thousands to Deliveroo every month. Now we keep most of that profit. TechTalk pays for itself ten times over.",
    author: 'James Wilson',
    role: 'Owner, Pizza Perfect',
    location: 'London',
    rating: 5,
    metric: '£3,000/month Saved',
    avatar: 'JW',
  },
];

export default testimonials;
