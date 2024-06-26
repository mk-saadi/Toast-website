/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
				serif: ["Lora", "serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				nord: {
					default: "#bcc1cb",
					primary: "#5e81ac",
					secondary: "#b48ead",
					accent: "#8fbcbb",
					neutral: "#414a5b",
					"base-100": "#eceff4",
					info: "#88c0d0",
					success: "#a3be8c",
					warning: "#ebcb8b",
					error: "#bf616a",
					"--ghost": "#c0c4cdad",
					"--text-white": "#ffffff",
					"--text-color-white-white": "#9fb9d0",
					"--text-color-dark-dark": "#2e3440",
					"--text-color-white-dark": "#9fb9d0",
					"--text-color-dark-white": "#2e3440",
					"--text-color-dark-white2": "#2e3440",
					"--inverse-bg-100": "#eceff4",
					"--primary": "#5e81ac",
					// "--default": "#414a5b",
					"--default": "#3341551a",
					"--borderRadius": "1px",
					"--border": "0px",
					"--border-gray": "#6b728033",
				},
			},
			{
				sunset: {
					default: "#070f14",
					primary: "#dd744e",
					secondary: "#dc6087",
					// accent: "#9b75d9",
					accent: "#addfad",
					neutral: "#1b262c",
					"base-100": "#121c22",
					info: "#89e0eb",
					success: "#addfad",
					warning: "#f1c891",
					error: "#dc6087",
					"--ghost": "#1b262c",
					"--text-white": "#ffffff",
					"--text-color-white-white": "#9fb9d0",
					"--text-color-dark-dark": "#2e3440",
					"--text-color-white-dark": "#2e3440",
					"--text-color-dark-white": "#9fb9d0",
					"--text-color-dark-white2": "#ffffff",
					"--inverse-bg-100": "#1b262c",
					"--primary": "#dd744e",
					"--default": "#1b262c",
					"--borderRadius": "6px",
					"--border": "0px",
					"--border-gray": "#4b55634d",
				},
			},
		],
	},
};
