/**
 * Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
 */

function findOutlier(integers){
  const odds = integers.filter(el => el % 2)
  const evens = integers.filter(el => !(el % 2))
  return evens.length > 1 ? odds[0] : evens[0]
}

console.log(findOutlier([3,9,7,3,5,7,8,9,57,31]))