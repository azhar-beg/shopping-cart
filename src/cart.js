class Cart {
  constructor() {
    this.items = [];
  }

  equals(anotherCart) {
    return anotherCart instanceof Cart &&
      this.items.length === anotherCart.items.length &&
      this.items.every((item, index) => item.equals(anotherCart.items[index]));
  }
}

exports.Cart = Cart;
