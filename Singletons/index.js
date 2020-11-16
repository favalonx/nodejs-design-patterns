const Shopper = require('./Shopper');
const Store = require('./Store');
const logger = require('./Logger');

logger.log('Starting app...');

const alex = new Shopper('Alex', 500);

const ski_shop = new Store('Steep and deep supplies', [
  {
    item: 'Downhil Skis',
    qty: 5,
    price: 750,
  },
  {
    item: 'Knit Hat',
    qty: 20,
    price: 5,
  },
]);

logger.log('Finished config...');

console.log(`${logger.count} los total.`);

logger.logs.map((log) => console.log(`   ${log.message}`));
