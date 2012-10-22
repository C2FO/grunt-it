/*
 * grunt-it
 * https://github.com/nicknisi/grunt-it
 *
 * Copyright (c) 2012 Nick Nisi
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('it', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('it'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('it', function() {
    return 'it!!!';
  });

};
