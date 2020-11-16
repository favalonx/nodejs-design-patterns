const Person = require('./Person');

module.exports = class PersonBuilder {
  constructor(name) {
    this.name = name;
  }
  makeEmployee() {
    this.isEmployee = true;
    return this;
  }
  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }
  makeParttime(hours = 20) {
    this.hours = hours;
    return this;
  }
  withMoney(money) {
    this.money = money;
    return this;
  }
  withList(list = []) {
    this.shoppingList = list;
    return this;
  }
  build() {
    return new Person(this);
  }
};
