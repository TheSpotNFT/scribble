const rawCollections = [
    {
        name: "Featured",
        items: [
            { image: "/collections/featured/001.png", url: "scribblewarlock" },
            { image: "/collections/featured/002.png", url: "scribblewarlock" },
            { image: "/collections/featured/003.png", url: "scribblewarlock" },
            { image: "/collections/featured/004.png", url: "scribblewarlock" },
            { image: "/collections/featured/005.png", url: "scribblewarlock" },
            { image: "/collections/featured/006.png", url: "scribblewarlock" },
            { image: "/collections/featured/007.png", url: "scribblewarlock" },
            { image: "/collections/featured/008.png", url: "scribblewarlock" },
            { image: "/collections/featured/009.png", url: "scribblewarlock" },
            { image: "/collections/featured/010.png", url: "scribblewarlock" },
            { image: "/collections/featured/011.png", url: "scribblewarlock" },
            { image: "/collections/featured/012.png", url: "scribblewarlock" },
            { image: "/collections/featured/013.png", url: "scribblewarlock" },
            { image: "/collections/featured/014.png", url: "scribblewarlock" },
            { image: "/collections/featured/015.png", url: "scribblewarlock" },
            { image: "/collections/featured/016.png", url: "scribblewarlock" },
            { image: "/collections/featured/017.png", url: "scribblewarlock" },
            { image: "/collections/featured/018.png", url: "scribblewarlock" },
            { image: "/collections/featured/019.png", url: "scribblewarlock" },
            { image: "/collections/featured/020.png", url: "scribblewarlock" },
        ],
    },
];

// Process urls into full links
export const collections = rawCollections.map(col => ({
    ...col,
    items: col.items.map(item => ({
        ...item,
        link: item.url ? `https://salvor.io/${item.url}` : '#',
    })),
}));
