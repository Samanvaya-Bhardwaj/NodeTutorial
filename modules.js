// We are going to learn modules in this session 
// every file in node is module

const Raand  = "Ravi Randi";

const hi = (name) =>{
    console.log(`Hello ${name}`)
}

hi("sam");
// here are the number of ways to call this function either we can directly pass the name in the paranthesis or we can cereate a variable that can be passes to the function
hi(Raand)

// console.log(module)
// this is just to show that yes, evey file in node js is a module


module.exports = hi;