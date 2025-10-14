/**
 * Link: https://www.codewars.com/kata/52b757663a95b11b3d00062d
 */

toWeirdCase = string => 
  string.split(' ')
  .map(el => el.split('')
    .reduce((acc, c, idx) => idx % 2 ? acc+c.toLowerCase() : acc+c.toUpperCase(), ''))
  .join(' ')


console.log(toWeirdCase('lower case'))