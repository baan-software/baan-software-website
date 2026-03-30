import React from 'react';
import { useInView } from 'react-intersection-observer';
import { siteData } from '@/utils';

export const About: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-primary-900">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent">
                {siteData.about.title}
              </span>
            </h2>
            
            <div className="space-y-6 text-left mb-16">
              {siteData.about.description.map((paragraph, index) => {
                const founderName = siteData.about.founder.name;
                const parts = paragraph.split(founderName);
                return (
                  <p key={index} className="text-xl leading-relaxed">
                    {parts.length > 1 ? (
                      <>
                        {parts[0]}
                        <a
                          href={siteData.about.founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-primary-900 hover:text-primary-700 transition-colors duration-200 underline decoration-2 underline-offset-2"
                        >
                          {founderName}
                        </a>
                        {parts.slice(1).join(founderName)}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                );
              })}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {siteData.about.expertise.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-900 mb-3">{item.title}</div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 