
import React from 'react';
import me from '@/assets/me_Img.png';

import { STATS } from '@/constants';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl ">
                <div
                    className="glass-panel rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 relative overflow-hidden"
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
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
                                <div className="absolute inset-0 rounded-full border-2 border-primary/40 border-dashed animate-spin-slow" />
                                <div className="absolute -inset-4 rounded-full border border-secondary/40 animate-spin-slower" />
                                <div className="absolute -inset-8 rounded-full border border-accent/20 border-dotted animate-spin-slowest" />

                                <div className="absolute inset-4 glass-panel rounded-full overflow-hidden flex items-center justify-center z-10 border-2 border-white/10">
                                    <img
                                        src={me}
                                        alt="Portrait of Designer"
                                        className="absolute inset-0 w-full h-full object-cover drop-shadow-2xl transition-all duration-400 filter brightness-80 contrast-110 grayscale-90 hover:grayscale-0 hover:brightness-100"
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
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-4xl sm:text-5xl">Frontend</span> <span className="text-4xl sm:text-5xl">Developer</span>
                            </h2>

                            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">

                                <p>I’m <span className="text-white font-medium">Rishu</span>. I’m a frontend developer and soon to be a full stack developer, but more than that, I’m someone who’s genuinely obsessed with where interface design is heading next.</p>
                                <p>I’ve never been a fan of just 'building' a site and calling it a day. For me, it’s about the bridge between a flat design and a high-performance reality. Having spent a lot of time on real-world projects, I’ve learned that <span className="text-white font-medium">the best code is the kind you don't even notice—it</span> just feels fluid, intuitive, and maybe a little bit like magic.</p>
                                <p>My goal is pretty simple: I take ambitious ideas and turn them into products that don't just function, but actually stand out.</p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
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
