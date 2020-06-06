const num = 298;
const h = Math.floor(num / 100);
const d = Math.floor( (num - h * 100) / 10);
const o = num - (h * 100 + d * 10);
const mult = h * d * o;
console.log(`${num} : ${h} * ${d} * ${o} = ${mult}`);