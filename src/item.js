class Item {
  #id;
  #name;
  #price;
  constructor(id, name, price) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
  }

  equals(anotherItem) {
    return anotherItem instanceof Item &&
      this.#id === anotherItem.#id &&
      this.#name === anotherItem.#name &&
      this.#price === anotherItem.#price;
  }

  getId() {
    return this.#id;
  }

  isOf(id) {
    return this.#id === id;
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }
}

exports.Item = Item;
