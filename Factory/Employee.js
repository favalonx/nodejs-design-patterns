module.exports = class Employee {
  constructor(name, money, employer) {
    this.name = name;
    this.money = money;
    this.employer = employer;
    this.employed = true;
  }
  payDay(m) {
    this.money = this.money + m;
  }
  toString() {
    return JSON.stringify(this);
  }
};
