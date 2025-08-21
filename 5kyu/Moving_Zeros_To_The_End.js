/**
 * Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
 */

moveZeros = arr =>
  [...arr.filter(el => el !== 0), ...arr.filter(el => el === 0)]

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]
