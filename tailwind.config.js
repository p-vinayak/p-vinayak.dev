module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			maxHeight: {
				"2/3": "66.666667%",
			},
			typography: (theme) => ({
				dark: {
					css: {
						h1: { color: theme("colors.gray.300") },
						p: { color: theme("colors.gray.400") },
						strong: { color: theme("colors.gray.300") },
						li: { color: theme("colors.gray.400") },
						a: { color: theme("colors.gray.300") },
					},
				},
			}),
		},
	},
	variants: {
		extend: { typography: ["dark"] },
	},
	plugins: [require("@tailwindcss/typography")],
};
