/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    newX = String(x).split('').reverse().join('');

    return newX === String(x) ? true : false;
};