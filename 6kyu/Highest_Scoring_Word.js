/**
 * Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
 */

function high(x){
  const array = x.split(' ')
  const alpha_sums = array.map(wd => wd.split``.reduce((sum, alp) => sum += alp.charCodeAt(0) - 96, 0))
  const big = Math.max(...alpha_sums)
  const idx = alpha_sums.indexOf(big)
  return array.at(idx)
}

console.log(high('abc ab c'))
console.log(high('what time are we zzzzzzz climbing up the volcano'))
