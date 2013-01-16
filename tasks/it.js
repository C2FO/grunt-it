/*jshint strict:false*/
/*
 * grunt-it
 * https://github.com/nicknisi/grunt-it
 *
 * Copyright (c) 2012 Nick Nisi
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {

    // Please see the grunt documentation for more information regarding task and
    // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

    // ==========================================================================
    // TASKS
    // ==========================================================================

    // grunt.registerTask('it', 'Execute it tests', function () {
    //     var config = grunt.config.get('it'),
    //         dirs = config.dirs || '/',
    //         reporter = config.reporter || 'dotmatrix';
    //     grunt.log.write(grunt.helper('it'));
    // });

    grunt.registerMultiTask('it', 'execute it unit tests', function () {
            var it = require('it'),
                comb = require('comb'),
                config = grunt.config.get('it'),
                files = config.files,
                path = require('path'),
                Module = require("module").Module,
                _require = Module.prototype.require;

            //ensure then we call get the same it
            Module.prototype.require = function require(mod) {
                if (mod === "it") {
                    return it;
                } else {
                    return _require.apply(this, arguments);
                }
            };

            var filepaths = grunt.file.expandFiles(this.file.src);
            grunt.file.clearRequireCache(filepaths);
            var paths = filepaths.map(path.resolve),
                options = this.data.options || {},
                reporter = options.reporter || 'dotmatrix';

            // set the process environment
            process.env.NODE_ENV = options.environment || 'test';

            var done = this.async();
            it.reporter(reporter);
            paths.forEach(function (f) {
                require(f);
            });
            it.run().then(function (results) {
                done(0 === results);
            });
        }
    );

// ==========================================================================
// HELPERS
// ==========================================================================

// grunt.registerHelper('it', function () {
//     return 'it!!!';
// });

}
;
