const digit = require ("../modules/digitFromNumber");
const num = 379;
console.log(num);
const o = digit(num,0);
const d = digit(num,1);
const h = digit(num,2);
console.log(`${o}${d}${h}`);
const num1 = o * 100 + d * 10 + h * 1;
console.log(num1);