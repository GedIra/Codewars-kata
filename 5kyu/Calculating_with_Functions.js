/**
 * Link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
 */

const fcn = (num, x) => 
  num !== undefined ? 
    num < -99 ? 100 + x + num :
    num < 1 ? Math.floor(x * num) :
    num > 99 ? num - 100 + x : x * num
  : x

const zero = num => fcn(num, 0)
const one = num => fcn(num, 1)
const two = num => fcn(num, 2)
const three = num => fcn(num, 3)
const four = num => fcn(num, 4)
const five = num => fcn(num, 5)
const six = num => fcn(num, 6)
const seven = num => fcn(num, 7)
const eight = num => fcn(num, 8)
const nine = num => fcn(num, 9)

const plus = num => num + 100
const minus = num => -(num + 100)
const times = num => num 
const dividedBy = num => 1/num


console.log(two(minus(one())))