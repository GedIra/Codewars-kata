/**
 * Link: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
 */

const wave = str =>
  str.split('').reduce((acc, el, idx) => el === ' ' ? [...acc] :
    [...acc, `${str.slice(0,idx)}${el.toUpperCase()}${str.slice(idx+1)}`], []
  )

console.log(wave('hello')) //[ 'Hello', 'hEllo', 'heLlo', 'helLo', 'hellO' ]
console.log(wave('s p a c e s')) //['S p a c e s', 's P a c e s', 's p A c e s', 's p a C e s', 's p a c E s','s p a c e S']