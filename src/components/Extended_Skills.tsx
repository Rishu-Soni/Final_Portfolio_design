import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { MARQUEE_TAGS_ROW_1 } from '@/constants';
import BlobBackground from '@/components/ui/BlobBackground';

const Extended_Skills: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState<typeof MARQUEE_TAGS_ROW_1[0] | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    // Scroll handling to ensure it opens "top to down" and pushes screen UP if it hits the bottom
    useEffect(() => {
        if (!isOpen || !sectionRef.current || !contentRef.current || !buttonRef.current) return;

        // Give it a tiny moment for layout to settle, then scroll to ensure visibility
        const timeoutId = setTimeout(() => {
            const sectionRect = sectionRef.current?.getBoundingClientRect();
            const contentRect = contentRef.current?.getBoundingClientRect();

            if (!sectionRect || !contentRect) return;

            const viewportHeight = window.innerHeight;
            // The bottom of the content relative to the viewport
            const contentBottom = contentRect.bottom;

            // If the content bottom is below the viewport, we need to scroll down (push screen up)
            if (contentBottom > viewportHeight) {
                // Calculate how much we need to scroll down to make the bottom visible,
                // perhaps leaving a small 20px padding at the bottom.
                const scrollAmount = contentBottom - viewportHeight + 40;

                window.scrollBy({
                    top: scrollAmount,
                    behavior: 'smooth'
                });
            } else if (sectionRect.top < 0) {
                // If for some reason the top is off screen, bring it into view
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300); // Wait for the 0.6s animation (or halfway through)

        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    return (
        <section ref={sectionRef} id="extended-skills" className="w-full relative flex flex-col items-center justify-start pb-10 mt-0 z-10 transition-all duration-500">
            {/* The Expand/Collapse Button */}
            <div className="z-20 mt-2 mb-6">
                <button
                    ref={buttonRef}
                    onClick={toggleOpen}
                    className="w-14 h-14 rounded-full glass-panel border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group"
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-7 h-7 text-white/70 group-hover:text-white transition-colors" />
                    </motion.div>
                </button>
            </div>

            {/* The Hidden Bento Grid Box */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={contentRef}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-[90%] max-w-7xl mx-auto overflow-hidden rounded-[2.5rem] glass-panel border border-white/10 relative mt-4 origin-top"
                        style={{
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4), inset 2px 2px 6px rgba(255, 255, 255, 0.1), inset -2px -2px 6px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        {/* Background Design inside the box */}
                        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[2.5rem]">
                            <BlobBackground />
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                        </div>

                        {/* Inner container */}
                        <div className="w-full relative z-10 p-6 sm:p-8 md:p-12">

                            {/* Sticky Progress Bar Area */}
                            <div className="w-full mb-10 sticky top-0 z-20 bg-transparent flex flex-col items-center justify-center min-h-[60px]">
                                <AnimatePresence mode="wait">
                                    {hoveredSkill ? (
                                        <motion.div
                                            key="progress"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="w-full max-w-2xl px-6 py-4 glass-panel rounded-2xl border border-white/20 shadow-lg"
                                        >
                                            <div className="flex justify-between items-end mb-2">
                                                <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${hoveredSkill.gradient}`}>
                                                    {hoveredSkill.name}
                                                </h3>
                                                <span className="text-white/80 font-mono font-medium">{hoveredSkill.proficiency ?? 0}%</span>
                                            </div>
                                            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5 shadow-inner">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${hoveredSkill.proficiency ?? 0}%` }}
                                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                                    className={`h-full bg-gradient-to-r ${hoveredSkill.gradient}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="empty"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-gray-400 text-lg font-light text-center"
                                        >
                                            Hover over a skill to view proficiency
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Skills Grid - uniformly sized boxes */}
                            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 min-h-[300px]">
                                {MARQUEE_TAGS_ROW_1.map((skill, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.02 * i, duration: 0.3 }}
                                        key={skill.name}
                                        onMouseEnter={() => setHoveredSkill(skill)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        className="h-24 sm:h-32 glass-panel rounded-2xl p-3 sm:p-5 flex flex-col items-center justify-center group hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-white/30 relative overflow-hidden cursor-pointer"
                                        style={{
                                            boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.1), inset -1px -1px 2px rgba(0, 0, 0, 0.3)',
                                        }}
                                    >
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300 bg-gradient-to-br ${skill.gradient}`} />

                                        <div className="relative z-10 flex flex-col items-center justify-center text-center">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors shadow-lg">
                                                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${skill.gradient}`} />
                                            </div>
                                            <h3 className="text-xs sm:text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all">
                                                {skill.name}
                                            </h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Extended_Skills;