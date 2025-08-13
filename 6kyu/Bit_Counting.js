/**
 * Link: https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
 */

function countBits(n) {
  const bits = n.toString(2).split('0').join('')
  return bits.length;
}

console.log(countBits(1234)) //10011010010