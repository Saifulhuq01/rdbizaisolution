import { Button } from '@/components/ui/button';
import hiringTeamImg1 from '@/assets/hire/hire1.jpeg';
import hiringTeamImg2 from '@/assets/hire/hire2.jpg';

const HiringSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-12 rounded-xl text-center my-16 fade-in">
      <h2 className="text-3xl font-bold gradient-text mb-4">
        Join Our AI Team
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
        We're building the future of intelligent automation and AI-driven enterprise solutions. 
        Join RDbiz AI Solutions and work alongside world-class data scientists, ML engineers, 
        and AI architects to solve the most challenging problems with artificial intelligence.
      </p>
      
      <div className="flex justify-center gap-6 mb-8">
        <div className="hover-lift">
          <img 
            src={hiringTeamImg1} 
            alt="Join Our AI Team" 
            className="w-full max-w-md rounded-xl shadow-medium"
          />
        </div>
        <div className="hover-lift">
          <img 
            src={hiringTeamImg2} 
            alt="Join Our AI Team" 
            className="w-full max-w-md rounded-xl shadow-medium"
          />
        </div>
      </div>

      <Button 
        size="lg" 
        className="bg-gradient-primary hover:shadow-strong pulse-glow text-primary-foreground font-semibold px-8 py-3"
      >
        Explore AI Career Opportunities
      </Button>
    </section>
  );
};

export default HiringSection;
