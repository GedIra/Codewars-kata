/**
 * Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 */

function order(words){
  return (arr = [], words.split(' ').forEach(el =>  
    arr[el.split('').reduce((w,i) => 
      !isNaN(i) ? Number (i) : w, '')
  ] = el), arr.join(' ').trim())
}

console.log(order("Ged2 ira3"))
