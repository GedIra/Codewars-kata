/**
 * Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
 */

function findEvenIndex(arr) {
  const add = array => array.reduce((acc, el) => acc += el, 0)
  return arr.findIndex((_, idx) => add(arr.slice(0, idx)) === add(arr.slice(idx+1)))
}

console.log(findEvenIndex([1,2,3,0,3,2,1]))


