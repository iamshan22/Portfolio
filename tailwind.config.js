const { DEFAULT_CIPHERS } = require('tls');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix:"",
  theme: {
	container:{
		center:true,
		padding: "15px",
	},
	screen:{
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",

	},
	fontFamily:{
		primary: "var(--font-jetbrainsMono)",

	},


  	extend: {

  		colors: {
			primary:'#1c1c22',
			accent:{
				DEFAULT:'#e60e0e',
				hover:'#e60e0e',
			}
  			
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes:{
			"accordtion-down":{
				from:{height:"0"},
				to:{height:'var(--radix-accordtion-content-height)'},

			},
			"accordtion-up":{
				from:{height:'var(--radix-accordtion-content-height)'},
				to:{height:"0"},

			},
		},
		animation:{
			"accordtion-down": "accordtion-down 0.2s ease-out",
			"accordtion-up": "accordtion-up 0.2s ease-out",
		},
  	},

  },
  plugins: [require("tailwindcss-animate")],
};
