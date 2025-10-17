const rawCollections = [
    {
        name: "Featured",
        items: [
            { image: "/collections/featured/001.png", url: "0xc3c831b19b85fdc2d3e07de348e7111be1095ba1" },
            { image: "/collections/featured/002.png", url: "0xcf82bf865b1080e2f4995b77e30f8c83a4ef41fa" },
            { image: "/collections/featured/003.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
        ],
    },
];

// Process urls into full links
export const collections = rawCollections.map(col => ({
    ...col,
    items: col.items.map(item => ({
        ...item,
        link: item.url ? `https://salvor.io/collections/${item.url}` : '#',
    })),
}));
