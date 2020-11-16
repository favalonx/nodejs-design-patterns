const scout_prototype = require('./scout_prototype');

const alex = scout_prototype.clone();
alex.name = 'Alex';
alex.add('Slingshot');

const eve = scout_prototype.clone();
eve.name = 'Eve';
eve.add('Reading light');

console.log(`${alex.name}: ${alex.list}`);
console.log(`${eve.name}: ${eve.list}`);
