import React from 'react';
import { useInView } from 'react-intersection-observer';
import { siteData } from '@/utils';

export const Contact: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className={`space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2>{siteData.contact.title}</h2>

            <p className="text-gray-500">
              {siteData.contact.description}
            </p>

            <div className="pt-4">
              <a
                href={`mailto:${siteData.contact.email}`}
                className="btn btn-primary"
              >
                {siteData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
