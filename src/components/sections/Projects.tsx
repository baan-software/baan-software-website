import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { projects, siteData } from '@/utils';
import { IProject } from '@/types';
import { ScreenshotsButton, ScreenshotsModal, ScreenshotsThumbnails } from '@/components/common';

interface ActiveView {
  project: IProject;
  initialIndex: number;
}

export const Projects: React.FC = React.memo(() => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeView, setActiveView] = useState<ActiveView | null>(null);

  const openAt = (project: IProject, initialIndex: number): void => {
    setActiveView({ project, initialIndex });
  };

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
        return 'bg-primary-100 text-primary-800';
      case 'in-house':
        return 'bg-success-100 text-success-800';
      case 'dev-as-a-service':
        return 'bg-warning-100 text-warning-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const pastelColors = [
    'hover:bg-blue-50',
    'hover:bg-rose-50',
    'hover:bg-amber-50',
    'hover:bg-emerald-50',
    'hover:bg-violet-50',
    'hover:bg-cyan-50',
  ];

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className={`mb-12 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="mb-4">{siteData.projects.title}</h2>
            <p className="text-gray-500 max-w-2xl">
              {siteData.projects.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => {
              const links = (
                <div className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                  {project.urls?.website && (
                    <a href={project.urls.website} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors duration-200">Website</a>
                  )}
                  {project.urls?.appStore && (
                    <a href={project.urls.appStore} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors duration-200">App Store</a>
                  )}
                  {project.urls?.playStore && (
                    <a href={project.urls.playStore} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors duration-200">Play Store</a>
                  )}
                  {project.urls?.kickstarter && (
                    <a href={project.urls.kickstarter} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors duration-200">Kickstarter</a>
                  )}
                </div>
              );

              return (
                <div
                  key={project.id}
                  className={`flex gap-8 p-6 rounded border border-gray-200 transition-all duration-200 hover:scale-[1.01] ${pastelColors[index % pastelColors.length]} ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="w-64 shrink-0 hidden md:flex flex-col gap-3">
                    <div className="h-44 rounded-lg border border-gray-200/60 flex items-center justify-center p-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain rounded-[22px]"
                      />
                    </div>
                    {project.screenshots && project.screenshots.length > 0 && (
                      <ScreenshotsThumbnails
                        projectTitle={project.title}
                        screenshots={project.screenshots}
                        onSelect={(idx) => openAt(project, idx)}
                      />
                    )}
                    {links}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 md:items-start md:justify-between mb-2">
                      <div className="flex items-center gap-3 min-w-0 md:flex-1">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-10 h-10 rounded-lg object-contain shrink-0 md:hidden"
                        />
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                      </div>
                      <span className={`hidden md:inline-block text-xs font-medium px-2.5 py-1 rounded shrink-0 ${getEngagementColor(project.engagement)}`}>
                        {getEngagementLabel(project.engagement)}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {project.components.length > 1 ? (
                      <div className="space-y-3 mb-4">
                        {project.components.map((component) => (
                          <div key={component.label} className="border-l-2 border-gray-200 pl-4">
                            <div className="text-sm font-medium text-gray-700">{component.label}</div>
                            <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{component.description}</p>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {component.technologies.map((tech) => (
                                <span key={tech} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">{tech}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.components[0].technologies.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">{tech}</span>
                        ))}
                      </div>
                    )}

                    <div className="md:hidden space-y-2">
                      {project.screenshots && project.screenshots.length > 0 && (
                        <div>
                          <ScreenshotsButton onClick={() => openAt(project, 0)} />
                        </div>
                      )}
                      {links}
                    </div>

                    <div className="mt-3 md:hidden">
                      <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded ${getEngagementColor(project.engagement)}`}>
                        {getEngagementLabel(project.engagement)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {activeView && activeView.project.screenshots && (
        <ScreenshotsModal
          projectTitle={activeView.project.title}
          screenshots={activeView.project.screenshots}
          initialIndex={activeView.initialIndex}
          onClose={() => setActiveView(null)}
        />
      )}
    </section>
  );
});
