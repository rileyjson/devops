var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 120 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 120);
      });
});

describe('Regular fibonacci value', function() {
    it('should return 3628800 for Fib(10)', function() {
        assert.strictEqual(main.fibonacci(10), 3628800
    );
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });

    describe('Negative', function() {
        it('should return undefined', function() {
            assert.strictEqual(main.fibonacci(-1), undefined);
          });
        });
});