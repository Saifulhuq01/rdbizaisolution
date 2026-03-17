import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Sparkles } from 'lucide-react';

const phrases = [
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Intelligent Automation',
  'Predictive Analytics',
];

const HeroBanner = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === phrase) {
      // Pause at the end of the word
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? phrase.substring(0, displayText.length - 1)
            : phrase.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-6 rounded-2xl mx-4 my-6 shadow-strong">
      {/* Animated background particles */}
      <div className="absolute inset-0 hero-particles" />
      <div className="absolute inset-0 tech-grid-bg opacity-10" />
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-violet-500/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.75s' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <Badge className="bg-white/10 text-white/90 border-white/20 px-4 py-1.5 text-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 mr-2" />
          Enterprise AI Solutions
        </Badge>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="block mb-2">Transforming Business with</span>
          <span className="inline-block min-w-[300px] text-left">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="animate-pulse text-blue-400 ml-0.5">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
          RDBiz AI Solution delivers enterprise-grade AI systems that automate operations, 
          unlock insights, and drive measurable business outcomes. 
          From POC to production — we make AI work for you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button 
            className="group px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => document.getElementById('review-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
            <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            className="px-8 py-3.5 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            onClick={() => {
              const el = document.querySelector('[data-tab="aiproducts"]');
              el?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            }}
          >
            Explore AI Products
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10 mt-8">
          {[
            { val: '50+', label: 'AI Deployments' },
            { val: '98%', label: 'Model Accuracy' },
            { val: '24/7', label: 'AI Monitoring' },
            { val: '15+', label: 'Countries' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold text-white counter-value">{item.val}</p>
              <p className="text-xs text-blue-200/60 font-medium uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
