
import React from 'react';

import { STATS } from '@/constants';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl ">
                <div
                    className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
                    style={{
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2), inset 2px 2px 6px rgba(255, 255, 255, 0.2), inset -2px -2px 6px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {/* Decorative gradients inside card */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        {/* Visual Profile */}
                        <div className="w-full lg:w-5/12 flex justify-center">
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                <div className="absolute inset-0 rounded-full border-2 border-primary/40 border-dashed animate-spin-slow" />
                                <div className="absolute -inset-4 rounded-full border border-secondary/40 animate-spin-slower" />
                                <div className="absolute -inset-8 rounded-full border border-accent/20 border-dotted animate-spin-slowest" />

                                <div className="absolute inset-4 glass-panel rounded-full overflow-hidden flex items-center justify-center z-10 border-2 border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                                        alt="Portrait of Designer"
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700 filter brightness-110 contrast-110"
                                    />
                                </div>

                                <div className="absolute bottom-0 right-0 animate-float z-20">
                                    <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2 border border-white/20">
                                        <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                                        <span className="text-xs font-bold uppercase tracking-wider">Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-7/12">
                            <h2 className="text-5xl font-display font-bold mb-8">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Frontend</span> Developer
                            </h2>

                            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
                                <p>
                                    I am the <span className="text-white font-medium">Rishu</span> currently a Frontend Developer who loves to development, architects and obsessed with the <span className="text-white font-medium">future of interface design</span>. My work bridges the gap between just a design to websites that actually works and can be on <span className="text-white font-medium">top</span>.
                                </p>
                                <p>
                                    The one with hands-on experiences in real world projects, I don&apos;t just code websites; I engineer experiences that feel alive. I believe software should feel like magic—fluid, responsive, and undeniably alive.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-3 gap-6">
                                {STATS.map((stat, index) => (
                                    <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors text-center">
                                        <h3 className={`text-3xl font-bold text-${stat.color} mb-1`}>{stat.value}</h3>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
