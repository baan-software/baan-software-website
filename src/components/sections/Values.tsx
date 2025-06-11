import React from 'react';
import { useInView } from 'react-intersection-observer';
import { companyValues } from '@/utils';

export const Values: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const getValueIcon = (title: string): JSX.Element => {
    switch (title) {
      case 'Listening':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 12.464a5 5 0 010-7.072M18.364 9.636a9 9 0 010 12.728M6 10v4a2 2 0 002 2h2l4 4v-16l-4 4H8a2 2 0 00-2 2z" />
          </svg>
        );
      case 'Full Engagement':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'Long-Term Support':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'Maintainable Code':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'Latest Technologies':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
    }
  };

  const getGradientColor = (index: number): string => {
    const gradients = [
      'from-primary-500 to-primary-600',
      'from-accent-500 to-accent-600',
      'from-success-500 to-success-600',
      'from-secondary-500 to-secondary-600',
      'from-warning-500 to-warning-600',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="values" className="section bg-gradient-to-br from-white via-gray-50 to-primary-50/30 relative" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-16 w-64 h-64 bg-gradient-to-r from-primary-300 to-success-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-accent-300 to-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-primary-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and define how we work with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-white/50 hover:-translate-y-2 transition-all duration-300 ${inView ? 'animate-fade-in-up' : 'opacity-0'} relative overflow-hidden group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-primary-50/20 opacity-60"></div>
                
                {/* Icon background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getGradientColor(index)} rounded-2xl mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  {getValueIcon(value.title)}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-primary-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}); 