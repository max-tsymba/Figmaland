module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    important: true,
    darkMode: false, // or 'media' or 'class'
    theme:{
        colors: {
            'current': 'currentColor',
            'transparent': 'transparent',
            'white': {
                DEFAULT: 'white',
                '100': '#F4F4F4',
            },
            'black' : {
                DEFAULT: 'black',
                '100': '#18171D',
            },
            'primary-100': '#2091F9',
            'secondary-100': '#252B42',
            'text': '#252B42',
            'text-second': '#374754',
            'border-100': '#D8D8D8',
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
              'desktop': '1270px',
            },
        },
        fontSize: {
            'sm': '15px',
            'sm-m': '16px',
            'm': '18px',
            'md': '20px',
            'lg': '28px',
            'xl': '48px',
            'xxl': '74px'
        },
        lineHeight: {
            '10': '1',
            '11': '1.1',
            '12': '1.2',
            '14': '1.4',
            '15': '1.5',
            '18': '1.8',
        },
        borderRadius: {
            '10': '10px',
            '35': '35px',
            '40': '40px',
            '48': '48px',
        },
        fontFamily: {
            default: ['Roboto', 'sans-serif'],
        },
        spacing: {
            '8': '8px',
            '10': '10px',
            '12': '12px',
            '20': '20px',
            '24': '24px',
            '30': '30px',
            '40': '40px',
        },
        maxWidth: {
            '1050': '1050px',
        },
        minWidth: {

        },
        maxHeight: {

        },
        minHeight: {
            '570': '570px',
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
            margin: ['last'],
        },
    },
    plugins: [],
}