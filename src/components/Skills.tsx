import React from 'react';
import { MARQUEE_TAGS_ROW_1 } from '@/constants';

const Skills: React.FC = () => {
    return (
        <div className="py-10 space-y-6 relative z-10">
            {/* Row 1 */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
                <div className="flex space-x-6 animate-marquee whitespace-nowrap">
                    {[...MARQUEE_TAGS_ROW_1, ...MARQUEE_TAGS_ROW_1].map((tag, i) => (
                        <span
                            key={i}
                            className="relative rounded-full px-6 py-2 bg-black/40 text-sm font-medium text-white backdrop-blur-sm border border-transparent"
                        >
                            <span className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r ${tag.gradient} opacity-20`} />
                            <span className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r ${tag.gradient} opacity-100 mask-border`} style={{ margin: '-1px', zIndex: -2 }} />
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Row 2 (Reverse) */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
                <div className="flex space-x-6 animate-marquee-reverse whitespace-nowrap">
                    {[...MARQUEE_TAGS_ROW_1, ...MARQUEE_TAGS_ROW_1].map((tag, i) => (
                        <span
                            key={i}
                            className="relative rounded-full px-6 py-2 bg-black/40 text-sm font-medium text-white backdrop-blur-sm border border-transparent"
                        >
                            <span className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r ${tag.gradient} opacity-20`} />
                            <span className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r ${tag.gradient} opacity-100 mask-border`} style={{ margin: '-1px', zIndex: -2 }} />
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
        .mask-border {
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          padding: 1px;
        }
      `}</style>
        </div>
    );
};

export default Skills;
