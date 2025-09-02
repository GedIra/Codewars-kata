/**
 * Link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
 */

function findNb(m) { 
  let result = 0 
  let n = 0

  while(result < m){
    result += n ** 3
    n += 1 
  }
  return result === m ? n - 1 : -1
}





console.log(findNb(1071225)) //--> 45
console.log(findNb(91716553919377)) //--> -1