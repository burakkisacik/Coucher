module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: '#dde1e7',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
