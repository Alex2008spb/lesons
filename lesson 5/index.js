const num = 19649;
digit(num,2);
const even = digit(num,1) + digit(num,3)
const odd = digit(num,0) + digit(num,2) + digit(num,4);
console.log(`even ${even} - odd ${odd} = ${even - odd} `);

function digit(num, pos) {
    const d = Math.pow(10, pos);
    const n1 = Math.floor(num / d);
    return n1 % 10;
}