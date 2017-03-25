// This file is not transpiled so must use commonJS and es5

// register babel to transpile before our tests run.
require('babel-register')();

// disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function(){};
