const crypto = require("node:crypto");
console.log("Hello World");

var a = 1078698;
var b = 28986;

// Synchronous Function - Will BLOCK THE MAIN THREAD - DON'T USE IT
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("Key is generated");


setTimeout(() => {
    console.log("call me right now!!!");
}, 0);//it will only be called once call stack of  main thread is empty.

//Password Base Key Deravtive Function
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("Second Key is generated");
});

function  multiplyFn(x,y){
    const result = a*b;
    return result;
}

var  c = multiplyFn(a,b);
console.log("Multiplication result is :",c);