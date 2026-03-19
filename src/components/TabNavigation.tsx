import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X, ChevronDown, Home, Target, Eye, Heart, Users } from 'lucide-react';
import ServicesSection from './ServicesSection';
import HiringSection from './HiringSection';
import TestimonialsSection from './TestimonialsSection';
import ReviewSection from './ReviewSection';
import HRPoliciesSection from './HRPoliciesSection';
import AIProductSection from './AIProductSection';
import AIServiceSection from './AIServiceSection';
import HeroBanner from './HeroBanner';
import AnimatedStats from './AnimatedStats';
import TechStack from './TechStack';
import off1 from '@/assets/office/off1.jpeg.jpg';
import off2 from '@/assets/office/off2.jpeg.jpg';
import off3 from '@/assets/office/off3.jpeg.jpg';
import off4 from '@/assets/office/off4.jpeg.jpg';
import off5 from '@/assets/office/off5.jpeg.jpeg';
import off6 from '@/assets/office/off6.jpeg.jpg';
import off7 from '@/assets/office/off7.jpeg.jpg';
import off8 from '@/assets/office/off8.jpeg';
import off9 from '@/assets/office/off9.jpeg';
import off10 from '@/assets/office/off10.jpeg';
import off11 from '@/assets/office/off11.jpeg';
import off12 from '@/assets/office/off12.jpeg';
import off13 from '@/assets/office/off13.jpeg';
import off14 from '@/assets/office/off14.jpeg';
import off15 from '@/assets/office/off15.jpeg';
import conference from '@/assets/conference-center.jpg';
import education from '@/assets/education-center.jpg';
import officeMgmt from '@/assets/office-management.jpg';
import realEstate from '@/assets/real-estate.jpg';
import relaxation from '@/assets/relaxation-center.jpg';
import hiringTeam from '@/assets/hiring-team.jpg';
import ceoRavi from '@/assets/ceo-ravi.jpg';

