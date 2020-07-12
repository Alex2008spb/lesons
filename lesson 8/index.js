const num = 123456;
const digit = require ("../modules/digitFromNumber");
const first = digit(num ,0);
const sixth = digit(num ,5);
const change = num - first - sixth * 100000 + first *100000 + sixth;
console.log(`до смены ${num} после ${change} `);

const numStr = num.toString(10);
console.log(numStr);

const numArray=[];
for ( let index = 0 ; index < numStr.length ; index += 1 )
    numArray.push(numStr [index]);

console.log(numArray);

const tmp = numArray[0];
const lastIndex = numArray.length - 1;
numArray[0] = numArray[lastIndex];
numArray[lastIndex] = tmp;
console.log(numArray);

let newStr = "" ;
for ( let index = 0 ; index <= lastIndex; index += 1 )
    newStr = newStr + numArray[index];
console.log(newStr);

const newNum = Number(newStr);
console.log(newNum);