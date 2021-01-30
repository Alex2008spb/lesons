/**
 * @summary Функция возвращает факториал числа.
 * @param {number} num Число факториал которого нужно вычислить.
 * @param {number} start Необязательный параметр: число с которого начинается вычисление факториала. По-умолчанию 1.
 * @returns {number}
 * @example factorial (5) -> 120
 * @example factorial (5,3) -> 60
 */
function factorial(num, start = 1) {
    let rtn = BigInt(1);

    for ( let i = start; i <= num; i++ )
        rtn *= BigInt(i);

    return rtn;
}

// function factorial (num){
//     if (num === 0) return 1;
//     return num * factorial(num - 1);
// }
module.exports = factorial;