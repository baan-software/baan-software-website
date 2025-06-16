import React from 'react';
import { useInView } from 'react-intersection-observer';
import { siteData } from '@/utils';

export const About: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section bg-gray-50" ref={ref}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-primary-900">{siteData.about.title}</h2>
            
            <div className="space-y-6 text-left mb-16">
              {siteData.about.description.map((paragraph, index) => (
                <p key={index} className="text-xl leading-relaxed">
                  {index === 0 ? (
                    <>
                      Baan Software was founded by{' '}
                      <a 
                        href={siteData.about.founder.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-primary-900 hover:text-primary-700 transition-colors duration-200 underline decoration-2 underline-offset-2"
                      >
                        {siteData.about.founder.name}
                      </a>
                      , a seasoned software developer 
                      with {siteData.about.founder.experience} of experience. Giora has worked on a diverse range of projects, 
                      including mobile and web applications, mobile SDKs, server-side systems, and more.
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
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