/**
 * Link: https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
 */

function tribonacci(signature,n){
  return new Array(n).fill(0).reduce((occ, el, idx) =>
    [...occ, occ.slice(idx).reduce((sum, itm) => sum+= itm)], signature
).slice(0,n)
}

console.log(tribonacci([1,1,1], 10))

//[1,1,1,3,5,9,17,31,57,105]