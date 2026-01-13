'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, Phone, Send, CheckCircle, BarChart3 } from 'lucide-react';
import { Container, Card, Badge, Button } from '@/components/ui';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

export default function CalculatorPage() {
  const [monthlyOrders, setMonthlyOrders] = useState(500);
  const [averageOrderValue, setAverageOrderValue] = useState(25);
  const [platformCommission, setPlatformCommission] = useState(30);
  
  // Lead capture form
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
  });

  // Calculations
  const monthlyRevenue = monthlyOrders * averageOrderValue;
  const currentCommissionPaid = (monthlyRevenue * platformCommission) / 100;
  const projectedSavings = currentCommissionPaid * 0.95; // 95% savings
  const annualSavings = projectedSavings * 12;
  const revenueIncrease = monthlyRevenue * 0.35; // 35% revenue increase
  const totalAnnualBenefit = annualSavings + (revenueIncrease * 12);

  // Chart data
  const comparisonData = [
    {
      name: 'Current',
      revenue: monthlyRevenue,
      commission: currentCommissionPaid,
      profit: monthlyRevenue - currentCommissionPaid,
    },
    {
      name: 'With TechTalk',
      revenue: monthlyRevenue + revenueIncrease,
      commission: currentCommissionPaid * 0.05,
      profit: monthlyRevenue + revenueIncrease - (currentCommissionPaid * 0.05),
    },
  ];

  const savingsBreakdown = [
    { name: 'Commission Saved', value: Math.round(projectedSavings), color: '#C41E3A' },
    { name: 'Revenue Increase', value: Math.round(revenueIncrease), color: '#1E3A5F' },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send to your backend
    console.log('Lead captured:', { ...formData, savings: totalAnnualBenefit });
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">
            <Calculator className="w-4 h-4 mr-2" />
            Savings Calculator
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6">
            Calculate Your{' '}
            <span className="gradient-text">Savings</span>
          </h1>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            See how much you could save by switching from third-party platforms to TechTalk&apos;s 
            direct ordering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Calculator Inputs */}
          <Card variant="glass" className="p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Your Current Numbers</h2>
            
            <div className="space-y-8">
              {/* Monthly Orders */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-dark/80">Monthly Orders</label>
                  <span className="text-primary-red font-semibold">{monthlyOrders}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full h-2 bg-light-gray rounded-lg appearance-none cursor-pointer accent-primary-red"
                />
                <div className="flex justify-between text-sm text-gray mt-1">
                  <span>100</span>
                  <span>2000</span>
                </div>
              </div>

              {/* Average Order Value */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-dark/80">Average Order Value (£)</label>
                  <span className="text-primary-red font-semibold">£{averageOrderValue}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="1"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-light-gray rounded-lg appearance-none cursor-pointer accent-primary-red"
                />
                <div className="flex justify-between text-sm text-gray mt-1">
                  <span>£10</span>
                  <span>£50</span>
                </div>
              </div>

              {/* Platform Commission */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-dark/80">Current Platform Commission (%)</label>
                  <span className="text-primary-red font-semibold">{platformCommission}%</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  step="1"
                  value={platformCommission}
                  onChange={(e) => setPlatformCommission(Number(e.target.value))}
                  className="w-full h-2 bg-light-gray rounded-lg appearance-none cursor-pointer accent-primary-red"
                />
                <div className="flex justify-between text-sm text-gray mt-1">
                  <span>15%</span>
                  <span>40%</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-light-gray border border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray">Monthly Revenue</span>
                <span className="text-xl font-bold text-dark">£{monthlyRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray">Current Monthly Commission</span>
                <span className="text-xl font-bold text-primary-red">-£{currentCommissionPaid.toLocaleString()}</span>
              </div>
            </div>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card variant="glow" className="p-8 border-primary-red/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary-red/20 text-primary-red flex items-center justify-center">
                  <DollarSign className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray text-sm">Projected Monthly Savings</p>
                  <p className="text-3xl font-bold text-primary-red">£{Math.round(projectedSavings).toLocaleString()}</p>
                </div>
              </div>
              <p className="text-gray text-sm">
                By diverting orders to direct channels, you keep up to 95% of what you&apos;d normally pay in commissions.
              </p>
            </Card>

            <Card variant="glow" className="p-8 border-primary-red/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary-red/20 text-primary-red flex items-center justify-center">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-gray text-sm">Projected Revenue Increase</p>
                  <p className="text-3xl font-bold text-primary-red">+£{Math.round(revenueIncrease).toLocaleString()}/mo</p>
                </div>
              </div>
              <p className="text-gray text-sm">
                Our clients typically see a 35% increase in revenue through marketing and never missing orders.
              </p>
            </Card>

            <Card className="p-8 cta-gradient">
              <div className="text-center">
                <p className="text-white/80 text-sm mb-2">Total Annual Benefit</p>
                <p className="text-5xl font-bold text-white mb-4">£{Math.round(totalAnnualBenefit).toLocaleString()}</p>
                <p className="text-white/80 text-sm mb-6">
                  Combined savings and revenue growth per year
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-deep-navy hover:bg-cloud"
                  onClick={() => setShowLeadForm(true)}
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bar Chart - Profit Comparison */}
          <Card variant="glass" className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary-red" />
              <h3 className="text-xl font-bold text-dark">Monthly Profit Comparison</h3>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
                  <YAxis stroke="rgba(255,255,255,0.6)" tickFormatter={(value) => `£${value}`} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E3A5F', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#F8FAFC'
                    }}
                    formatter={(value) => [`£${Number(value).toLocaleString()}`, '']}
                  />
                  <Bar dataKey="profit" name="Profit" fill="#C41E3A" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="commission" name="Commission Lost" fill="rgba(255,255,255,0.2)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray text-sm text-center mt-4">
              See the difference in your monthly profits with TechTalk
            </p>
          </Card>

          {/* Pie Chart - Savings Breakdown */}
          <Card variant="glass" className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="w-5 h-5 text-primary-red" />
              <h3 className="text-xl font-bold text-dark">Monthly Benefit Breakdown</h3>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={savingsBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `£${value.toLocaleString()}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {savingsBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E3A5F', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#F8FAFC'
                    }}
                    formatter={(value) => [`£${Number(value).toLocaleString()}`, '']}
                  />
                  <Legend 
                    formatter={(value) => <span style={{ color: '#F8FAFC' }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray text-sm text-center mt-4">
              Your total monthly benefit of £{(Math.round(projectedSavings) + Math.round(revenueIncrease)).toLocaleString()}
            </p>
          </Card>
        </div>

        {/* Lead Capture Form Modal */}
        {showLeadForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <Card variant="glass" className="w-full max-w-md p-8 relative">
              <button 
                onClick={() => setShowLeadForm(false)}
                className="absolute top-4 right-4 text-gray hover:text-dark"
              >
                ✕
              </button>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary-red mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
                  <p className="text-gray mb-4">
                    We&apos;ve received your request. Based on your numbers, you could save 
                    <span className="text-primary-red font-bold"> £{Math.round(totalAnnualBenefit).toLocaleString()}/year</span>.
                  </p>
                  <p className="text-gray mb-6">
                    Our team will contact you within 24 hours to discuss your personalized savings plan.
                  </p>
                  <Button onClick={() => { setShowLeadForm(false); setFormSubmitted(false); }}>
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-dark mb-2">Get Your Personalized Quote</h3>
                  <p className="text-gray mb-6">
                    Based on your numbers, you could save <span className="text-primary-red font-bold">£{Math.round(totalAnnualBenefit).toLocaleString()}/year</span>. 
                    Let us create a custom plan for your business.
                  </p>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm text-dark/80 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-light-gray border border-gray-200 text-dark placeholder:text-gray focus:outline-none focus:border-primary-red transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-dark/80 mb-1">Business Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-light-gray border border-gray-200 text-dark placeholder:text-gray focus:outline-none focus:border-primary-red transition-colors"
                        placeholder="Your Restaurant Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-dark/80 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-light-gray border border-gray-200 text-dark placeholder:text-gray focus:outline-none focus:border-primary-red transition-colors"
                        placeholder="john@restaurant.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-dark/80 mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-light-gray border border-gray-200 text-dark placeholder:text-gray focus:outline-none focus:border-primary-red transition-colors"
                        placeholder="01234 567890"
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Get My Free Quote
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Card variant="glass" className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4">
              Ready to Start Saving?
            </h3>
            <p className="text-gray mb-6">
              These are projected savings based on our average client results. 
              Get a personalized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => setShowLeadForm(true)}>
                Get Personalized Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call 01254 961661
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
