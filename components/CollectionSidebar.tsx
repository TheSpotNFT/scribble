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
                    className={`w-full py-3 px-2 rounded text-sm tracking-wide transition-all duration-150
    ${idx === current
                            ? 'bg-amber-600 text-white font-bold'
                            : 'bg-zinc-500 text-gray-300 hover:bg-amber-600 hover:text-white'}
  `}
                >
                    {name}
                </button>

            ))}
        </div>
    );
}
