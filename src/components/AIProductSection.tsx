import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Brain, Cpu, Eye, Sparkles, Shield, Zap, Bot } from 'lucide-react';

const AIProductSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      icon: Brain,
      title: 'Machine Learning Platform',
      desc: 'End-to-end ML pipeline for model training, deployment & monitoring',
      color: 'text-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/5'
    },
    {
      id: 2,
      icon: Eye,
      title: 'Computer Vision Suite',
      desc: 'Advanced image recognition, object detection & video analytics',
      color: 'text-violet-600',
      bgColor: 'from-violet-500/10 to-violet-600/5'
    },
    {
      id: 3,
      icon: Cpu,
      title: 'NLP & Language AI',
      desc: 'Natural language processing, sentiment analysis & text generation',
      color: 'text-cyan-600',
      bgColor: 'from-cyan-500/10 to-cyan-600/5'
    },
    {
      id: 4,
      icon: Bot,
      title: 'Intelligent Automation',
      desc: 'RPA + AI powered workflow automation for enterprise processes',
      color: 'text-emerald-600',
      bgColor: 'from-emerald-500/10 to-emerald-600/5'
    },
  ];

  const points = [
    { icon: Brain, text: 'Deep Learning Architecture — Custom neural networks for complex problem solving.', color: 'text-blue-600' },
    { icon: Shield, text: 'Enterprise Security — SOC2 compliant, end-to-end encrypted AI inference pipelines.', color: 'text-indigo-600' },
    { icon: Cpu, text: 'Edge AI Deployment — On-device models for ultra-low-latency real-time processing.', color: 'text-cyan-600' },
    { icon: Sparkles, text: 'Generative AI — LLM fine-tuning, RAG pipelines & custom AI assistants.', color: 'text-violet-600' },
    { icon: Zap, text: 'MLOps Excellence — Automated CI/CD for model training, validation & deployment.', color: 'text-amber-600' },
    { icon: Eye, text: 'Predictive Analytics — Forecasting, anomaly detection & intelligent decision systems.', color: 'text-emerald-600' },
    { icon: Bot, text: 'AI Integration — Seamless API-first integration into any enterprise tech stack.', color: 'text-pink-600' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-16 fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary bg-primary/5 uppercase tracking-widest text-xs font-bold">
          RDbiz AI Products
        </Badge>
        <h2 className="text-4xl font-extrabold gradient-text tracking-tight">Intelligent Enterprise Solutions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          From machine learning platforms to cutting-edge computer vision —
          we deliver production-ready AI solutions that transform business operations.
        </p>
      </div>

      {/* 4 AI Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border border-primary/10 neural-glow`}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`aspect-[4/5] p-6 flex flex-col items-center justify-center bg-gradient-to-br ${product.bgColor} text-center`}>
              <div className={`p-4 rounded-2xl bg-white shadow-md mb-4 ${product.color} transition-transform duration-500 ${hoveredCard === product.id ? 'scale-110' : ''}`}>
                <product.icon className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 2 Row Text Section */}
      <div className="bg-card border border-primary/10 rounded-3xl p-8 md:p-12 shadow-soft">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Technology Promise</h3>
            <div className="space-y-5">
              {points.slice(0, 4).map((point, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className={`p-2 rounded-lg bg-background shadow-sm ${point.color} group-hover:scale-110 transition-transform`}>
                    <point.icon className="w-5 h-5" />
                  </div>
                  <p className="text-muted-foreground leading-snug">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 md:border-l md:pl-12 border-primary/10">
            <h3 className="text-2xl font-bold text-foreground">Why Choose RDBiz AI?</h3>
            <div className="space-y-5">
              {points.slice(4).map((point, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className={`p-2 rounded-lg bg-background shadow-sm ${point.color} group-hover:scale-110 transition-transform`}>
                    <point.icon className="w-5 h-5" />
                  </div>
                  <p className="text-muted-foreground leading-snug">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIProductSection;
