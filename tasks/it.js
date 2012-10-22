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

    grunt.registerTask('it', 'Execute it tests', function () {
        var config = grunt.config.get('it'),
            dirs = config.dirs || '/',
            reporter = config.reporter || 'dotmatrix';
        grunt.log.write(grunt.helper('it'));
    });

    // ==========================================================================
    // HELPERS
    // ==========================================================================

    grunt.registerHelper('it', function () {
        return 'it!!!';
    });

};
