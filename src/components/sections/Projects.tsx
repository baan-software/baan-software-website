import React from 'react';
import { useInView } from 'react-intersection-observer';
import { projects, siteData } from '@/utils';
import { IProject } from '@/types';

export const Projects: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const getEngagementLabel = (engagement: string): string => {
    switch (engagement) {
      case 'full-development':
        return 'Full Development';
      case 'in-house':
        return 'In-House Product';
      case 'dev-as-a-service':
        return 'Dev as a Service';
      default:
        return engagement;
    }
  };

  const getEngagementColor = (engagement: string): string => {
    switch (engagement) {
      case 'full-development':
        return 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg';
      case 'in-house':
        return 'bg-gradient-to-r from-success-500 to-success-600 text-white shadow-lg';
      case 'dev-as-a-service':
        return 'bg-gradient-to-r from-warning-500 to-warning-600 text-white shadow-lg';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg';
    }
  };

  const getCardBorderColor = (engagement: string): string => {
    switch (engagement) {
      case 'full-development':
        return 'border-l-primary-500 hover:border-primary-400';
      case 'in-house':
        return 'border-l-success-500 hover:border-success-400';
      case 'dev-as-a-service':
        return 'border-l-warning-500 hover:border-warning-400';
      default:
        return 'border-l-gray-500 hover:border-gray-400';
    }
  };

  const renderProjectLinks = (project: IProject): JSX.Element | null => {
    if (!project.urls) return null;

    return (
      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
        {project.urls.website && (
          <a
            href={project.urls.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            🌐 Website
          </a>
        )}
        {project.urls.appStore && (
          <a
            href={project.urls.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            📱 App Store
          </a>
        )}
        {project.urls.playStore && (
          <a
            href={project.urls.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-success-600 to-success-700 rounded-lg hover:from-success-700 hover:to-success-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            🤖 Play Store
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="section bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-accent-300 to-primary-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-success-300 to-accent-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-primary-900 mb-6">
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 bg-clip-text text-transparent">
                {siteData.projects.title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteData.projects.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl border-l-4 ${getCardBorderColor(project.engagement)} transition-all duration-300 hover:-translate-y-2 ${inView ? 'animate-fade-in-up' : 'opacity-0'} relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-primary-50/20 opacity-60"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-primary-900">
                      {project.title}
                    </h3>
                    <span className={`px-4 py-2 rounded-xl text-sm font-medium ${getEngagementColor(project.engagement)} transform hover:scale-105 transition-all duration-200`}>
                      {getEngagementLabel(project.engagement)}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-sm font-medium border border-gray-300 hover:from-primary-50 hover:to-primary-100 hover:border-primary-200 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {renderProjectLinks(project)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}); 