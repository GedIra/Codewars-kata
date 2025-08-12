/**
 * Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
 */

function solution(str){
  str = str.length % 2 ? str + '_' : str
  return str.split('').reduce((acc, chr, idx, arr) => idx % 2 ? acc : [...acc, `${chr}${arr[idx+1]}`], [])
}

console.log(solution(''))