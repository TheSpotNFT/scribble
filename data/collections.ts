export const collections = [
    {
        name: "Mind Matter",
        baseUrl: "mindmatter",
        images: Array.from({ length: 15 }, (_, i) =>
            `/collections/mindmatter/MM22-${String(i + 1).padStart(3, '0')}.jpg`
        )
    },
    // ...add more collections later
];
