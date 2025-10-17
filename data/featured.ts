const rawCollections = [
    {
        name: "Featured",
        items: [
            { image: "/collections/featured/001.png", url: "0xc3c831b19b85fdc2d3e07de348e7111be1095ba1" },
            { image: "/collections/featured/002.png", url: "0xcf82bf865b1080e2f4995b77e30f8c83a4ef41fa" },
            { image: "/collections/featured/003.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/004.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/005.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/006.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/007.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/008.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/009.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/010.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/011.png", url: "0xc3c831b19b85fdc2d3e07de348e7111be1095ba1" },
            { image: "/collections/featured/012.png", url: "0xcf82bf865b1080e2f4995b77e30f8c83a4ef41fa" },
            { image: "/collections/featured/013.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/014.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/015.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/016.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/017.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/018.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/019.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
            { image: "/collections/featured/020.png", url: "0x4ffacde657786b4334918a2e09f58ffb798f3ada" },
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
