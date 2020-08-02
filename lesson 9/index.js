let num = 12345;
const digit = require ("../modules/digitFromNumber");
console.log(num);
num -= digit (num,1 ) * 10;
console.log(num);
num -= digit (num,3 ) * 1000;
console.log(num);