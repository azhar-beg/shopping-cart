const { CartItem } = require('./cartItem.js');

class Cart {
  #items;
  constructor() {
    this.#items = [];
  }

  equals(anotherCart) {
    return anotherCart instanceof Cart &&
      this.#items.length === anotherCart.#items.length &&
      this.#items.every((item, index) =>
        item.equals(anotherCart.#items[index]));
  }

  add(item, quantity) {
    const id = item.getId();
    const name = item.getName();
    const price = item.getPrice();
    const cartItem = new CartItem(id, name, price, quantity);
    this.#items.push(cartItem);
  }

  remove(id) {
    const itemToRemove = this.#items.find((item) => item.isOf(id));
    const index = this.#items.indexOf(itemToRemove);
    this.#items.splice(index, 1);
  }

  totalPrice() {
    return this.#items.reduce((total, item) => total + item.totalPrice(), 0);
  }

}

exports.Cart = Cart;
