const http = require('http')

const server = http.createServer((req, res)=>{
    var temp = 0;
    var kel = (273+ temp);
    res.end(`Temperature in Kelvin is ${kel}`)
})
server.listen(5000)