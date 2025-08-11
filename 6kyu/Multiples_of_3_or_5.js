/**
 * Link: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
 */

function solution(number){
  return isNaN(number) ? undefined : number > 0 
  ?[...new Array(number).keys()]
  .reduce((occ, num) => occ += !(num % 3) || !(num % 5) ? num : 0): 0
}
