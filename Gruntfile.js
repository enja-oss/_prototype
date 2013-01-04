module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          paths: ['assest/styles','node_modules/grunt-contrib-stylus/node_modules'],
          compress: false,
          urlfunc: 'embedurl'
        },
        files: {
          'assets/styles/master.css': 'assets/styles/master.styl'
        }
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          "index.html": ["index.jade"]
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/styles/**/*.styl'],
        tasks: ['stylus']
      },
      html: {
        files: ['index.jade', 'includes/**/*.jade'],
        tasks: ['jade']
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task
  grunt.registerTask('default', ['connect', 'watch']);
};
