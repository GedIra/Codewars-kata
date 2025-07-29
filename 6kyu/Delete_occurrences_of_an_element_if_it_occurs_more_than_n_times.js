/** 
 * Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
 */

deleteNth = (arr, n) => (
    count = (arr, w) => arr.reduce((occ, el) => occ += el === w ? 1 : 0, 0), 
    arr.reduce((prev, el) => count(prev, el) < n ? [...prev, el] : prev, [])
)


console.log(deleteNth([20,37,20,21], 1))