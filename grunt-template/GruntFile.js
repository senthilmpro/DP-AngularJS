module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        concat: {
            basic: {
                src: [
                    'app/scripts/app.init.js',
                    'app/scripts/settings.js',
                    'app/scripts/controller.home.js'
                ],
                dest: 'dist/js/scripts.js'
            },
            extras: {
                src: [
                    'app/lib/js/angular.min.js',
                    'app/lib/js/jquery-3.1.1.min.js'
                ],
                dest: 'dist/scripts/vendor.js'
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['concat', 'uglify']
        },
        uglify: {
            options: {
                mangle: true
            },
            target: {
                files: {
                    'dist/scripts/scripts.min.js': ['dist/js/scripts.js']
                }
            }
        },
        copy: {
            main: {
                files: [{
                    src: ["app/index.html"],
                    dest: "dist/index.html",
                    isFile: true
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'copy', 'uglify']);

};
