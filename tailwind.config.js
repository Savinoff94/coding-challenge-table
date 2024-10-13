/** @type {import('tailwindcss').Config} */
const { mainColor, ligherMainColor, darkerMainColor } = require('./src/styles/constants');
module.exports = {
    content: ["./src/***/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                'main-color': '#'+mainColor,
                'lighter-main-color': '#'+ligherMainColor,
                'darker-main-color': '#'+darkerMainColor 
            }
        }
    }
};