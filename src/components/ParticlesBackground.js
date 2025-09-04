import React, { useEffect, useRef } from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      const particleCount = 120;
      const container = particlesContainerRef.current;
      
      if (!container) return;

      // Clear existing particles
      container.innerHTML = '';

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 10;
        const animationDelay = Math.random() * 20;

        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${x}%;
          animation-duration: ${animationDuration}s;
          animation-delay: ${animationDelay}s;
        `;

        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return <div className="particles-bg" ref={particlesContainerRef}></div>;
};

export default ParticlesBackground;