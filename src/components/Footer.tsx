import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="py-16 md:py-24 border-t border-white/5 bg-black/60 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 text-center relative z-10">
                <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black mb-8 md:mb-12 tracking-tighter hover:scale-105 transition-transform duration-500 cursor-default">
                    <span className="text-gradient-footer">Let&apos;s Get In Touch!</span>
                </h3>

                <div className="flex justify-center gap-6 md:gap-8 mb-10 md:mb-12">
                    <a href="mailto:rishusoni6393@gmail.com" target='blank' className="w-16 h-16 rounded-full glass-panel flex items-center justify-center hover:bg-white text-gray-500 hover:text-white hover:border-white hover:scale-110 transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]" aria-label="Email">
                        <Mail className="w-8 h-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/rishu-soni-207694325/" target='blank' className="w-16 h-16 rounded-full glass-panel flex items-center justify-center hover:bg-[#0077b5] text-gray-500 hover:text-white hover:border-[#0077b5] hover:scale-110 transition-all duration-300 group shadow-[0_0_20px_rgba(0,119,181,0.2)] hover:shadow-[0_0_30px_rgba(0,119,181,0.8)]" aria-label="LinkedIn">
                        <Linkedin className="w-8 h-8 fill-current" />
                    </a>
                    <a href="https://github.com/Rishu-Soni" target='blank' className="w-16 h-16 rounded-full glass-panel flex items-center justify-center hover:bg-white text-gray-500 hover:text-white hover:border-white hover:scale-110 transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]" aria-label="GitHub">
                        <Github className="w-8 h-8 fill-current" />
                    </a>
                </div>

                <p className="text-gray-500 text-sm font-medium">
                    © 2024 R`s Portfolio. Crafted with <span className="text-accent">♥</span> in the Metaverse.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
