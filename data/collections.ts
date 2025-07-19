export const collections = [
    {
        name: "Mind Matter",
        baseUrl: "0xc3c831b19b85fdc2d3e07de348e7111be1095ba1",
        images: Array.from({ length: 15 }, (_, i) =>
            `/collections/mindmatter/MM22-${String(i + 1).padStart(3, '0')}.png`
        )
    },
    // ...add more collections later
];
