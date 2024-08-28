//important:->Modules protects their variables and functions from leaking
console.log("Sum module executed");
var x = "Hello World";
function calculateSum(a, b) {
    // z ="escape the matrix";
  const sum = a + b;
  console.log(sum);
}

// console.log(module.exports)
module.exports = {
  x,
  calculateSum,
};
