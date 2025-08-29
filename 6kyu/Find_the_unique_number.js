/**
 * Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
 */

const findUniq = arr => {
  return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))[0]
}