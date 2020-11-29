const proc = require('process');

const time = proc.hrtime();

const hurryTin : number = 4 ;
const larryTin : number = 7 ;

const tinNumber : number = larryTin + hurryTin - 1 ;
console.log(`${tinNumber - hurryTin} ${tinNumber - larryTin}`);

const [sec, nsec] = proc.hrtime(time);
console.log(`${sec} sec ${nsec} ns`);
