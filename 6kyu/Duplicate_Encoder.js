/**
 * Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 */

duplicateEncode = word => 
    word.toLowerCase().split('')
    .reduce((w, el, _, arr) => 
        w += arr.filter((_) => _ === el).length > 1 ? ')': '(', '')



console.log(duplicateEncode('Success'))