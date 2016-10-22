module.exports = {
    main: {
        options: {
            mode: 'gzip'
        },
        expand: true,
        cwd: 'public/',
        src: ['**/*'],
        dest: 'public/'
    }
}
