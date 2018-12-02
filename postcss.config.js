module.exports = {
    map: {
        inline: false
    },
    plugins: {
        "postcss-preset-env": {
            stage: 0
        },
        cssnano: {
            preset: ['advanced', {
                autoprefixer: {
                    add: false
                }
            }]
        }
    }
};
