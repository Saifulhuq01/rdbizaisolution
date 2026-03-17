import { useState, useEffect } from 'react';
import rdbizLogo from '@/assets/logo.jpg';

const FloatingLogo = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const moveRandomly = () => {
      const newX = Math.random() * (window.innerWidth - 80);
      const newY = Math.random() * (window.innerHeight - 80);
      setPosition({ x: newX, y: newY });
    };

    const interval = setInterval(moveRandomly, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInteraction = () => {
    setIsSpinning(true);
    // Move to a new random position on interaction
    const newX = Math.random() * (window.innerWidth - 80);
    const newY = Math.random() * (window.innerHeight - 80);
    setPosition({ x: newX, y: newY });
    
    // Stop spinning after animation
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <div
      className="fixed z-50 cursor-pointer transition-all duration-1000 ease-in-out hover:scale-110"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isSpinning ? 'rotate(720deg) scale(1.2)' : 'rotate(0deg)',
        transition: isSpinning ? 'transform 1s ease-in-out' : 'left 1s ease-in-out, top 1s ease-in-out',
      }}
      onClick={handleInteraction}
      onMouseEnter={() => setIsSpinning(true)}
      onMouseLeave={() => setIsSpinning(false)}
    >
      <img 
        src={rdbizLogo} 
        alt="Floating RDBiz AI Logo" 
        className="w-16 h-16 rounded-full border-2 border-primary/30 shadow-medium opacity-80 hover:opacity-100"
      />
    </div>
  );
};

export default FloatingLogo;
