const assert = require('assert');
const { Item } = require('../src/item.js');
const { Cart } = require('../src/cart.js');

describe('Cart', () => {
  it('Should validate equality of two carts', () => {
    const item1 = new Item(1, 'watch', 100);
    const item2 = new Item(2, 'watch', 100);

    const cart1 = new Cart();
    cart1.add(item1, item2);

    const cart2 = new Cart();
    cart2.add(item1, item2);

    assert.ok(cart1.equals(cart2));
  });

  it('Should validate equality of two unequal carts', () => {
    const item1 = new Item(1, 'watch', 100);
    const item2 = new Item(2, 'watch', 100);

    const cart1 = new Cart();
    cart1.add(item1);
    cart1.add(item2);

    const cart2 = new Cart();
    cart2.add(item1);
    assert.strictEqual(cart1.equals(cart2), false);

    cart2.add(item1);
    assert.strictEqual(cart1.equals(cart2), false);
  });

  it('should return total price of the items in the cart', () => {
    const item = new Item(1, 'watch', 100);

    const cart = new Cart();
    cart.add(item);

    assert.deepStrictEqual(cart.totalPrice(), 100);

    const item2 = new Item(2, 'watch', 500);
    cart.add(item2);
    assert.deepStrictEqual(cart.totalPrice(), 600);
  });

  it('Should remove item of given id', () => {
    const item = new Item(1, 'watch', 100);

    const actualCart = new Cart();
    actualCart.add(item);
    actualCart.remove(1);

    const expectedCart = new Cart();

    assert.ok(actualCart.equals(expectedCart));
  });

});
