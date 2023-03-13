const { interfaces } = require("mocha");

function add(a, b){
    let c = a + b;
    return c;
}
function subtract(a, b){
    let c = a - b;
    return c;
}
function multiply(a, b){
    let c = a * b;
    return c;
}
function divide(a, b){
    let c = a / b;
    return c;
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}
function makeInt(n){
    n = parseInt(n, 10);
    return n;
}
function preserveDecimal(n){
    n = parseFloat(n);
    return n;
}
