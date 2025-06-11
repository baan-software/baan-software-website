import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Contact: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="section bg-gradient-to-br from-primary-50 via-white to-accent-50 relative" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-accent-300 to-success-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-primary-900">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Ready to bring your ideas to life? We'd love to hear about your project 
              and discuss how we can help you achieve your <span className="text-primary-700 font-semibold">goals</span>.
            </p>
            
            <div className="bg-white/80 backdrop-blur-lg p-8 lg:p-12 max-w-2xl mx-auto rounded-2xl shadow-2xl border border-white/50 relative overflow-hidden">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 opacity-70"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-primary-900 mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">
                    Reach out to us for any inquiries or to start your next project.
                  </p>
                </div>
                
                <div className="text-left space-y-4 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border border-primary-100 shadow-inner">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-primary-900 font-medium">Email:</div>
                    <a 
                      href="mailto:info@baansoftware.com"
                      className="text-primary-700 hover:text-primary-800 transition-colors duration-200 font-medium hover:underline"
                    >
                      info@baansoftware.com
                    </a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <a
                    href="mailto:info@baansoftware.com"
                    className="btn btn-primary bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    <span className="flex items-center">
                      Send us an Email
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 