/**
 * Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
 */

const findMissingLetter = arr =>
  String.fromCharCode(
    arr.filter((el, idx) => el.charCodeAt(0) - (arr[idx+1] || el).charCodeAt(0) < -1)
  .join('')
  .charCodeAt(0) + 1)

console.log(findMissingLetter(['a', "b", 'c', 'd','e','f', 'h']))