/** 
 * Link: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
 */

const count = string => Object.fromEntries(
  string.split``.reduce((w, el) => w += w.includes(el) ? `` : el).split``
  .map(el => [el , string.split``.filter(item => item === el).length])
)

console.log(count('abjkjjbc'))


/**
      function count(str) {  
      return (m = {}, str.split('').forEach((c) => m[c] = (m[c] || 0) + 1), m);
    }
 */