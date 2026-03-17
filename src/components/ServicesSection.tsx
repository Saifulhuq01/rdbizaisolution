import ServiceCard from './ServiceCard';
import realEstateImg from '@/assets/real-estate.jpg';
import relaxationImg from '@/assets/relaxation-center.jpg';
import officeImg from '@/assets/office-management.jpg';
import conferenceImg from '@/assets/conference-center.jpg';
import educationImg from '@/assets/education-center.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: "AI Research & Development Lab",
      description: "Our state-of-the-art R&D laboratory drives breakthrough innovations in machine learning, neural networks, and deep learning architectures. We push the boundaries of what's possible with enterprise AI solutions.",
      image: realEstateImg,
      reverse: false
    },
    {
      title: "AI Innovation Hub",
      description: "A dedicated space for creative experimentation and rapid prototyping of AI solutions. Our innovation hub fosters collaboration between data scientists, engineers, and domain experts to deliver cutting-edge AI products.",
      image: relaxationImg,
      reverse: true
    },
    {
      title: "Enterprise AI Operations Center",
      description: "Our fully-equipped operations center manages and monitors AI deployments at scale. We provide comprehensive MLOps, model monitoring, and continuous improvement services for enterprise-grade AI systems.",
      image: officeImg,
      reverse: false
    },
    {
      title: "AI Training & Conference Center",
      description: "Advanced training facilities equipped with GPU clusters and collaborative spaces for workshops, AI bootcamps, and executive briefings. We host industry-leading AI seminars and knowledge sharing events.",
      image: conferenceImg,
      reverse: true
    },
    {
      title: "AI Academy & Talent Development",
      description: "Comprehensive AI education programs spanning machine learning fundamentals to advanced deep learning. Our academy develops the next generation of AI engineers and data scientists through hands-on project-based learning.",
      image: educationImg,
      reverse: false
    }
  ];

  return (
    <section className="space-y-12">
      {services.map((service, index) => (
        <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
