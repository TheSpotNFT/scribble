export const collections = [
    {
        name: "Mind Matter",
        baseUrl: "0xc3c831b19b85fdc2d3e07de348e7111be1095ba1",
        images: Array.from({ length: 100 }, (_, i) => {
            const id = String(i + 1).padStart(3, '0');
            const ext = id === '090' ? '.gif' : '.png';
            return `/collections/mindmatter/${id}${ext}`;
        }),
    },
    {
        name: "Abstract",
        baseUrl: "0x8f1e73aa735a33e3e01573665dc7ab66ddfba4b2", // Replace with real address if needed
        images: Array.from({ length: 30 }, (_, i) => {
            const id = String(i + 1).padStart(3, '0');
            return `/collections/abstract/${id}.png`;

        }),
    },
];
