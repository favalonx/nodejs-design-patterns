class Shopper {
  constructor(name = 'unnamed') {
    this._name = name;
    this._list = [];
  }
  set name(val) {
    this._name = val;
  }
  get name() {
    return this._name;
  }
  get list() {
    return this._list.join(', ');
  }
  add(item) {
    this._list.push(item);
  }
  clone() {
    const proto = Object.getPrototypeOf(this);
    const cloned = Object.create(proto);
    cloned._name = this._name;
    cloned._list = [...this._list];
    return cloned;
  }
}

module.exports = Shopper;
