import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { siteData } from '@/utils';

export const Hero: React.FC = React.memo(() => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };


  return (
    <section id="home" className="section section-hero pt-32 relative" ref={ref}>
      <div className="container">
        <div className={`max-w-2xl mx-auto text-center space-y-6 ${isLoaded && inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1>{siteData.hero.title}</h1>
          <p className="text-lg leading-relaxed text-gray-500">
            {siteData.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <button onClick={() => scrollToSection(siteData.hero.buttons.primary.action)} className="btn btn-primary">
              {siteData.hero.buttons.primary.text}
            </button>
            <button onClick={() => scrollToSection(siteData.hero.buttons.secondary.action)} className="btn btn-secondary">
              {siteData.hero.buttons.secondary.text}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center pointer-events-none">
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce cursor-pointer bg-transparent border-0 p-2 pointer-events-auto"
          aria-label="Scroll down"
        >
          <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
});
