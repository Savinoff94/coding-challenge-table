/** @type {import('tailwindcss').Config} */
const { mainColor } = require('./src/styles/constants');
module.exports = {
    content: ["./src/***/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                'main-color': mainColor
            }
        }
    }
};