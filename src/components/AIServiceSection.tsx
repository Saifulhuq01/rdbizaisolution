import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Info, PhoneCall, CalendarDays, Layers, Star, Brain, Cpu, Bot } from 'lucide-react';
import ReviewSection from './ReviewSection';

const AIServiceSection = () => {
  const aiServices = [
    { 
      label: 'AI Starter Package', 
      icon: Brain, 
      desc: 'POC & prototype — perfect for AI validation', 
      tier: 'Starter',
      features: ['1 AI Model', 'Basic Training', '30-day Support']
    },
    { 
      label: 'Enterprise AI Suite', 
      icon: Cpu, 
      desc: 'Full-stack AI deployment with MLOps', 
      tier: 'Enterprise',
      features: ['Multi-Model', 'CI/CD Pipeline', '24/7 Monitoring']
    },
    { 
      label: 'AI Transformation Program', 
      icon: Bot, 
      desc: 'End-to-end AI strategy & implementation', 
      tier: 'Premium',
      features: ['Custom Models', 'Dedicated Team', 'Ongoing Optimization']
    },
  ];

  const engagementModels = [
    { icon: Brain, label: 'AI Consulting & Strategy' },
    { icon: Cpu, label: 'Custom AI Model Development' },
    { icon: Bot, label: 'AI Integration & Deployment' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-20 fade-in">

      {/* AI Service Tiers */}
      <div className="text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold gradient-text">AI Service Packages</h2>
          <p className="text-muted-foreground text-lg">Scalable AI solutions tailored to your enterprise needs and maturity level.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {aiServices.map((service, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-4 group">
              <div
                className="w-32 h-32 rounded-2xl bg-white shadow-xl border-4 border-primary/20 overflow-hidden transform transition-all duration-500 group-hover:scale-110 flex items-center justify-center relative neural-glow"
              >
                <service.icon className="w-14 h-14 text-primary" />
                <div className="absolute bottom-0 inset-x-0 bg-primary/80 text-white text-[10px] font-bold py-1">
                  {service.tier}
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h4 className="font-bold text-xl">{service.label}</h4>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
                <div className="flex flex-col gap-1 pt-2">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs text-primary bg-primary/5 px-3 py-1 rounded-full">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Models */}
      <div className="grid lg:grid-cols-2 gap-12 items-center bg-secondary/5 rounded-3xl p-8 md:p-12 border border-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Layers className="w-48 h-48" />
        </div>

        <div className="space-y-8 relative z-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <CalendarDays className="text-secondary" />
              Engagement Models
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer flexible engagement models from <strong className="text-primary">proof-of-concept sprints</strong> to 
              <strong className="text-primary"> full-scale AI transformation programs</strong>.
            </p>
          </div>

          <Card className="p-6 border-l-4 border-l-secondary bg-white/50 backdrop-blur-sm">
            <div className="flex gap-4">
              <Info className="text-secondary w-6 h-6 shrink-0" />
              <div className="space-y-2">
                <p className="font-bold text-lg">Need a Custom AI Solution?</p>
                <p className="text-muted-foreground">
                  Our AI architects and data scientists can design bespoke solutions 
                  tailored to your unique business challenges. Let's discuss your AI vision.
                </p>
                <div className="pt-2">
                  <Button
                    variant="default"
                    className="bg-secondary hover:bg-secondary/90 text-white rounded-full"
                    onClick={() => {
                      document.getElementById('review-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Schedule AI Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {engagementModels.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-md border-2 border-white bg-gradient-to-br from-primary/5 to-secondary/5 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-8 h-8" />
                </div>
                <p className="text-lg font-bold text-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Review */}
      <div className="pt-12 border-t border-primary/10">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
            <Star className="w-4 h-4 fill-primary" />
            Client Testimonials
            <Star className="w-4 h-4 fill-primary" />
          </div>
          <h3 className="text-3xl font-bold">What Our AI Partners Say</h3>
        </div>
        <ReviewSection />
      </div>
    </div>
  );
};

export default AIServiceSection;
