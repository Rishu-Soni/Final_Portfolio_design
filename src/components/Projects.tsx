import React from 'react';
import { PROJECTS } from '@/constants';
import type { Project } from '@/types';
import { ArrowUpRight, Calculator } from 'lucide-react';


const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-6xl font-display font-bold mb-4">Selected <span className="text-primary drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Works</span></h2>
                    <p className="text-gray-400 text-xl font-light">A curation of my recent digital experiments.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[320px]">
                    {PROJECTS.map((project: Project) => (
                        <div
                            key={project.id}
                            className={`
                glass-panel rounded-3xl p-5 bento-card group cursor-pointer relative overflow-hidden transition-all duration-500
                ${project.layout === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${project.layout === 'tall' ? 'md:row-span-2' : ''}
                ${project.layout === 'wide' ? 'md:col-span-2' : ''}
                ${project.layout === 'standard' ? '' : ''}
                hover:shadow-[0_20px_50px_-10px_rgba(112,0,255,0.2)] hover:border-white/30 hover:-translate-y-2
              `}
                        >
                            {/* Special layout handling for specific cards to match visual */}
                            {project.layout === 'large' && (
                                <div className="flex flex-col h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="h-full rounded-2xl bg-gray-900 mb-6 overflow-hidden relative flex-grow">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                            <h3 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-gray-300 mb-4 max-w-lg">{project.description}</p>
                                            <div className="flex gap-2">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className={`text-xs font-bold px-3 py-1 rounded-full border border-${tag.color} text-${tag.color} bg-${tag.color}/10`}>
                                                        {tag.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {project.layout === 'tall' && (
                                <div className="h-full flex flex-col justify-end relative">
                                    <div className="absolute inset-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="mb-4">
                                            <span className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-4 border border-accent/30 group-hover:bg-accent group-hover:text-white transition-all">
                                                <Calculator size={24} />
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className={`text-[10px] font-bold px-2 py-1 rounded border border-${tag.color} text-${tag.color} bg-${tag.color}/10`}>
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {project.layout === 'wide' && (
                                <div className="h-full flex flex-row items-center gap-6 relative">
                                    <div className="w-1/2 h-full rounded-xl overflow-hidden relative hidden md:block">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex-1 z-10">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                        <div className="flex gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className={`text-xs font-bold px-3 py-1 rounded-full border border-${tag.color} text-${tag.color} bg-${tag.color}/10`}>
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 md:hidden z-0">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-20"
                                        />
                                        <div className="absolute inset-0 bg-background-dark/80" />
                                    </div>
                                </div>
                            )}

                            {project.layout === 'standard' && (
                                <div className="flex flex-col justify-between h-full relative">
                                    <div className="absolute top-0 right-0 p-4 z-20">
                                        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="h-32 rounded-xl bg-gray-800 mb-4 overflow-hidden relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        <p className="text-gray-400 text-xs mb-3">{project.description}</p>
                                        <div className="flex gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className={`text-[10px] font-bold px-2 py-1 rounded border border-${tag.color} text-${tag.color} bg-${tag.color}/10`}>
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
