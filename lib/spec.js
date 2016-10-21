'use strict';

require('source-map-support/register');

var _mocha = require('mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inherits = _mocha2.default.utils.inherits;
var Base = _mocha2.default.reporters.Base;
var cursor = Base.cursor;

/**
 * Initialize a new `GherkinSpec` test reporter.
 *
 * @api public
 * @param {Runner} runner
 */
function GherkinSpec(runner) {
  Base.call(this, runner);

  var indents = 0;
  var n = 0;

  if (!Base.useColors) {
    _safe2.default.enabled = false;
  }

  function indent() {
    return Array(indents).join('  ');
  }

  runner.on('start', function () {
    console.log();
  });

  runner.on('suite', function (suite) {
    ++indents;

    var text = suite.title;
    switch (suite.name) {
      case 'Feature':
        text = _safe2.default.underline.bold(suite.title);
        suite.stories.forEach(function (story) {
          text += '\n' + indent() + '  ' + story;
        });
        break;
      case 'Scenario':
        text = _safe2.default.green(suite.title);
        break;
      default:
        text = Base.color('suite', text);
    }
    console.log(indent() + text);
  });

  runner.on('suite end', function () {
    --indents;
    if (indents === 1) {
      console.log();
    }
  });

  runner.on('pending', function (test) {
    console.log(indent() + '  ' + _safe2.default.cyan('- ' + test.title));
  });

  runner.on('pass', function (test) {
    var fmt = indent() + _safe2.default.green('  ' + Base.symbols.ok + ' %s');
    if (test.speed === 'fast') {
      cursor.CR();
      console.log(fmt, test.title);
    } else {
      fmt += Base.color(test.speed, ' (%dms)');
      cursor.CR();
      console.log(fmt, test.title, test.duration);
    }
  });

  runner.on('fail', function (test) {
    cursor.CR();
    console.log(indent() + '  ' + _safe2.default.red('%d) %s'), ++n, test.title);
  });

  runner.on('end', this.epilogue.bind(this));
}

// Inherit from `Base.prototype`.
inherits(GherkinSpec, Base);

// Expose `GherkinSpec`.
exports = module.exports = GherkinSpec;
//# sourceMappingURL=spec.js.map
