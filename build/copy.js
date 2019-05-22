module.exports = {
    jekyll: {
        files: [
            { expand: true, cwd: 'src/jekyll',  src: ['**/**/*', '!images/**'],                           dest: 'dist' },
        ],
    },
    assets: {
        files: [
            { expand: true, cwd: 'src/assets',  src: ['css/*', 'js/*'],                           dest: 'dist/assets/' },
        ],
    },
    download: {
        files: [
            { expand: true, cwd: 'src',  src: ['download/**'],                           dest: 'dist' },
        ],
    },
    images: {
        files: [
            { expand: true, cwd: 'src/assets',  src: ['images/*', 'videos/*'],                           dest: 'dist/assets/' },
        ],
    }
};