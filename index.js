module.exports = function(fn) {
  return function wrapper() {
    if (this instanceof wrapper)
      throw new Error('Don\'t use "new" with ' + fn.name + '.');
    return fn.apply(this, arguments);
  }
}
