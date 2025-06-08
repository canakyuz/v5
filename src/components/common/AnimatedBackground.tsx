
import { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
      color: string;
      pulse: number;
    }> = [];

    const colors = [
      'rgba(59, 130, 246, 0.4)',  // blue
      'rgba(147, 51, 234, 0.3)',  // purple
      'rgba(79, 70, 229, 0.3)',   // indigo
      'rgba(236, 72, 153, 0.2)'   // pink
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.4 + 0.1,
          size: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.02;

        // Boundary collision with smooth bouncing
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Dynamic size based on pulse
        const dynamicSize = particle.size * (1 + Math.sin(particle.pulse) * 0.3);
        
        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, dynamicSize, 0, Math.PI * 2);
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, dynamicSize * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Enhanced connection lines
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            
            // Create gradient line
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            lineGradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`);
            lineGradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity * 0.8})`);
            lineGradient.addColorStop(1, `rgba(79, 70, 229, ${opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};
