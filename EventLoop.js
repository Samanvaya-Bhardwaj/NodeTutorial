console.log("First task")
setTimeout(()=>{
    console.log("Hello World")
},0)
console.log("second task")
//  so as we can clearly seen that the first task is printing first forward by second task and then Hello World IS printing, this is because that it is running in async mode(that is set time out)...
// so shorter task will be printing first, first it will going to print console.log() then it will print callback functions

setInterval(()=>{
    console.log("Hello Ravi Chhutiye")
},2000)
// setInterval(()=> is synchronous
console.log("Gourav Gand Deta h")

// async not bolocking event loop