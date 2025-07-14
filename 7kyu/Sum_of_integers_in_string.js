/** 
 * Link: https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
*/

function sumOfIntegersInString(s) {
  let number = ''
  let total = 0
  const arr = s.split('')
  arr.forEach(el => {
    if (el.charCodeAt(0) >= 48 && el.charCodeAt(0) < 58)
      number += el
    else{
      total += Number(number)
      number = ''
    }
  })
  total += Number(number)
  return total
}
console.log(sumOfIntegersInString('16girls in 4 rooms 7'))