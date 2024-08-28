require("./xyz.js");// one module into another 
var name ="Amit Jha";
const {x,calculateSum} = require("./sum.js");

var a =100;
var b =500;

// obj.calculateSum(a,b);
calculateSum(a,b);
console.log(x)


// console.log(name);
// console.log(a+b);
// console.log(global);
// console.log(this) // it prints an empty object
// console.log(globalThis);
console.log(globalThis === global);