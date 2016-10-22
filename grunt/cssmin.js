module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: 'public/style',
            src: ['*.css', '!*.min.css'],
            dest: 'public/css',
            ext: '.min.css'
        }]
    }
}