type TabType = 'home' | 'vision' | 'mission' | 'values' | 'hrvalue' | 'aiproducts' | 'aiservice' | 'about' | 'gallery';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHomeModalOpen, setIsHomeModalOpen] = useState(false);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: off1,
      alt: 'RDbiz AI Modern Office Space',
      category: 'Achievement'
    },
    {
      id: 2,
      src: off2,
      alt: 'AI Conference Success',
      category: 'Celebration'
    },
    {
      id: 3,
      src: off3,
      alt: 'AI Academy Training Center',
      category: 'Achievement'
    },
    {
      id: 4,
      src: off4,
      alt: 'AI Innovation Lab',
      category: 'Achievement'
    },
    {
      id: 5,
      src: off5,
      alt: 'Team Building Success',
      category: 'Celebration'
    },
    {
      id: 6,
      src: off6,
      alt: 'Professional AI Development',
      category: 'Achievement'
    },
    {
      id: 7,
      src: off7,
      alt: 'AI Development Hub',
      category: 'Achievement'
    },
    {
      id: 8,
      src: off8,
      alt: 'RDbiz Office Collaboration',
      category: 'Achievement'
    },
    {
      id: 9,
      src: off9,
      alt: 'Team Discussion Area',
      category: 'Celebration'
    },
    {
      id: 10,
      src: off10,
      alt: 'AI Research Unit',
      category: 'Achievement'
    },
    {
      id: 11,
      src: off11,
      alt: 'Modern Workspace Design',
      category: 'Achievement'
    },
    {
      id: 12,
      src: off12,
      alt: 'Corporate Meeting Area',
      category: 'Celebration'
    },
    {
      id: 13,
      src: off13,
      alt: 'AI Development Unit',
      category: 'Achievement'
    },
    {
      id: 14,
      src: off14,
      alt: 'Technical Innovation Center',
      category: 'Achievement'
    },
    {
      id: 15,
      src: off15,
      alt: 'Creative Working Space',
      category: 'Celebration'
    },
    {
      id: 16,
      src: conference,
      alt: 'RDbiz AI Conference Center',
      category: 'Achievement'
    },
    {
      id: 17,
      src: education,
      alt: 'AI Training & Education Hub',
      category: 'Achievement'
    },
    {
      id: 18,
      src: officeMgmt,
      alt: 'AI Operations Management',
      category: 'Celebration'
    },
    {
      id: 19,
      src: realEstate,
      alt: 'AI Research Facility',
      category: 'Achievement'
    },
    {
      id: 20,
      src: relaxation,
      alt: 'Innovation & Wellness Area',
      category: 'Celebration'
    },
    {
      id: 21,
      src: hiringTeam,
      alt: 'RDbiz AI Talent Team',
      category: 'Celebration'
    },
    {
      id: 22,
      src: ceoRavi,
      alt: 'CEO Dr. Ravi Dakshinamoorthy',
      category: 'Achievement'
    }
  ];

  const achievements = [
    '🏆 Successfully deployed AI solutions for 50+ enterprise clients',
    '🎯 Achieved 98% model accuracy across production deployments',
    '📈 Helped clients increase operational efficiency by an average of 60%',
    '🌟 Established AI research partnerships with global institutions',
    '💼 Created 200+ AI engineering career opportunities',
    '🏢 Built state-of-the-art AI research and innovation centers'
  ];

  const tabs = [
    { id: 'aiproducts', label: 'RDbiz AI Products' },
    { id: 'aiservice', label: 'RDbiz AI Service' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="fade-in">
            {/* Hero Banner with Typewriter Animation */}
            <HeroBanner />

            {/* Animated Stats Counter */}
            <AnimatedStats />

            <div className="max-w-6xl mx-auto px-6 py-8">
              <section className="text-center mb-16 fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  We focus on developing cutting-edge <strong className="text-primary">Artificial Intelligence</strong> and{' '}
                  <strong className="text-primary">Machine Learning solutions</strong> to help enterprises
                  transform their operations, automate complex workflows, and unlock data-driven insights.
                  <br /><br />
                  RDbiz AI Solutions meets <strong className="text-primary">"Service Oriented Architecture (SOA)"</strong> and{' '}
                  <strong className="text-primary">"Net Enabled SOA"</strong> standards,
                  delivering high-performance, enterprise-grade AI systems that match world-class standards.
                </p>
              </section>
              <ServicesSection />

              {/* Technology Stack */}
              <TechStack />

              <HiringSection />

              {/* Testimonials */}
              <TestimonialsSection />
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="max-w-4xl mx-auto p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8">RDbiz AI Solutions VISION STATEMENTS</h2>
            <div className="space-y-6 text-foreground">
              <div className="bg-accent/20 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">People working together, providing intelligent AI solutions through:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Service Oriented Architecture (SOA) powered by AI</li>
                  <li>• System of Systems Philosophy with Machine Learning at core</li>
                  <li>• Innovation implementing value-adding AI features (products and services)</li>
                  <li>• Intelligent capabilities to our customer bases and end users</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">We focus on our AI Products and Services to help our customer bases, including:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Enterprise AI Platforms & Machine Learning Pipelines</li>
                  <li>• SET-ME (Science, Engineering and Technology AI Institution)</li>
                  <li>• AI-powered conference and collaboration centers</li>
                  <li>• Helping enterprises deploy cost-effective AI solutions at scale</li>
                </ul>
              </div>

              <div className="bg-secondary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">Our vision support plan also focuses on:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Quality and Reliability metrics for AI model performance</li>
                  <li>• Leveraging partnerships with AI research labs and universities</li>
                  <li>• Collaborating with governments worldwide on AI initiatives</li>
                  <li>• Fostering an inclusive and diverse AI workforce</li>
                  <li>• Aspiring to be the best AI solution provider in our serving markets</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'mission':
        return (
          <div className="max-w-4xl mx-auto p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8">RDbiz AI Solutions MISSION STATEMENTS</h2>
            <div className="space-y-6 text-foreground">
              <div className="bg-accent/20 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">We do "AI Operations Support System" (AI-OSS) covering:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Model Performance Monitoring</li>
                  <li>• Configuration & Hyperparameter Management</li>
                  <li>• Cost Accounting & Resource Optimization</li>
                  <li>• AI Pipeline Performance Analytics</li>
                  <li>• ML Systems Management & Governance</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-3">Our AI System comprises of:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Data Engineering & Feature Stores (DOTMLPF)</li>
                  <li>• MLOps & AI Operations</li>
                  <li>• AI Training & Knowledge Transfer</li>
                  <li>• Hardware & Software AI Infrastructure</li>
                  <li>• Data Logistics & Pipeline Orchestration</li>
                  <li>• AI Process Automation</li>
                  <li>• GPU Facilities with data / meta-data metrics implementation</li>
                </ul>
              </div>

              <div className="bg-secondary/5 p-6 rounded-lg">
                <p className="font-semibold text-secondary mb-3">We develop "AI-Powered Service Oriented Architecture (SOA) Systems".</p>
                <h3 className="font-semibold text-secondary mb-3 mt-6">We define & develop AI products and services to cater to our customers' needs, providing:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li>• Cost effectiveness through intelligent automation</li>
                  <li>• Risk reductions via predictive analytics</li>
                  <li>• Marketability through AI-driven insights</li>
                  <li>• Benefits and profitability from ML optimization</li>
                  <li>• Career advancement for AI engineers, data scientists, interns, and partners</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'values':
        return (
          <div className="max-w-4xl mx-auto p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8">RDbiz AI Solutions VALUES STATEMENTS</h2>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
              <h3 className="font-semibold text-secondary mb-4 text-lg">We take on responsibility for our mission to:</h3>
              <ul className="space-y-3 ml-6 text-muted-foreground text-lg leading-relaxed">
                <li>• Design, build, and deploy AI solutions for our enterprise customers</li>
                <li>• Meet high quality and reliability standards for AI model performance</li>
                <li>• Ensure ethical, responsible, and sound decision-making in AI processes</li>
              </ul>
            </div>
          </div>
        );

      case 'hrvalue':
        return <HRPoliciesSection />;

      case 'aiproducts':
        return <AIProductSection />;

      case 'aiservice':
        return <AIServiceSection />;

      case 'about':
        return (
          <div className="max-w-4xl mx-auto p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">About Us</h2>

            {/* Company Description */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                RDbiz AI Solutions is dedicated to empowering enterprises through cutting-edge{' '}
                <span className="font-bold text-primary">Artificial Intelligence</span> and{' '}
                <span className="font-bold text-secondary">Machine Learning solutions</span>.
                Founded by visionary technology leader Dr. Ravi Dakshinamoorthy, we combine
                <span className="font-bold text-secondary"> American AI expertise</span> with
                <span className="font-bold text-primary"> global innovation</span> to deliver
                world-class AI systems that transform business operations.
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-primary/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-semibold">📍 Address:</span>
                    <span>Old# 27/ New# 10, 9th Avenue, 45th Street, Ashok Nagar, Chennai, Tamil Nadu - 600083</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-semibold">📞 Phone:</span>
                    <span className="font-mono">(004) 31568424</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-secondary/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary mb-4">Key Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-primary">Enterprise AI</strong> Expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-secondary">Deep Learning</strong> Research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-primary">MLOps</strong> Excellence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-secondary">Global AI</strong> Partnerships</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground"><strong className="text-primary">24/7</strong> AI Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-secondary mb-3">Business Hours</h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div>
                  <span className="font-semibold text-primary">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </div>
                <div>
                  <span className="font-semibold text-primary">Saturday:</span> 10:00 AM - 4:00 PM
                </div>
              </div>
              <p className="mt-2 text-sm italic">Closed on Sundays and major holidays</p>
            </div>

            {/* Decorative Divider */}
            <div className="my-12 tech-divider" />

            {/* Customer Review Form */}
            <ReviewSection />
          </div>
        );

      case 'gallery':
        return (
          <div className="max-w-7xl mx-auto p-4 sm:p-8 fade-in">
            <h2 className="text-3xl font-bold gradient-text mb-8 text-center">Our Achievements & Milestones</h2>

            {/* Achievements Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-secondary mb-6 text-center">Key AI Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-card border border-primary/20 p-4 rounded-lg">
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Grid - Wider Rectangles */}
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="group cursor-pointer relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-muted"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="aspect-[21/9] w-full relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <p className="text-white font-bold text-lg">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Screen Image Modal - Vertically Scrollable */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
              <DialogContent className="max-w-7xl w-[98vw] h-[94vh] p-0 overflow-y-auto bg-black/95 border-none">
                <div className="sticky top-0 right-0 z-50 flex justify-end p-4 pointer-events-none">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 pointer-events-auto rounded-full backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                {selectedImage && (
                  <div className="flex flex-col items-center px-4 pb-12 -mt-12">
                    <img
                      src={selectedImage}
                      alt="Full screen view"
                      className="w-full h-auto rounded-lg shadow-2xl transition-all duration-500"
                    />
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-8 bg-card rounded-xl shadow-medium overflow-hidden">
      {/* Tab Buttons */}
      <div className="flex flex-wrap border-b-2 border-primary sticky top-0 bg-card z-50 shadow-sm">
        <Dialog open={isHomeModalOpen} onOpenChange={setIsHomeModalOpen}>
          <Button
            variant="ghost"
            onClick={() => setIsHomeModalOpen(true)}
            className={`flex-1 min-w-fit px-6 py-4 text-base font-semibold rounded-none transition-all duration-300 ${['home', 'mission', 'vision', 'values', 'hrvalue'].includes(activeTab)
              ? 'bg-primary text-primary-foreground border-b-4 border-primary shadow-inner scale-100'
              : 'bg-card hover:bg-primary/10 text-foreground hover:text-primary border-b-4 border-transparent hover:border-primary/50'
              }`}
          >
            Home <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
          </Button>

          <DialogContent className="max-w-3xl bg-card border-2 border-primary shadow-2xl rounded-2xl p-0 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <DialogHeader className="p-6 bg-primary text-primary-foreground">
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                <Home className="h-6 w-6" /> Explore Home Sections
              </DialogTitle>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 bg-gradient-to-br from-card to-primary/5">
              {[
                { id: 'home', label: 'Home Dashboard', icon: Home, desc: 'Overview of AI solutions & services' },
                { id: 'mission', label: 'Our Mission', icon: Target, desc: 'Our AI goals & operations' },
                { id: 'vision', label: 'Our Vision', icon: Eye, desc: 'Future AI plans & philosophy' },
                { id: 'values', label: 'Our Values', icon: Heart, desc: 'Core AI principles we follow' },
                { id: 'hrvalue', label: 'RDbiz AI HR/Value', icon: Users, desc: 'Career & people development' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id as TabType);
                    setIsHomeModalOpen(false);
                  }}
                  className={`group flex flex-col items-center text-center p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${activeTab === item.id
                    ? 'border-primary bg-primary/10'
                    : 'border-transparent bg-muted/30 hover:border-primary/50 hover:bg-primary/5'
                    }`}
                >
                  <div className={`p-4 rounded-full mb-4 transition-colors duration-300 ${activeTab === item.id ? 'bg-primary text-primary-foreground' : 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                    }`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <span className="text-lg font-bold mb-1 text-foreground">{item.label}</span>
                  <span className="text-sm text-muted-foreground leading-tight">{item.desc}</span>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            className={`flex-1 min-w-fit px-6 py-4 text-base font-semibold rounded-none transition-all duration-300 ${activeTab === tab.id
              ? 'bg-primary text-primary-foreground border-b-4 border-primary shadow-inner scale-100'
              : 'bg-card hover:bg-primary/10 text-foreground hover:text-primary border-b-4 border-transparent hover:border-primary/50'
              }`}
            onClick={() => setActiveTab(tab.id as TabType)}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabNavigation;
