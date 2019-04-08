module.exports = {
    all: {
        options: {
          optipng: false,
          pngquant: true,
          zopflipng: false,
          jpegRecompress: false,
          mozjpeg: true,
          guetzli: false,
          gifsicle: true,
          svgo: true
        },
      files: [
        {
          expand: true,
          cwd: 'src/jekyll/',
          src: ['images/**/**/*.{png,jpg,jpeg,gif}'],
          dest: 'dist/',
        }
      ]
    }
};