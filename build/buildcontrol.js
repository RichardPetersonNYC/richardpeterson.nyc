module.exports = function (grunt) {
    return {
        options: {
          dir: 'dist',
          commit: true,
          push: true,
          message: 'Built'
        },
        pages: {
          options: {
            remote: 'git@github.com:Draxs/richardpeterson.nyc.git',
            branch: 'gh-pages'
          }
        },
      }
};