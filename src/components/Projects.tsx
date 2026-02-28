import React from 'react';
import { PROJECTS } from '@/constants';
import type { Project } from '@/types';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-6xl font-display font-bold mb-4">Selected <span className="text-primary drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Works</span></h2>
                    <p className="text-gray-400 text-xl font-light">A curation of my recent digital experiments.</p>
                </div>

                <div className="columns-1 md:columns-3 gap-6 w-[100%] mx-auto">
                    {PROJECTS.map((project: Project) => (
                        <div
                            key={project.id}
                            className={`
                                glass-panel rounded-3xl p-1 mb-6 break-inside-avoid group cursor-pointer relative overflow-hidden transition-all duration-500
                                hover:shadow-[0_20px_50px_-10px_rgba(112,0,255,0.2)] hover:border-white/30 hover:-translate-y-2
                            `}
                            onClick={() => window.open(project.link, '_blank')}
                        >
                            <div className="relative rounded-[1.25rem] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto filter blur-[2px] brightness-8 group-hover:brightness-75 transition-all duration-500 block"
                                />

                                <div className="absolute inset-0 z-10 flex flex-col p-6">
                                    <div className="absolute top-0 right-0 p-4 z-20">
                                        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors" />
                                    </div>

                                    {/* Title - Stays Top */}
                                    <div className="w-full pr-8">
                                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                    </div>

                                    {/* Description - Middle/Flex-grow, disappears on hover */}
                                    <div className="flex-1 flex items-center mt-4 opacity-100 group-hover:opacity-0 group-hover:scale-95 transition-all duration-500">
                                        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                                    </div>

                                    {/* Tags - Bottom, disappears on hover */}
                                    <div className="flex flex-wrap gap-2 mt-4 opacity-100 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-500">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-transparent bg-clip-text bg-gradient-to-r ${tag.color}`}>
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Projects;
