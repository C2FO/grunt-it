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

    grunt.registerMultiTask('it', 'execute it unit tests', function () {
        var it = require('it'),
            comb = require('comb'),
            config = grunt.config.get('it'),
            files = config.files,
            path = require('path');

        var filepaths = grunt.file.expandFiles(this.file.src);
        grunt.file.clearRequireCache(filepaths);

        var paths = filepaths.map(path.resolve),
            options = this.data.options || {},
            reporter = options.reporter || 'dotmatrix';

        var done = this.async();
        return comb.serial(comb.array.compact(paths.map(function (f) {
            var suite = require(f);
            suite.reporter = reporter;
            return suite.run ? suite.run.bind(suite) : null;
        }))).then(function (results) {
            var its = {};
            var errors = 0;
            results.forEach(function (summary) {
                comb(summary).forEach(function (testData) {
                    comb(testData.summaries).forEach(function (summaryData) {
                        if (summaryData.status === 'failed') {
                            errors++;
                        }
                    });
                });
                comb.merge(its, summary);
            });
            it.printSummary(its);
            done(0 === errors);
        });
    });

    // ==========================================================================
    // HELPERS
    // ==========================================================================

    grunt.registerHelper('it', function () {
        return 'it!!!';
    });

};
