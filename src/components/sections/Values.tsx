import React from 'react';
import { useInView } from 'react-intersection-observer';
import { companyValues, siteData } from '@/utils';

export const Values: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const pastelColors = [
    'hover:bg-blue-50',
    'hover:bg-rose-50',
    'hover:bg-amber-50',
    'hover:bg-emerald-50',
    'hover:bg-violet-50',
    'hover:bg-cyan-50',
  ];

  return (
    <section id="values" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className={`mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="mb-4">{siteData.values.title}</h2>
            <p className="text-gray-500 max-w-2xl">
              {siteData.values.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white p-8 transition-all duration-200 hover:scale-105 ${pastelColors[index % pastelColors.length]} ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
