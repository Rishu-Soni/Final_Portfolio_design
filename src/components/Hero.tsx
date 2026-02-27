import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative">
            <div className="container mx-auto px-6 text-center z-10 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[80px] -z-10 animate-pulse" />

                <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest text-primary mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Frontend Developer
                </div>

                <h1 className="text-6xl text-gray-300 md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-8 leading-tight">
                    Developing <br />
                    <span className="text-gradient-main drop-shadow-[0_0_30px_rgba(112,0,255,0.4)]">The Future</span>
                </h1>

                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    I transform complex, high-fidelity designs into immersive digital experiences with <span className="text-gray-400 font-medium">100% Lighthouse performance</span>. Where ultra-modern aesthetics meet zero-compromise speed.
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-xl border border-primary/50 text-white font-bold tracking-wide transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] hover:border-primary"
                    >
                        <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-20" />
                        <span className="relative flex items-center gap-2">
                            View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <a
                        href="#about"
                        className="px-8 py-4 rounded-xl glass-panel hover:bg-white/10 transition-all text-gray-300 hover:text-white font-medium border border-white/5 hover:border-white/20"
                    >
                        About Me
                    </a>
                </div> */}
            </div>

            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
