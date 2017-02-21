module.exports = {
    css: {
        files : ['app/style/**.scss'],
        tasks: ['sass', 'uncss'],
        options: { livereload: true }
    },
    assets: {
        files: ['app/assets/**'],
        tasks: ['copy']
    },
    scripts: {
        files: ['app/scripts/**'],
        tasks: ['copy:js']
    }
}
