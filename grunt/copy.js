module.exports = {
    default: {
        expand: true,
        cwd: 'app/assets/',
        src: ['**'],
        dest: 'public/'
    },
    angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ["angular.js"],
        dest: 'public/scripts'
    },
    js: {
        expand: true,
        cwd: 'app/scripts/',
        src: ['**'],
        dest: 'public/scripts'
    }
}
