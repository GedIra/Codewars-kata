/**
 * Link: https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
 */

const narcissistic = value =>
  `${value}`.split('').reduce((acc, el) => 
    acc += el ** `${value}`.length, 0) === value

console.log(narcissistic(153))