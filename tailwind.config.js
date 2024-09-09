/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}","./public/*.html","./node_modules/flowbite/**/*.js"],
    theme: {
        screens: {
            'md': '750px',
            // => @media (min-width: 640px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'lx': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            fontFamily:{
                "Merriweather":"Merriweather",
                "Lato":"Lato",
            },

        },
    },
    plugins: [
        // flowbite
        require('flowbite/plugin')({
            charts:true,
        }),
    ],
    safelist: [
        // If you're using dynamic classes, include them in safelist.
        /^datatable-.*/,  // Example for datatable classes in Flowbite charts
        // 'rtl:space-x-reverse',  // Safelist for RTL support
    ],
}