/*jshint strict:false*/
/*
 * grunt-it
 * https://github.com/nicknisi/grunt-it
 *
 * Copyright (c) 2013 Nick Nisi
 * Licensed under the MIT license.
 */
"use strict";

module.exports = function (grunt) {

    grunt.registerMultiTask('it', 'execute it unit tests', function () {
            var it = require('it'),
                path = require('path'),
                Module = require("module").Module,
                oToString = Object.prototype.toString,
                _require = Module.prototype.require;

            //ensure then we call get the same it
            Module.prototype.require = function require(mod) {
                if (mod === "it") {
                    return it;
                } else {
                    return _require.apply(this, arguments);
                }
            };

            var filepaths = this.filesSrc;
            var paths = filepaths.map(function (p) {
                return path.resolve(p);
            });
            var options = this.data.options || {},
                reporter = options.reporter || 'dotmatrix';

            // set the process environment
            process.env.NODE_ENV = options.environment || 'test';

            var done = this.async();
            it.reporter(reporter);
            paths.forEach(function (f) {
                require(f);
            });
            it.run().then(function (results) {
                // support "no tests found"
                if (results === undefined) {
                    return done(true);
                }

                try {
                    if (oToString(results) === "[object Number]") {
                        done(0 === results);
                    } else {
                        done(results.errorCount === 0 &&
                            results.totalCount === (results.successCount + results.skippedCount) &&
                            results.pendingCount === 0);
                    }
                } catch (error) {
                    console.error(error);
                    done(false);
                }
            });
        }
    );
};
