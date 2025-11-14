// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  return s[s.toLowerCase().split('').findIndex( (c, _, arr) => arr.indexOf(c) == arr.lastIndexOf(c))] || ''
}


console.log(firstNonRepeatingLetter('abEba'))