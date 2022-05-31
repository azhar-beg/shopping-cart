class Item {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  equals(anotherItem) {
    return anotherItem instanceof Item &&
      this.id === anotherItem.id &&
      this.name === anotherItem.name &&
      this.price === anotherItem.price;
  }
}

exports.Item = Item;
