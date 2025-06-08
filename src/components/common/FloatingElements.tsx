
import { useEffect, useState } from 'react';

export const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};
