module.exports = {
    all: {
        options: {
            configFile: 'build/conf/eslint.json',
            rulePaths: ['build/conf/']
        },
        src: [
            'src/assets/js/**/*.js',
        ],
    },
};