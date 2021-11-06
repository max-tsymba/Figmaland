module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    important: true,
    darkMode: false, // or 'media' or 'class'
    theme:{
        colors: {
            'current': 'currentColor',
            'transparent': 'transparent',
        },
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1240px',
        },
        container: {
            center: true,
            padding: '15px',
            screens: {
              'desktop': '1300px',
            },
        },
        fontSize: {

        },
        lineHeight: {

        },
        borderRadius: {

        },
        fontFamily: {
            default: ['sans-serif'],
        },
        spacing: {

        },
        maxWidth: {

        },
        minWidth: {

        },
        maxHeight: {

        },
        minHeight: {

        },
        extend: {
            width:{

            },
            height:{

            },
        },
    },
    variants:{
        extend: {

        },
    },
    plugins: [],
}