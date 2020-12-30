const colors = require('tailwindcss/colors')

module.exports = {

    darkMode: 'class',

    theme: {

        colors: {
            'white': colors.white,
            'black': colors.black,
            'gray': colors.blueGray,
            'dark': colors.blueGray,
            'primary': {
                DEFAULT: colors.blue['800'],
                dark: colors.blue['900']
            },
            'secondary': {
                DEFAULT: colors.blueGray['600'],
                dark: colors.blueGray['800']
            },
            'alt': colors.blueGray[100],
            'outline': colors.blue[400],
            'warning': colors.red['700'],
            'warning-light': colors.red['400']

        },

        spacing: {
            'normal': '1rem',
            'block': '1.5rem',
            'wide': '3rem',

            0: '0px',
            1: '0.25rem',
            1.5: '0.375rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            8: '2rem',
            10: '2.5rem',
            12: '3rem',
            16: '4rem'

        },

        fontFamily: {
            'sans': ['"Open Sans"', 'Arial', 'system-ui', 'sans-serif'],
            'serif': ['"Roboto Slab"', 'Georgia', 'system-ui', 'serif']
        },

        fontWeight: {
            'light': 300,
            'normal': 400,
            'bold': 600
        },

        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',

        },

        borderRadius: {
            DEFAULT: '0.5rem',
            none: '0rem',
            md: '0.375rem',
        },

        opacity: {
            0: '0',
            5: '0.05',
            25: '0.25',
            medium: '0.40',
            low: '0.80',
            95: '0.95',
            100: '1',
        },

        transitionDuration: {
            DEFAULT: '250ms',
        },

        rotate: {
            '0': '0deg',
            '3': '3deg',
            '-3': '-3deg',
            '180': '180deg',
        },

        extend: {
            screens: {
                'xs': '365px',
                'xl': '1160px',
                '2xl': '1620px'
            },

            fontSize: {
                'base': '1.0625rem',
            },

            width: {
                'card': '350px',
                'card-small': '300px',
                48: '12rem',
                64: '16rem',
            },

            height: {
                32: '8rem',
                48: '12rem',
                64: '16rem',
                96: '24rem'
            },

            minWidth: {
                'card': '350px',
                'card-small': '300px'
            },

            aspectRatio: {
                'none': 0,
                'square': [1, 1],
                '16/9': [16, 9],
                '4/3': [4, 3],
                '21/9': [21, 9]
            },
        }
    },

    // no responsive color variants,
    // this is from tailwindcss/stubs/defaultConfig.stug.js
    // but dropped unused variants for smaller file size
    variants: {
        backgroundColor: ['group-hover', 'dark','hover', 'focus'],
        borderColor: ['group-hover', 'dark', 'hover', 'focus'],
        divideColor: [],
        ringColor: ['focus', 'hover'],
        ringOffsetColor: ['focus', 'hover'],
        textColor: ['group-hover', 'dark', 'focus-within', 'hover', 'focus'],
        fontWeight: [],
        fontFamily: [],
        extend: {
            rotate: ['group-hover', 'group-focus']
        }
    },

    // avoid unnecessary color/gradient utilities
    corePlugins: {
        placeholderColor: false,
        backgroundImage: false,
        gradientColorStops: false,
        // borderRadius: false,
        // boxShadow: false
    },

    plugins: [
        require("tailwindcss-responsive-embed"),
        require('tailwindcss-aspect-ratio'),
    ],

    purge: [
        './templates/**/*.twig',
        './templates/**/*.svg'
    ]

}
