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
            <img
                src={currentImage}
                alt={`Artwork ${currentImageIndex + 1}`}
                className="w-full h-full object-contain absolute inset-0 z-0 pointer-events-none select-none"
                style={{ paddingBottom: '10rem' }} // ~160px for space above carousel
            />

            {/* Sidebar */}
            <CollectionSidebar
                current={currentCollection}
                onSelect={(i) => {
                    setCurrentCollection(i);
                    setCurrentImageIndex(0);
                }}
            />

            {/* View on Salvor button */}
            <div className="absolute bottom-60 right-12 text-black text-2xl z-20">
                <a
                    href={salvorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded text-sm tracking-wide transition-all duration-150 bg-zinc-500 hover:bg-black hover:text-gray-300"
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
