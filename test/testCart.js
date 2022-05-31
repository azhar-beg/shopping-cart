const assert = require('assert');
const { Item } = require('../src/item.js');
const { Cart } = require('../src/cart.js');


describe('Cart', () => {
  it('Should validate equality of two carts', () => {
    const item1 = new Item(1, 'watch', 100);
    const item2 = new Item(2, 'watch', 100);

    const cart1 = new Cart();
    cart1.items.push(item1, item2);

    const cart2 = new Cart();
    cart2.items.push(item1, item2);

    assert.ok(cart1.equals(cart2));
  });

  it('Should validate equality of two unequal carts', () => {
    const item1 = new Item(1, 'watch', 100);
    const item2 = new Item(2, 'watch', 100);

    const cart1 = new Cart();
    cart1.items.push(item1, item2);

    const cart2 = new Cart();
    cart2.items.push(item1);
    assert.strictEqual(cart1.equals(cart2), false);

    cart2.items.push(item1);
    assert.strictEqual(cart1.equals(cart2), false);
  });
});