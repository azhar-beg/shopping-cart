class Cart {
  constructor() {
    this.items = [];
  }

  equals(anotherCart) {
    return anotherCart instanceof Cart &&
      this.items.length === anotherCart.items.length &&
      this.items.every((item, index) => item.equals(anotherCart.items[index]));
  }

  add(item) {
    this.items.push(item);
  }

  remove(id) {
    this.items = this.items.filter((item) => !item.isOf(id));
  }

  totalPrice() {
    return this.items.reduce((total, item) => total + item.getPrice(), 0);
  }

}

exports.Cart = Cart;
