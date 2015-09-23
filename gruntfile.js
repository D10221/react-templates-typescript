/**
 * Author: Bruno Grieder
 * Date:   19/01/2014
 * Time:   12:30
 *
 * This file is taking care of building the front-end, namely the js form Typescript, and the css from LESS
 * It is used in dev by direct invocation and by gradle (using the grunt plugin) to build the whole project
 *
 * the package.json file provides a way of installing required grunt plugins automatically by running `npm install`
 */



module.exports = function ( grunt ) {

    var path = require( 'path' );

    // load the task
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-ts' );
    grunt.loadNpmTasks('grunt-react-templates');
    grunt.loadNpmTasks( 'grunt-browserify' );

    // Configure grunt here
    grunt.initConfig( {


        //out: 'src/main/webapp/js/app.js',
        //
        ts: {
            dev: {
                src: ['src/main/typescript/**/*.ts'],
                reference: 'src/main/typescript/references.d.ts',
                outDir: 'build/generated/',
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: false,
                    declaration: false,
                    removeComments: false
                }
            },
            release: {
                src: ['src/main/typescript/**/*.ts'],
                reference: 'src/main/typescript/references.d.ts',
                outDir: 'build/generated/',
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: false,
                    declaration: false,
                    removeComments: true
                }
            }
        },

        clean: {
            templates: ['src/main/typescript/**/*.rt.ts'],
            dev: ['build/generated/app.js'],
            release: ['build/generated/*.*']
        },


        reactTemplates: {
            src: ['src/main/typescript/**/*.rt'],
            modules: 'typescript'
        },

        browserify: {
            dev: {
                files: {
                    'build/generated/app.js': ['build/generated/main.js']
                },
                options: {
                    debug: false,
                    transform: ['browserify-shim'],
                    watch: true
                }
            },
            release: {
                src: ['build/generated/**/*.js'],
                dest: 'build/generated/app.js'
            }
        }

    } );

    grunt.registerTask("rt", ["react-templates"]);
    grunt.registerTask( "compile", ['rt','ts:dev', 'clean:dev', 'browserify:dev'] );
    grunt.registerTask( "release", ['clean:templates', 'clean:release', 'rt', 'ts:release', 'browserify:release'] );
    grunt.registerTask( "default", ['release'] );

};