import { useRef, useState, useEffect } from 'react';

type Props = {
    images: string[];
    currentIndex: number;
    onSelect: (index: number) => void;
};

export default function ThumbnailCarousel({ images, currentIndex, onSelect }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollInterval = useRef<NodeJS.Timeout | null>(null);
    const [isScrollable, setIsScrollable] = useState(false);

    // Check scrollability
    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            setIsScrollable(el.scrollWidth > el.clientWidth);
        }
    }, [images]);

    const startScrolling = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = direction === 'left' ? -2 : 2;

        scrollInterval.current = setInterval(() => {
            container.scrollBy({ left: scrollAmount });
        }, 10);
    };

    const stopScrolling = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    return (
        <div className="absolute bottom-0 left-0 w-full bg-black backdrop-blur z-30 px-4 py-3">
            <div className="relative w-full">
                {/* Left Hover Zone */}
                <div
                    className="hidden md:block absolute top-0 left-0 h-full w-10 z-10"
                    onMouseEnter={() => startScrolling('left')}
                    onMouseLeave={stopScrolling}
                />

                {/* Right Hover Zone */}
                <div
                    className="hidden md:block absolute top-0 right-0 h-full w-10 z-10"
                    onMouseEnter={() => startScrolling('right')}
                    onMouseLeave={stopScrolling}
                />

                {/* Scrollable Thumbnails */}
                <div
                    ref={scrollRef}
                    className={`flex gap-3 overflow-x-auto scrollbar-hidden transition-all duration-300 ${isScrollable ? 'justify-start' : 'justify-center'
                        }`}
                >
                    {images.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Thumbnail ${idx + 1}`}
                            onClick={() => onSelect(idx)}
                            className={`h-24 sm:h-36 w-auto rounded-md cursor-pointer border transition-all duration-150
    ${idx === currentIndex
                                    ? 'border-amber-600 shadow-md'
                                    : 'opacity-70 hover:opacity-100 border-transparent'}`}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
}
