module.exports = {
    main: {
        options: {
            mode: 'gzip'
        },
        expand: true,
        cwd: 'public/',
        src: ['**/*.+(js|css|html|svg|eot|ttf|otf)'],
        dest: 'public/'
    }
}
