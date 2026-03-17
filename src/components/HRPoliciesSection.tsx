import { 
  Heart, 
  Ear, 
  MessageSquare, 
  ShieldAlert, 
  Sparkles, 
  Clock, 
  Timer, 
  Scale, 
  Users, 
  Brain, 
  Award,
  Signature
} from 'lucide-react';

const HRPolicyCard = ({ icon: Icon, title, description, badge }: { icon: any, title: string, description: string, badge?: string }) => (
  <div className="bg-card border border-primary/10 rounded-xl p-6 hover-lift transition-all duration-300 shadow-soft group">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-foreground text-lg">{title}</h4>
          {badge && <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-secondary/10 text-secondary rounded-full">{badge}</span>}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const HRPoliciesSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-12 fade-in">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">HR Policies & Core Values</h2>
        <p className="text-muted-foreground leading-relaxed">
          At RDBiz AI Solution, our culture is built on mutual respect, elite communication, 
          and a relentless focus on innovation, quality, and time management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Culture & Communication */}
        <HRPolicyCard 
          icon={Heart} 
          title="Respect for Individuals" 
          description="The foundation of our culture. We treat every voice with dignity and professional courtesy."
        />
        <HRPolicyCard 
          icon={Ear} 
          title="High Gain Listener" 
          description="We listen to understand, not just to reply. Elite listening is the key to elite AI solutions."
        />
        <HRPolicyCard 
          icon={MessageSquare} 
          title="Open & Honest Communication" 
          description="We foster an environment where transparency and honesty are institutionalized."
        />

        {/* Micro-Dynamics */}
        <HRPolicyCard 
          icon={ShieldAlert} 
          title="Micro Inequities Awareness" 
          description="We actively avoid subtle slights or exclusions. Everyone belongs at RDBiz AI Solution."
          badge="Critical"
        />
        <HRPolicyCard 
          icon={Sparkles} 
          title="Power of Small" 
          description="Harnessing micro-advantages and small incremental progress leads to massive AI breakthroughs."
        />
        <HRPolicyCard 
          icon={MessageSquare} 
          title="Micro Advantages" 
          description="Encouraging positive micro-messages to build confidence and momentum within the AI team."
        />

        {/* Time & Discipline */}
        <HRPolicyCard 
          icon={Clock} 
          title="Timing & Punctuality" 
          description="Reliability begins with keeping up to the timing. We are a team that delivers AI solutions on time."
        />
        <HRPolicyCard 
          icon={Timer} 
          title="Valuing Others' Time" 
          description="Respecting a colleague's time is a core professional value. It shows character and focus."
          badge="Priority"
        />
        <HRPolicyCard 
          icon={Scale} 
          title="Time Management" 
          description="Elite scheduling and prioritization ensure we remain productive without burnout."
        />

        {/* Collaboration */}
        <HRPolicyCard 
          icon={Brain} 
          title="Healthy Argument" 
          description="Debate is encouraged until a decision is made. Once decided, we move as one."
        />
        <HRPolicyCard 
          icon={Users} 
          title="Systematic Agenda" 
          description="Professional preparation: Topics, presenters, and full commitment are required for every meeting."
        />
        <HRPolicyCard 
          icon={Users} 
          title="Employee Involvement" 
          description="Total coordination and helping teammates is not just encouraged—it's a must."
        />
      </div>

      {/* Main Motto Section */}
      <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 shadow-medium border border-primary/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Award className="w-24 h-24" />
        </div>
        
        <div className="max-w-3xl relative z-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Sparkles className="text-secondary w-6 h-6" />
              Our Core Philosophy
            </h3>
            <p className="text-lg text-secondary font-semibold italic">
              "Working Smart for SMART goals is preferred over 'Work Hard' philosophies."
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10">
            <p className="text-xl font-bold leading-relaxed gradient-text">
              "While reducing the risks, improving products, process, and program quality/reliability is our main motto!"
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Signature className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-foreground">Ravi Dakshinamoorthy</p>
              <p className="text-sm text-muted-foreground">Signed: RDBiz AI Solution CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRPoliciesSection;
