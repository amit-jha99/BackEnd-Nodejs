const fs = require("fs");
setImmediate(()=>console.log("setImmediate"));
setTimeout(()=>console.log("Timer expired"),0);
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf-8",()=>{
    console.log("File Reading CB");
});
process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nextTick"));
    console.log("nextTick");
});
console.log("Last line of the file.");


//Last Line of the file.
//nextTick 
//**if there is nested nextick it will be printed before going to any other thing
//inner nextTick
//Promise
//Timer expired
//setImmediate
//File Reading CB