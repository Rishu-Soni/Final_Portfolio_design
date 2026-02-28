import React, { useEffect, useRef } from 'react';
import { MARQUEE_TAGS_ROW_1 } from '@/constants';

const Skills: React.FC = () => {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    const offsetRef = useRef(0);
    const activeDragRef = useRef<1 | 2 | null>(null);
    const startXRef = useRef(0);
    const isHoveredRef = useRef(false);

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            if (activeDragRef.current === null && !isHoveredRef.current) {
                offsetRef.current += 0.8; // px per frame speed
            }

            const row1 = row1Ref.current;
            const row2 = row2Ref.current;

            if (row1 && row2 && row1.firstElementChild) {
                const singleSetWidth = (row1.firstElementChild as HTMLElement).offsetWidth;

                if (offsetRef.current <= -singleSetWidth) {
                    offsetRef.current += singleSetWidth;
                } else if (offsetRef.current > 0) {
                    offsetRef.current -= singleSetWidth;
                }

                row1.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
                // For row 2 to visually mirror the loop cleanly
                row2.style.transform = `translate3d(${-offsetRef.current - singleSetWidth}px, 0, 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (activeDragRef.current === null) return;
            const delta = e.clientX - startXRef.current;
            startXRef.current = e.clientX;

            if (activeDragRef.current === 1) {
                offsetRef.current += delta;
            } else {
                offsetRef.current -= delta;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (activeDragRef.current === null) return;
            const delta = e.touches[0].clientX - startXRef.current;
            startXRef.current = e.touches[0].clientX;

            if (activeDragRef.current === 1) {
                offsetRef.current += delta;
            } else {
                offsetRef.current -= delta;
            }
        };

        const handleDragEnd = () => {
            activeDragRef.current = null;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleDragEnd);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleDragEnd);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleDragEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleDragEnd);
        };
    }, []);

    const onDragStart = (e: React.MouseEvent | React.TouchEvent, rowNum: 1 | 2) => {
        activeDragRef.current = rowNum;
        startXRef.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    };

    const TagGroup = ({ items }: { items: typeof MARQUEE_TAGS_ROW_1 }) => (
        <div className="flex shrink-0 gap-6 pr-6 w-max items-center justify-center">
            {items.map((tag, i) => (
                <span
                    key={i}
                    className="relative rounded-full px-6 py-2 bg-black/40 text-sm font-medium text-white backdrop-blur-sm border border-transparent whitespace-nowrap cursor-grab active:cursor-grabbing hover:bg-white/10 transition-colors"
                >
                    <span className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r ${tag.gradient} opacity-20`} />
                    <span className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r ${tag.gradient} opacity-100 mask-border`} style={{ margin: '-1px', zIndex: -2 }} />
                    {tag.name}
                </span>
            ))}
        </div>
    );

    const reversedItems = [...MARQUEE_TAGS_ROW_1].reverse();

    return (
        <div
            className="py-10 space-y-6 relative z-10"
            onMouseEnter={() => isHoveredRef.current = true}
            onMouseLeave={() => isHoveredRef.current = false}
        >
            {/* Row 1 */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
                <div
                    ref={row1Ref}
                    className="flex w-max"
                    onMouseDown={(e) => onDragStart(e, 1)}
                    onTouchStart={(e) => onDragStart(e, 1)}
                >
                    <TagGroup items={MARQUEE_TAGS_ROW_1} />
                    <TagGroup items={MARQUEE_TAGS_ROW_1} />
                    <TagGroup items={MARQUEE_TAGS_ROW_1} />
                    <TagGroup items={MARQUEE_TAGS_ROW_1} />
                </div>
            </div>

            {/* Row 2 (Reverse) */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
                <div
                    ref={row2Ref}
                    className="flex w-max"
                    onMouseDown={(e) => onDragStart(e, 2)}
                    onTouchStart={(e) => onDragStart(e, 2)}
                >
                    <TagGroup items={reversedItems} />
                    <TagGroup items={reversedItems} />
                    <TagGroup items={reversedItems} />
                    <TagGroup items={reversedItems} />
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
