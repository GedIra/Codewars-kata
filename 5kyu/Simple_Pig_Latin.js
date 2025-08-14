/**
 * Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
 */

function pigIt(str){
  let low = 65; let upp = 97
  const alphas = [...Array(52).keys()].map((el, idx) => 
    idx < 26 ? String.fromCharCode(low++) : String.fromCharCode(upp++))
  const arr = str.split(' ').reduce((acc, el) => 
    alphas.includes(el[0]) ? [...acc, `${el.slice(1)}${el[0]}ay`] : [...acc, el] , [])
  return arr.join(' ')
}

console.log(pigIt('Pig latin is cool ?')) //'igPay atinlay siay oolcay'
console.log(pigIt('This is my string !')) //'hisTay siay ymay tringsay'
