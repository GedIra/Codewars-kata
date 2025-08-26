/**
 * Link: https://www.codewars.com/kata/559e708e72d342b0c900007b/train/javascript
 */

function EvenOdd(arr){
 return arr.reduce((acc, el, idx) =>  idx % 2 ? acc * el : acc + el)
}

console.log(EvenOdd([1,0,3])) //