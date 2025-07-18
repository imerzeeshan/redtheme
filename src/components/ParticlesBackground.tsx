'use client';

import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== 'undefined') {
        await import('particles.js'); // Import the library

        // Access particlesJS from the global window object
        if (window.particlesJS) {
          window.particlesJS.load('particles-js', '/particles.json', () => {
            // console.log('callback - particles.js config loaded');
          });
        } else {
          // console.error('particlesJS not found on window object');
        }
      }
    };

    loadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default ParticlesBackground;
