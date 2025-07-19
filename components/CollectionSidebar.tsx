import { useRef } from 'react';

type Props = {
    current: number;
    onSelect: (index: number) => void;
};

export default function CollectionTopbar({ current, onSelect }: Props) {
    const collections = [
        "Mind Matter", "ISOTOPE", "TBWSY", "ICONS", "KINGSHIT",
        "Toy Depot", "Banners", "Pact Of Scribble", "Peaches N Straws", "Abstract",
        "Transmissions", "Feelings", "Overload", "Guydidail", "Heart Tarts",
        "Heart Tart Treats", "BFA"
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollInterval = useRef<NodeJS.Timeout | null>(null);

    const startScroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = direction === 'left' ? -2 : 2;

        scrollInterval.current = setInterval(() => {
            container.scrollBy({ left: scrollAmount });
        }, 10);
    };

    const stopScroll = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    return (
        <div className="relative w-full bg-white/80 backdrop-blur z-30 pt-24">
            {/* Left Hover Zone (desktop only) */}
            <div
                className="hidden sm:block absolute left-0 top-0 h-full w-8 z-40"
                onMouseEnter={() => startScroll('left')}
                onMouseLeave={stopScroll}
            />
            {/* Right Hover Zone (desktop only) */}
            <div
                className="hidden sm:block absolute right-0 top-0 h-full w-8 z-40"
                onMouseEnter={() => startScroll('right')}
                onMouseLeave={stopScroll}
            />

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-2 px-4 py-3 scrollbar-hidden"
            >
                {collections.map((name, idx) => (
                    <button
                        key={idx}
                        onClick={() => onSelect(idx)}
                        className={`
              whitespace-nowrap px-4 py-2 text-sm rounded-full transition-all duration-150
              ${idx === current
                                ? 'bg-amber-600 text-white font-semibold shadow'
                                : 'bg-zinc-200 text-gray-800 hover:bg-amber-300'}
            `}
                    >
                        {name}
                    </button>
                ))}
            </div>
        </div>
    );
}
