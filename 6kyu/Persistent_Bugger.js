/**
 * Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
 */

function persistence(num) {
   let str = String(num)
   let count = 0
   while(str.length > 1){
     str = String(str.split('').reduce((occ, num) => occ *= Number(num), 1))
     count++
   }
   return count
}