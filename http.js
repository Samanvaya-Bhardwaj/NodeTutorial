const http = require('http');

const server = http.createServer((req, res)=>{
if(req.url === '/'){
    res.end("Welcome to our home page")
}
else if(req.url === '/about'){
    res.end("Welcome to about page")
} else if(req.url === '/login'){
res.end("This is login page enter your information")
} else{
   ( `<h1>OOPS! This type of page not found</h1>
    <a href="/">Back to the homepage</a>`)
}
})
// req => represent incoming requests by the client
// res => represent responses to the requests by the server
server.listen(5000)
console.log("listening on port 5000")