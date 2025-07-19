import { useState } from 'react';
import { collections } from '../data/collections';
import CollectionSidebar from '../components/CollectionSidebar';
import ThumbnailCarousel from '../components/ThumbnailCarousel';

export default function Home() {
    const [currentCollection, setCurrentCollection] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const currentImage = collections[currentCollection].images[currentImageIndex];
    const salvorLink = `https://salvor.io/collections/${collections[currentCollection].baseUrl}/${currentImageIndex + 1}`;

    return (
        <div className="relative w-full h-screen overflow-hidden bg-white">
            {/* Fullscreen image instead of background */}
            <div className='border-2 border-black'><img
                src={currentImage}
                alt={`Artwork ${currentImageIndex + 1}`}
                className="w-full h-full object-contain absolute pt-30 inset-0 z-0 pointer-events-none select-none"
                style={{ paddingBottom: '10rem' }} // ~160px for space above carousel
            /></div>

            {/* Sidebar */}
            <CollectionSidebar
                current={currentCollection}
                onSelect={(i) => {
                    setCurrentCollection(i);
                    setCurrentImageIndex(0);
                }}
            />

            {/* View on Salvor button */}
            <div className="absolute bottom-36 right-12 text-black text-2xl z-20 md:bottom-50">
                <a
                    href={salvorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
              whitespace-nowrap px-4 py-2 text-sm rounded-full transition-all duration-150 hover:bg-amber-300 bg-zinc-200
             
            `}
                >
                    View on Salvor
                </a>
            </div>

            {/* Thumbnails */}
            <ThumbnailCarousel
                images={collections[currentCollection].images}
                currentIndex={currentImageIndex}
                onSelect={(i) => setCurrentImageIndex(i)}
            />
        </div>
    );
}
