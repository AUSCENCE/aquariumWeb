
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
    // Assurez-vous que le "content" inclut tous vos fichiers .tsx et .ts
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-bricolage)'],
                serif: ['var(--font-pt-serif)'],
            },
        },
    },

    // ⚡️ Étape Cruciale : Enregistrez DaisyUI comme un plugin
    plugins: [
        daisyui({
            themes: ["light", "dark"],
            darkTheme: "dark",
        }),
    ],
};

export default config;