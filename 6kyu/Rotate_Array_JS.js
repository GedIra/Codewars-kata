/** 
 * Link: https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4/train/javascript
 */


const rotate = (array, n) =>(
    t = array.length, 
    n = n % t,
    n >= 0 ? 
    [ ...array.slice(t - n), ...array.slice(0, t-n) ]: 
    [ ...array.slice(-n), ...array.slice(0, -n) ]
)

console.log(rotate([1, 2, 3, 4, 5], -2))
