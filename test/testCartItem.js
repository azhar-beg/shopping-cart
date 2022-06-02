const assert = require('assert');
const { CartItem } = require('../src/cartItem.js');

describe('CartItem', () => {
  it('Should check equality of two items', () => {
    const item1 = new CartItem(1, 'watch', 100, 1);
    const item2 = new CartItem(1, 'watch', 100, 1);
    assert.ok(item1.equals(item2));
  });

  it('Should check equality of two unequal items', () => {
    const item1 = new CartItem(1, 'watch', 10, 1);
    const item2 = new CartItem(1, 'watch', 100, 1);
    assert.strictEqual(item1.equals(item2), false);
  });
});
