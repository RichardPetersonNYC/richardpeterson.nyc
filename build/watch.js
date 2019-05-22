module.exports = function (grunt) {
  return {
    jekyll: {
      files: ['src/jekyll/**/**/**/*'],
      tasks: ['copy:jekyll'],
    },
    styles: {
      files: ['src/sass/*.scss'],
      tasks: ['stylelint', 'sass', 'postcss', 'cssmin'],
    },
    images: {
      files: ['src/assets/images/**/*', 'src/jekyll/images/**/**/*'],
      tasks: ['image'],
    },
    assets: {
      files: ['src/assets/css/*', 'src/assets/js/*'],
      tasks: ['copy:assets'],
    },
    downloads: {
      files: ['src/download/*'],
      tasks: ['copy:download'],
    },
    svg: {
      files: ['src/assets/svg/**/*'],
      tasks: ['svgmin'],
    },
    options: {
      spawn        : false,
      interrupt    : true,
      debounceDelay: 250,
      livereload: true,
      }, 
};
  };
