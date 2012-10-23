# grunt-it

A grunt task for executing tests written with the it test framework

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-it`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-it');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

Add the following to your grunt.js file.

    it : {
        all : {
            src : 'test/**/*.test.js',
            options : {
                timeout : 3000, // not fully supported yet
                reporter : 'dotmatrix'
            }
        }
    }

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Nick Nisi  
Licensed under the MIT license.
