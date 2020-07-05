const num = 385
const digit = require ("../modules/digitFromNumber");

const dec = digit (num, 1);
console.log(`Исходное число: ${num}`);
console.log(`После обработки: ${num - dec * 10}`);