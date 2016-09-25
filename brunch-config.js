module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'js/vendor.js': /^(?!app)/,
                'js/app.js': /^app/
            }
        },
        stylesheets: {joinTo: 'style/chrisipowell.css'}
    },

    plugins: {
        babel: {presets: ['es2015']},
        sass: {
            mode: 'native'
        }
    }
};
