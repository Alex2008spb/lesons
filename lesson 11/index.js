const factorial = require("../modules/factorial");
const num = factorial(24, 15 );
console.log(num);
let zeros = 0;
for (let div = BigInt(10) ; num % div === 0n; zeros++ , div *= BigInt(10));

console.log(zeros);