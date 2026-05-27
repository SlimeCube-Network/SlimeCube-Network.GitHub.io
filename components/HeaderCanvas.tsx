'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  pos: { x: number; y: number };
  alpha: number;
  scale: number;
  velocity: number;
}

export function HeaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const largeHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const largeHeader = largeHeaderRef.current;

    if (!canvas || !largeHeader) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let canScroll = true;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = largeHeader.offsetHeight;

      particlesRef.current = [];
      for (let i = 0; i < Math.ceil(window.innerWidth * 0.02); i++) {
        particlesRef.current.push(createParticle());
      }
    };

    const createParticle = (): Particle => {
      return {
        pos: {
          x: Math.random() * canvas.width,
          y: largeHeader.offsetHeight + 100 * Math.random()
        },
        alpha: 0.1 + 0.3 * Math.random(),
        scale: 0.3 + 0.3 * Math.random(),
        velocity: Math.random()
      };
    };

    const drawParticle = (particle: Particle) => {
      if (particle.alpha <= 0) {
        Object.assign(particle, createParticle());
      }

      particle.pos.y -= particle.velocity;
      particle.alpha -= 0.0006;

      ctx.beginPath();
      ctx.arc(particle.pos.x, particle.pos.y, 10 * particle.scale, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(254, 135, 30, ${particle.alpha})`;
      ctx.fill();
    };

    const animate = () => {
      if (canScroll) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesRef.current.forEach(drawParticle);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', () => {
      canScroll = !(document.documentElement.scrollTop > largeHeader.offsetHeight);
    });

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', () => {});
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div ref={largeHeaderRef} className="relative">
      <canvas
        ref={canvasRef}
        id="slimecube-header-canvas"
        width={1280}
        height={380}
        className="w-full"
      />
    </div>
  );
}