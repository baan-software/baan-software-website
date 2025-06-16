import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { siteData } from '@/utils';

export const Hero: React.FC = React.memo(() => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleContactClick = (): void => {
    const contactSection = document.getElementById(siteData.hero.buttons.primary.action);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = (): void => {
    const aboutSection = document.getElementById(siteData.hero.buttons.secondary.action);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section pt-32 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary-300 to-success-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isLoaded && inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-primary-900 relative">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent animate-gradient">
                {siteData.hero.title}
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-700">
              {siteData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleContactClick}
                className="btn btn-primary bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <span className="flex items-center">
                  {siteData.hero.buttons.primary.text}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={handleLearnMoreClick}
                className="btn btn-secondary border-2 border-primary-600 text-primary-700 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700 hover:text-white hover:border-transparent shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {siteData.hero.buttons.secondary.text}
              </button>
            </div>
          </div>
          
          <div className={`${isLoaded && inView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-lg p-8 lg:p-12 rounded-2xl shadow-2xl border border-white/50 relative overflow-hidden">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/50 to-accent-50/30 opacity-70"></div>
              
              <div className="relative z-10 grid grid-cols-1 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl text-primary-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-primary-200/50">
                  <div className="text-4xl lg:text-5xl font-bold mb-2 animate-bounce-slow">{siteData.hero.statistics.experience.value}</div>
                  <div className="font-medium tracking-wide opacity-80">{siteData.hero.statistics.experience.label}</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl text-accent-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-accent-200/50">
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{siteData.hero.statistics.projects.value}</div>
                  <div className="font-medium tracking-wide opacity-80">{siteData.hero.statistics.projects.label}</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-success-100 to-success-200 rounded-xl text-success-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-success-200/50">
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{siteData.hero.statistics.satisfaction.value}</div>
                  <div className="font-medium tracking-wide opacity-80">{siteData.hero.statistics.satisfaction.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 