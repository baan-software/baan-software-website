import React from 'react';
import { useInView } from 'react-intersection-observer';

export const About: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section bg-gray-50" ref={ref}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-primary-900">About Baan Software</h2>
            
            <div className="space-y-6 text-left mb-16">
              <p className="text-xl leading-relaxed">
                Baan Software was founded by{' '}
                <a 
                  href="https://www.linkedin.com/in/giora-vered-83b00259/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-900 hover:text-primary-700 transition-colors duration-200 underline decoration-2 underline-offset-2"
                >
                  Giora Vered
                </a>
                , a seasoned software developer 
                with over 15 years of experience. Giora has worked on a diverse range of projects, 
                including mobile and web applications, mobile SDKs, server-side systems, and more.
              </p>
              
              <p className="text-xl leading-relaxed">
                His passion for creating elegant, efficient, and user-friendly solutions drives the 
                company's approach to every project. Whether you're building a new product, refining 
                an existing one, or tackling complex technical challenges, Baan Software is here to 
                help you achieve your goals with expertise and care.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900 mb-3">Mobile Development</div>
                <p className="text-gray-600">Native and cross-platform mobile applications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900 mb-3">Web Applications</div>
                <p className="text-gray-600">Modern, responsive web applications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900 mb-3">Backend Systems</div>
                <p className="text-gray-600">Scalable server-side architectures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 