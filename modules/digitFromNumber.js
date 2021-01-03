/**
 * @summary Функция возвращает цифру числа на указанной позиции.
 * @param {number} num Число из которого требуется извлечь цифру.
 * @param {number} pos Позиция требуемой цифры (>0).
 * @returns {number}
 * @example digit (379,0) -> 9
 */
const digit = function(num, pos){
    const d = Math.pow(10, pos);
    const n1 = Math.floor(num / d);
    return n1 % 10;
}
module.exports = digit;