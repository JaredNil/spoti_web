import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'translateY(1px)' },
					'50%': { transform: 'translateY(20px))' },
				},
				// animation: {
				// 	wiggle: 'wiggleIcon 2s ease-in-out infinite',
				// },
			},
		},
	},
	plugins: [],
} satisfies Config;
