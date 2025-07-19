import { useState } from 'react';
import { collections } from '../data/collections';
import CollectionSidebar from '../components/CollectionSidebar';
import ThumbnailCarousel from '../components/ThumbnailCarousel';



export default function Home() {
    const [currentCollection, setCurrentCollection] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const currentImage = collections[currentCollection].images[currentImageIndex];
    const salvorLink = `https://salvor.io/${collections[currentCollection].baseUrl}/${currentImageIndex + 1}`;

    return (
        <div
            className="h-screen w-full bg-contain bg-center bg-no-repeat relative overflow-hidden p-24"
            style={{ backgroundImage: `url('${currentImage}')` }}
        >
            <CollectionSidebar
                current={currentCollection}
                onSelect={(i) => {
                    setCurrentCollection(i);
                    setCurrentImageIndex(0); // reset to first image
                }}
            />

            {/* Overlay UI here */}
            <div className="absolute bottom-60 right-12 text-black text-2xl">
                <button className={`w-full py-3 px-6 rounded text-sm tracking-wide transition-all duration-150 bg-zinc-500 
                      hover:bg-black hover:text-gray-30`}><a href={salvorLink} target="_blank" rel="noopener noreferrer" className="hover: text-gray-300">
                        View on Salvor
                    </a></button>
            </div>
            <ThumbnailCarousel
                images={collections[currentCollection].images}
                currentIndex={currentImageIndex}
                onSelect={(i) => setCurrentImageIndex(i)}
            />

        </div>
    );
}
