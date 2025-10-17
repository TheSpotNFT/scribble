import { useState } from 'react';
import { collections } from '../data/featured';
import CollectionSidebar from '../components/CollectionSidebar';
import ThumbnailCarousel from '../components/ThumbnailCarousel';

export default function Home() {
    const [currentCollection, setCurrentCollection] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const collection = collections[currentCollection];
    const currentItem = collection?.items?.[currentImageIndex];
    const currentImage = currentItem?.image ?? '';
    const salvorLink = currentItem?.link ?? '#'; // <-- uses prebuilt link

    // Reset fade when collection or image changes
    const handleImageChange = (collectionIndex: number, imageIndex: number = 0) => {
        setIsImageLoaded(false);
        setCurrentCollection(collectionIndex);
        setCurrentImageIndex(imageIndex);
    };

    const handleThumbnailSelect = (index: number) => {
        setIsImageLoaded(false);
        setCurrentImageIndex(index);
    };

    // Optional guard if data might be empty
    if (!collection || !collection.items?.length) return null;

    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            {/* Fullscreen image with fade-in */}
            <img
                key={currentImage}
                src={currentImage}
                alt={`Artwork ${currentImageIndex + 1}`}
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-full object-contain absolute pt-30 inset-0 z-0 pointer-events-none select-none 
          transition-opacity duration-[2000ms] ease-in-out 
          ${isImageLoaded ? 'opacity-100' : 'opacity-0'}
        `}
                style={{ paddingBottom: '10rem' }}
            />

            {/* View on Salvor */}
            <div className="absolute bottom-44 right-12 text-black text-2xl z-20 md:bottom-55">
                <a
                    href={salvorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap px-4 py-2 text-sm rounded-full transition-all duration-150 hover:bg-amber-300 bg-zinc-200"
                >
                    View on Salvor
                </a>
            </div>

            {/* Thumbnails: feed images from items */}
            <ThumbnailCarousel
                images={collection.items.map(i => i.image)} // <-- was collection.images
                currentIndex={currentImageIndex}
                onSelect={handleThumbnailSelect}
            />
        </div>
    );
}
