import { useRef, useState } from 'react';

type Props = {
    images: string[];
    currentIndex: number;
    onSelect: (index: number) => void;
};

export default function ThumbnailCarousel({ images, currentIndex, onSelect }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollInterval = useRef<NodeJS.Timeout | null>(null);

    const startScrolling = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = direction === 'left' ? -2 : 2;

        scrollInterval.current = setInterval(() => {
            container.scrollBy({ left: scrollAmount });
        }, 10); // 10ms interval for smooth movement
    };

    const stopScrolling = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    return (
        <div className="absolute bottom-0 left-0 w-full bg-black py-2 px-4 z-30 flex items-center justify-center">
            {/* Left Arrow (desktop only) */}
            <button
                className="hidden sm:block text-white px-2 text-2xl"
                onMouseEnter={() => startScrolling('left')}
                onMouseLeave={stopScrolling}
            >
                ←
            </button>

            {/* Scrollable Thumbnails */}
            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto max-w-5xl px-2 scrollbar-hidden"
            >
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Thumbnail ${idx + 1}`}
                        onClick={() => onSelect(idx)}
                        className={`h-36 w-auto rounded cursor-pointer transition-all duration-150 
              ${idx === currentIndex ? 'ring-2 ring-white scale-105' : 'opacity-70 hover:opacity-100'}`}
                    />
                ))}
            </div>

            {/* Right Arrow (desktop only) */}
            <button
                className="hidden sm:block text-white px-2 text-2xl"
                onMouseEnter={() => startScrolling('right')}
                onMouseLeave={stopScrolling}
            >
                →
            </button>
        </div>
    );
}
