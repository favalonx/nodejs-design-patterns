module.exports = class Shopper {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this.employed = false;
  }
  toString() {
    return JSON.stringify(this);
  }
};
