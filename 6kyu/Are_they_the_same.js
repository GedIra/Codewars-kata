/**
 * Link: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
 */

const comp = (array1=0, array2=0) =>
  array1 && array2 && array1.length === array2.length
  ? array1.sort((a,b) => a - b).every((el, idx) => el * el === array2.sort((a,b) => a - b).at(idx)) 
  : false 


console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([3, 9, 9, 3, 0, 0, 0, 6, 6, 1, 8, 2, 0, 5, 1, 10, 6, 6],  [36, 36, 0, 0, 36, 4, 64, 1, 81, 36, 1, 9, 81, 100, 0, 9, 25, 0]))
