import { Brain, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 mt-16 relative">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">RDbiz AI Solutions</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Enterprise-grade Artificial Intelligence, Machine Learning, and Intelligent Automation solutions.
              Transforming businesses through cutting-edge AI technology.
            </p>
            <div className="flex gap-3 pt-2">
              {['🧠', '⚡', '🌐', '📊'].map((emoji, i) => (
                <div key={i} className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-colors cursor-default text-sm">
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                'AI Products', 'AI Services', 'About Us', 'Gallery',
                'Our Mission', 'Our Vision', 'Our Values', 'Careers'
              ].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors py-1"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Old# 27/ New# 10, 9th Avenue, 45th Street, Ashok Nagar, Chennai, Tamil Nadu - 600083
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">(004) 31568424</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">info@rdbizai.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2025 RDbiz AI Solutions – Ravi Dakshinamoorthy's Business. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-500">
            Empowering Enterprises Through Artificial Intelligence & Intelligent Automation
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-5 right-8 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
