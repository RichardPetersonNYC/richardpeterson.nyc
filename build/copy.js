module.exports = {
    jekyll: {
        files: [
            { expand: true, cwd: 'src/jekyll',  src: ['**/*', '!images/**'],                           dest: 'dist' },
        ],
    },
    assets: {
        files: [
            { expand: true, cwd: 'src/assets',  src: ['css/*', 'js/*'],                           dest: 'dist/assets/' },
        ],
    },
    fonts: {
        files: [
            { expand: true, cwd: 'src',  src: ['fonts/**'],                           dest: 'dist' },
        ],
    },
    images: {
        files: [
            { expand: true, cwd: 'src/assets',  src: ['images/*'],                           dest: 'dist/assets/' },
        ],
    }
};