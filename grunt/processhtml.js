module.exports = {
    dist: {
        options: {
            process: true,
            data: {
                message: 'This is production distribution'
            }
        },
        files: {
            'public/index.html': ['public/index.html']
        }
    }
}
