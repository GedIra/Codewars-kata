/**
 * Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
 */

descendingOrder = n => 
    Number(String(n).split('').map(Number).sort((a, b) => b - a).join(''))

console.log(descendingOrder(345))
