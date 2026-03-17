interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}

const ServiceCard = ({ title, description, image, reverse }: ServiceCardProps) => {
  return (
    <div className={`
      flex items-center justify-between gap-8 mb-12 p-8 
      bg-card rounded-xl shadow-soft service-card
      ${reverse ? 'flex-row-reverse' : 'flex-row'}
      max-lg:flex-col max-lg:text-center
    `}>
      {/* Text Content */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-secondary border-l-4 border-primary pl-4">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 text-center">
        <img 
          src={image} 
          alt={title}
          className="w-full max-w-lg rounded-lg shadow-medium hover-lift object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
