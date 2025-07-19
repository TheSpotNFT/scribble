type Props = {
    current: number;
    onSelect: (index: number) => void;
};

export default function CollectionSidebar({ current, onSelect }: Props) {
    const placeholderCollections = [
        "Mind Matter",
        "ISOTOPE",
        "TBWSY",
        "ICONS",
        "KINGSHIT",
        "Toy Depot",
        "Banners",
        "Pact Of Scribble",
        "Peaches N Straws",
        "Abstract",
        "Transmissions",
        "Feelings",
        "Overload",
        "Guydidail",
        "Heart Tarts",
        "Heart Tart Treats",
        "BFA"

    ];


    return (
        <div className="absolute pt-40 pb-60 left-0 top-0 h-full w-48 text-black p-4 z-20 flex flex-col justify-between">
            {placeholderCollections.map((name, idx) => (
                <button
                    key={idx}
                    onClick={() => onSelect(idx)}
                    className={`w-full py-3 px-2 rounded text-sm tracking-wide transition-all duration-150 bg-zinc-500 
                      hover:text-gray-30
                      ${idx === current ? 'bg-green-300 font-bold hover:bg-green-300 ' : 'text-gray-300 '}`}
                >
                    {name}
                </button>
            ))}
        </div>
    );
}
