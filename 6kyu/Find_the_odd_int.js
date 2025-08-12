/**
 * Link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
 */

function findOdd(A) {
  const obj = {}
  for(let key of A){
    obj[key] = obj[key] + 1 || 1
  }
  return Object.entries(obj).reduce((num, itm) => itm[1] % 2 ? Number(itm[0]) : num, '')
}

console.log(findOdd([2,2,2,3,3,2,4]))