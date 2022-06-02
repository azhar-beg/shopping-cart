class CartItem {
  #id;
  #name;
  #price;
  #quantity;
  constructor(id, name, price, quantity) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
  }

  #arePropertiesEqual(anotherItem) {
    return this.#id === anotherItem.#id &&
      this.#name === anotherItem.#name &&
      this.#price === anotherItem.#price &&
      this.#quantity === anotherItem.#quantity;

  }
  equals(anotherItem) {
    return anotherItem instanceof CartItem &&
      this.#arePropertiesEqual(anotherItem);
  }

  totalPrice() {
    return this.#price * this.#quantity;
  }
}

exports.CartItem = CartItem;
