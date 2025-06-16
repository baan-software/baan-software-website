import React, { useState, useEffect } from 'react';
import { navigationItems, scrollToSection, siteData } from '@/utils';
import { INavigationItem } from '@/types';

export const Header: React.FC = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Determine active section
      const sections = ['home', 'about', 'values', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: INavigationItem): void => {
    scrollToSection(item.section);
  };

  const handleLogoClick = (): void => {
    scrollToSection('home');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
        isScrolled 
          ? 'bg-white/95 border-b border-gray-200 shadow-lg' 
          : 'bg-white/90 border-b border-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 bg-transparent border-0 cursor-pointer p-0 hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src={siteData.company.logoPath}
              alt={siteData.company.logoAlt}
              className="h-10 w-10"
              style={{ 
                filter: 'brightness(0) saturate(100%) invert(11%) sepia(9%) saturate(2148%) hue-rotate(181deg) brightness(95%) contrast(95%)'
              }}
            />
            <span className="text-2xl font-bold text-primary-900 tracking-tight">
              {siteData.company.name}
            </span>
          </button>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigationItems.map((item) => (
                <li key={item.section}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`relative px-0 py-2 text-sm font-medium transition-colors duration-200 tracking-wide border-0 bg-transparent cursor-pointer ${
                      activeSection === item.section 
                        ? 'text-primary-900' 
                        : 'text-gray-600 hover:text-primary-700'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.section && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-700 animate-slide-in" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}); 