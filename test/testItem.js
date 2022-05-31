const { Item } = require('../src/item.js');
const assert = require('assert');

describe('Item', () => {
  it('Should validate equality of two Items', () => {
    const item1 = new Item(1, 'watch', 100);
    const item2 = new Item(1, 'watch', 100);
    assert.ok(item1.equals(item2));
  });

  it('Should validate equality of two unequal Items', () => {
    const item1 = new Item(1, 'watch', 100);
    const item2 = new Item(2, 'watch', 100);
    assert.strictEqual(item1.equals(item2), false);
  });
});