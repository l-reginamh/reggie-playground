export const siteConfig = {
    name: "Playground!",
    url: "https://reggieplayground.vercel.app",
    description: "Playground.GIF",
    author: "Regina Liew",
    links: {
        github: "https://github.com/l-reginamh",
        linkedin: "https://www.linkedin.com/in/mhliew-regina",
    },
    pages: [
        {
            title: "Color code converter",
            path: "/color-converter",
            category: "Tools",
            description: "To convert between HSL, RGB, and HEX colors.",
            available: false
        },
        {
            title: "JSON generator",
            path: "/json-generator",
            category: "Tools",
            description: "To generate JSON file content by inputted content.",
            available: false
        },
        {
            title: "Keyboard codes",
            path: "/keyboard-code",
            category: "Tools",
            description: "Let's see what are the keyboard codes!",
            available: false
        },
        {
            title: "XLSX to JSON converter",
            path: "/xlsx-to-json-converter",
            category: "Tools",
            description: "To convert the whole XLSX file into JSON file content.",
            available: false
        },
        {
            title: "Pick for me",
            path: "/pick-for-me",
            category: "Others",
            description: "Don't know what should I do, so pick one for me!",
            available: true
        },
        {
            title: "Pixel art drawing",
            path: "/pixel-drawing",
            category: "Others",
            description: "Let's make some pixel art!",
            available: true
        }
    ]
}

export type SiteConfig = typeof siteConfig;