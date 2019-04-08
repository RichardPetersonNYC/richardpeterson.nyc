module.exports = {
    jekyll: {
        files: [
            { expand: true, cwd: 'src/jekyll',  src: ['**/*', '!images/**'],                           dest: 'dist' },
        ],
    },
    assets: {
        files: [
            { expand: true, cwd: 'src/assets',  src: ['css/*'],                           dest: 'dist/assets/' },
        ],
    },
    images: {
        files: [
            { expand: true, cwd: 'src/assets',  src: ['images/*'],                           dest: 'dist/assets/' },
        ],
    }
};