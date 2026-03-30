import React from 'react';
import { useInView } from 'react-intersection-observer';
import { siteData } from '@/utils';

export const About: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className={`space-y-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2>{siteData.about.title}</h2>

            <div className="space-y-4">
              {siteData.about.description.map((paragraph, index) => {
                const founderName = siteData.about.founder.name;
                const parts = paragraph.split(founderName);
                return (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {parts.length > 1 ? (
                      <>
                        {parts[0]}
                        <a
                          href={siteData.about.founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-gray-900 hover:text-primary-700 underline underline-offset-2 transition-colors duration-200"
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

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {siteData.about.expertise.map((item, index) => (
                <div key={index}>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
