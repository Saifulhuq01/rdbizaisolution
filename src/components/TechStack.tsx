import { useScrollAnimation } from '@/hooks/useAnimations';

const techCategories = [
  {
    title: 'AI & Machine Learning',
    items: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Scikit-Learn', icon: '📊' },
      { name: 'Keras', icon: '⚡' },
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure AI', icon: '🔷' },
      { name: 'Google Cloud', icon: '🌐' },
      { name: 'Docker', icon: '🐳' },
    ]
  },
  {
    title: 'Data & Analytics',
    items: [
      { name: 'Apache Spark', icon: '✨' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
    ]
  },
  {
    title: 'MLOps & DevOps',
    items: [
      { name: 'Kubernetes', icon: '⎈' },
      { name: 'MLflow', icon: '📈' },
      { name: 'GitHub Actions', icon: '🔄' },
      { name: 'Terraform', icon: '🏗️' },
    ]
  },
];

const TechStack = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-secondary font-bold uppercase tracking-widest text-sm">Technology Stack</p>
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Powered by Best-in-Class AI Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We leverage the most advanced AI frameworks and cloud platforms to build production-ready intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, catIdx) => (
            <div 
              key={catIdx} 
              className={`bg-card border border-primary/10 rounded-2xl p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4 pb-3 border-b border-primary/10">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
