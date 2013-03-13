/*jshint strict:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        it : {
            dirs : ['tests'],
            reporter : 'dotmatrix'
        },
        nodeunit: {
            tests: ['test/**/*.js']
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                es5: true
            },
            globals: {}
        }
    });

    // Load local tasks.
    grunt.loadTasks('tasks');

    // Default task.
    grunt.registerTask('default', ['jshint', 'test']);
    grunt.registerTask('test', ['nodeunit']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
};
