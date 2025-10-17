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
        name: "TBWSY",
        baseUrl: "0x79dcb4244123add7a82594c9b6c6c4d2da0e62c8", // Replace with real address if needed
        images: Array.from({ length: 12 }, (_, i) => {
            const id = String(i + 1).padStart(3, '0');
            return `/collections/TBWSY/${id}.png`;

        }),
    },
];
