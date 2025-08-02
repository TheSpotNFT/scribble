import { useRef } from 'react';
import Image from 'next/image';

type Props = {
    images: string[];
    currentIndex: number;
    onSelect: (index: number) => void;
};

export default function ThumbnailCarousel({ images, currentIndex, onSelect }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollSpeed = useRef(0);
    const scrollDirection = useRef<'left' | 'right' | null>(null);
    const animationFrame = useRef<number | null>(null);

    const easeInScroll = () => {
        const container = scrollRef.current;
        if (!container || !scrollDirection.current) return;

        scrollSpeed.current = Math.min(scrollSpeed.current + 0.2, 8);
        const amount = scrollDirection.current === 'left' ? -scrollSpeed.current : scrollSpeed.current;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const currentScrollLeft = container.scrollLeft;

        if (
            (scrollDirection.current === 'left' && currentScrollLeft <= 0) ||
            (scrollDirection.current === 'right' && currentScrollLeft >= maxScrollLeft)
        ) {
            stopScrolling();
            return;
        }

        container.scrollBy({ left: amount });
        animationFrame.current = requestAnimationFrame(easeInScroll);
    };

    const startScrolling = (direction: 'left' | 'right') => {
        scrollDirection.current = direction;
        scrollSpeed.current = 0;
        animationFrame.current = requestAnimationFrame(easeInScroll);
    };

    const stopScrolling = () => {
        if (animationFrame.current !== null) {
            cancelAnimationFrame(animationFrame.current);
            animationFrame.current = null;
        }
        scrollSpeed.current = 0;
        scrollDirection.current = null;
    };

    return (
        <div className="absolute bottom-0 left-0 w-full bg-black backdrop-blur z-30 px-4 py-6">
            <div className="relative w-full">
                <div
                    className="hidden md:block absolute top-0 left-0 h-full w-10 z-10"
                    onMouseEnter={() => startScrolling('left')}
                    onMouseLeave={stopScrolling}
                />
                <div
                    className="hidden md:block absolute top-0 right-0 h-full w-10 z-10"
                    onMouseEnter={() => startScrolling('right')}
                    onMouseLeave={stopScrolling}
                />
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hidden min-w-full"
                >
                    <div className="flex gap-8 min-w-max px-2">
                        {images.map((src, idx) => (
                            <div
                                key={idx}
                                className="h-24 sm:h-36 w-24 sm:w-36 relative overflow-hidden rounded-md shrink-0"
                                onClick={() => onSelect(idx)}
                            >
                                <Image
                                    src={src}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    sizes="96px"
                                    unoptimized
                                    className={`object-cover cursor-pointer border transition-all duration-150 scale-200 ${idx === currentIndex
                                            ? 'border-amber-600 shadow-md'
                                            : 'opacity-70 hover:opacity-100 border-transparent'
                                        }`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
