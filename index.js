'use strict';

var _ = require('lodash');
var spritesheet = require('spritesheet-js');

// Documentation for Brunch plugins:
// http://brunch.io/docs/plugins

// Remove everything your plugin doesn't need.
function SpritesheetJSBrunchPlugin(config) {
    this.defaults = {
      format: 'json',
      name: 'spritesheet',
      trim: true,
      square: false,
      powerOfTwo: false,
      divisibleByTwo: false,
      algorithm: 'growing-binpacking',
      padding: 0,
      sort: 'none',
    };

    // Replace 'plugin' with your plugin's name;
    this.config = _.merge(true, this.defaults, config.plugins.spritesheet || {});
    // this.config = config.plugins.spritesheet;
  };

  // Optional
  // Specifies additional files which will be included into build.
  // get include() { return ['path-to-file-1', 'path-to-file-2']; }

  // file: File => Promise[Boolean]
  // Called before every compilation. Stops it when the error is returned.
  // Examples: ESLint, JSHint, CSSCheck.
  // lint(file) { return Promise.resolve(true); }

  // file: File => Promise[File]
  // Transforms a file data to different data. Could change the source map etc.
  // Examples: JSX, CoffeeScript, Handlebars, SASS.
  // compile(file) { return Promise.resolve(file); }

  // file: File => Promise[Array: Path]
  // Allows Brunch to calculate dependants of the file and re-compile them too.
  // Examples: SASS '@import's, Jade 'include'-s.
  // getDependencies(file) { return Promise.resolve(['dep.js']); }

  // file: File => Promise[File]
  // Usually called to minify or optimize the end-result.
  // Examples: UglifyJS, CSSMin.
  // optimize(file) { return Promise.resolve({data: minify(file.data)}); }

  // files: [File] => null
  // Executed when each compilation is finished.
  // Examples: Hot-reload (send a websocket push).
  SpritesheetJSBrunchPlugin.prototype.preCompile = function() {
    spritesheet(this.config.files, this.config, function (err) {
      if (err) throw err;

      console.log('spritesheet successfully generated');
    });
  };

  // files: [File] => null
  // Executed when each compilation is finished.
  // Examples: Hot-reload (send a websocket push).
  // onCompile(files) {}

  // Allows to stop web-servers & other long-running entities.
  // Executed before Brunch process is closed.
  // teardown() {}

// Required for all Brunch plugins.
SpritesheetJSBrunchPlugin.prototype.brunchPlugin = true;

// Required for compilers, linters & optimizers.
// 'javascript', 'stylesheet' or 'template'
SpritesheetJSBrunchPlugin.prototype.type = 'precompilers';

// Required for compilers & linters.
// It would filter-out the list of files to operate on.
// BrunchPlugin.prototype.extension = 'js';
// BrunchPlugin.prototype.pattern = /\.js$/;

// Indicates which environment a plugin should be applied to.
// The default value is '*' for usual plugins and
// 'production' for optimizers.
// BrunchPlugin.prototype.defaultEnv = 'production';

module.exports = SpritesheetJSBrunchPlugin;
