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
          pretty: true,
          data: {
            debug: false,
            data: '<json:data.json>'
          }
        },
        files: {
          './index.html': ['./index.jade']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          keepalive: true
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
    },
    parallel: {
      assets: {
        grunt: true,
        tasks: ['watch:css', 'watch:html', 'connect']
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-parallel');

  // Default task
  grunt.registerTask('default', ['parallel']);
};
