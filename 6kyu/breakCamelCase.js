/**
 * Link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
 */

solution = str =>
  [...str].reduce((w, c) => w += c < 'a' ? ` ${c}` : c, '')

console.log(solution("camelCasing"))