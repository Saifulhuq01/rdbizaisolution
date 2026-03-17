import { useState, useEffect } from 'react';
import { useCountUp } from '@/hooks/useAnimations';
import { Brain, Users, Award, Zap, TrendingUp, Globe } from 'lucide-react';

const stats = [
  { icon: Brain, value: 50, suffix: '+', label: 'AI Models Deployed', color: 'text-blue-500' },
  { icon: Users, value: 200, suffix: '+', label: 'Enterprise Clients', color: 'text-violet-500' },
  { icon: Award, value: 98, suffix: '%', label: 'Accuracy Rate', color: 'text-cyan-500' },
  { icon: TrendingUp, value: 60, suffix: '%', label: 'Avg Efficiency Gain', color: 'text-emerald-500' },
  { icon: Globe, value: 15, suffix: '+', label: 'Countries Served', color: 'text-amber-500' },
  { icon: Zap, value: 99, suffix: '.9%', label: 'System Uptime', color: 'text-pink-500' },
];

const StatCard = ({ icon: Icon, value, suffix, label, color, delay }: { icon: any; value: number; suffix: string; label: string; color: string; delay: number }) => {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div
      ref={ref}
      className="group relative bg-card border border-primary/10 rounded-2xl p-6 text-center hover-lift shimmer-overlay overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`inline-flex p-3 rounded-xl bg-background shadow-sm mb-3 ${color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="counter-value text-3xl font-extrabold text-foreground mb-1">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-primary font-bold uppercase tracking-widest text-sm">Our Impact in Numbers</p>
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Driving AI Excellence</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
