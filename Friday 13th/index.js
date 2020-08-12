const year = 2020;
const monthsInYear = 12;
const devilsDozen = 13;
const friday = 5;
for ( let month = 0 ; month < monthsInYear ; month++ ) {
    const date1 = new Date(Date.UTC(year, month, devilsDozen));
    if (date1.getDay() === friday)
        console.log(`${date1.getUTCFullYear()}.${date1.getUTCMonth() + 1}.${date1.getUTCDate()}`)
};