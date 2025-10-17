import { useState } from 'react';
import { collections } from '../data/featured';
// import CollectionSidebar from '../components/CollectionSidebar';
import ThumbnailCarousel from '../components/ThumbnailCarousel';
import Image from 'next/image';

export default function Home() {
    // We never change collection now, so no setter:
    const [currentCollection] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const collection = collections[currentCollection];
    if (!collection || !collection.items?.length) return null;

    const currentItem = collection.items[currentImageIndex] ?? collection.items[0];
    const currentImage = currentItem?.image ?? '';
    const salvorLink = currentItem?.link ?? '#';

    const handleThumbnailSelect = (index: number) => {
        setIsImageLoaded(false);
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            <Image
                key={currentImage}
                src={currentImage}
                alt={`Artwork ${currentImageIndex + 1}`}
                fill
                priority
                sizes="100vw"
                onLoadingComplete={() => setIsImageLoaded(true)}
                className={`object-contain absolute pt-20 inset-0 z-0 pointer-events-none select-none
          transition-opacity duration-[2000ms] ease-in-out
          ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
        `}
                style={{ paddingBottom: '12rem' }}
            />

            <div className="absolute bottom-44 right-12 text-black text-2xl z-20 md:bottom-55">
                <a
                    href={salvorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap px-4 py-2 text-sm rounded-full transition-all duration-150 hover:bg-amber-300 bg-zinc-200"
                >
                    Scribble on Salvor
                </a>
            </div>

            <ThumbnailCarousel
                images={collection.items.map(i => i.image)}
                currentIndex={currentImageIndex}
                onSelect={handleThumbnailSelect}
            />
        </div>
    );
}
