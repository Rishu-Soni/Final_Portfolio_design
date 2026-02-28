"use client";

import React, { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/constants';

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        // Ensure this only runs on client to avoid hydration mismatch
        const handleScroll = () => {
            const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-8 left-8 z-50">
                <a href="#hero" className="text-3xl font-display font-bold tracking-tighter hover:text-primary transition-colors duration-300 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                    R<span className="text-accent">`</span>s
                </a>
            </div>

            <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-end gap-6" aria-label="Main Navigation">
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="nav-dot-container flex items-center gap-4 group cursor-pointer py-2 relative"
                        aria-label={`Scroll to ${item.label}`}
                        aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                        <span
                            className={`nav-label text-sm font-bold tracking-widest uppercase bg-black/50 px-3 py-1 rounded backdrop-blur-md border border-${item.color}/30 shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none absolute right-10 whitespace-nowrap`}
                            style={{ color: item.id === 'contact' ? 'white' : `var(--color-${item.color})` }}
                        >
                            {item.label}
                        </span>
                        <div
                            className={`nav-dot w-3 h-3 rounded-full bg-white/30 transition-all duration-300 border border-white/10 group-hover:border-${item.color} ${activeSection === item.id ? `scale-150 bg-${item.color} shadow-[0_0_10px_var(--color-${item.color})]` : ''}`}
                        ></div>
                    </a>
                ))}
                {/* Decorative Line */}
                <div className="absolute right-[5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -z-10" />
            </nav>
        </>
    );
};

export default Navbar;
