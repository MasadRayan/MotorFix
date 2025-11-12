/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // <- 'app', not 'sec/app'
];
export const theme = {
    extend: {
        colors: {
            third: "#d12121",
            secondary: "#f9f9f9",
        },
    },
};
export const plugins = [daisyui];
