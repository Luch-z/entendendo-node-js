const { add, substract, divide } = require("./first-module");

console.log(add(5, 5));

try {
    console.log("trying to divide by zero");
    let result = divide(0, 10);
    console.log("result: ", result);    
} catch (error) {
    console.log("caught an error:", error.message);
}