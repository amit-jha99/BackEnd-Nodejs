require("./xyz.js");// one module into another 
var name ="Amit Jha";
// const {x,calculateSum} = require("./sum.js");
// import { x,calculateSum } from "./sum.js";
// const {calculateMultiply} = require('./calculate/multiply.js');

const {calculateMultiply,calculateSum} = require("./calculate");
const data = require("./data.json");

var a =100;
var b =500;

// obj.calculateSum(a,b);
calculateSum(a,b);
calculateMultiply(a,b);
// console.log(x)
// var x =100;


// console.log(name);
// console.log(a+b);
// console.log(global);
// console.log(this) // it prints an empty object
// console.log(globalThis);
console.log(globalThis === global);
console.log(data);