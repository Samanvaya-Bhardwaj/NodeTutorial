const path = require('path');
// console.log(path.sep)


const filePath  = path.join('Content','Subfolder','Content.txt');
console.log(filePath)
const base = path.basename(filePath)
console.log(base)

// there are many methods in the path module too... whenevr we need we can google it  