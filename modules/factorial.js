/**
 * @summary Функция возвращает факториал числа.
 * @param {number} num Число факториал которого нужно вычислить.
 * @returns {number}
 * @example factorial (5) -> 120
 */
// module.exports = function (num) {
//     let rtn = 1;
//
//     for ( let i = 1; i <= num; i++ )
//         rtn *= i;
//
//     return rtn;
// }

function factorial (num){
    if (num === 0) return 1;
    return num * factorial(num - 1);
}
module.exports = factorial;