
const hi = require('./modules');

hi('Sam');

const names = require('./exp')
// console.log(names.Raand)
// console.log(names.Bhadwa, names.Gandu)
console.log(names)

// this is how we can use the exported functions or anyting in any other file, i.e., we just need require keyword and the name from which we have exported

require('./check');