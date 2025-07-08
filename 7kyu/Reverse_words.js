/**
 * Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
 */

reverseWords = str => str.split(' ').map(w => w.split('').reverse().join('')).join(' ')

console.log(reverseWords("mik mik"))

