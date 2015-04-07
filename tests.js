var disallowNew = require('./index');
var assert = require('assert');

function makeFn() {
  function f() { f.callCount += 1; };
  f.callCount = 0;
  return f;
}

var f, decorated, error;

f = makeFn();
decorated = disallowNew(f);
decorated();
assert.equal(f.callCount, 1, 'Decorated function was called.');

assert.throws(
  function() {
    f = makeFn();
    decorated = disallowNew(f);
    new decorated();
  },
  /Don't use "new" with f/
);
