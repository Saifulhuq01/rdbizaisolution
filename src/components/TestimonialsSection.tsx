import testimonialJane from '@/assets/testimonial-jane.jpg';
import testimonialJohn from '@/assets/testimonial-john.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechVista Corp",
      content: "RDBiz AI Solution transformed our operations with their intelligent automation platform. Their deep expertise in machine learning and NLP helped us reduce manual processes by 75%. The team's ability to understand complex enterprise requirements is truly world-class.",
      image: testimonialJane
    },
    {
      name: "Michael Roberts",
      role: "VP Engineering, DataFlow Inc",
      content: "The AI models developed by RDBiz AI Solution exceeded our expectations. Their computer vision solution improved our quality inspection accuracy to 99.2%. We've seen a 3x ROI within the first year of deployment. Exceptional technical leadership and delivery.",
      image: testimonialJohn
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 fade-in">
      <h2 className="text-3xl font-bold gradient-text text-center mb-12">
        What Our Clients Say
      </h2>
      
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="flex items-start gap-6 p-6 bg-gradient-to-r from-accent/20 to-primary/5 rounded-xl hover-lift"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-20 h-20 rounded-full border-2 border-primary object-cover flex-shrink-0"
            />
            
            <div className="flex-1">
              <div className="mb-3">
                <h4 className="font-bold text-secondary text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-primary text-sm font-medium">
                  {testimonial.role}
                </p>
              </div>
              
              <blockquote className="text-muted-foreground leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
