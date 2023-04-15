// const http = require('http')
// const server = http.createServer((res, req)=>{

// })


const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
var far = 132;
var cel = ((far-32) * 5/9).toFixed(2);
res.end(`In celsius: ${cel}`);
});

server.listen(2000, () => {
console.log("Server started at 2000");
});