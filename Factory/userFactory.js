const Employee = require('./Employee');
const Shopper = require('./Shopper');

module.exports = function (name, money = 0, type, employer) {
  if (type === 'employee') {
    return new Employee(name, money, employer);
  }
  return new Shopper(name, money);
};
