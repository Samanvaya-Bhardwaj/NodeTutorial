const os = require('os')
// console.log(os)
// int this module as it is build in module so we do not need to use "./" while requiring it
console.log(os.hostname)
const user = os.userInfo();
console.log(user)
// while adding "os." then we got many options that we can use to see various options

console.log(`This system uptime is ${os.uptime()}milli seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOs)