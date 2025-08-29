/**
 * Link: https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
 */

function validBraces(braces){

 return braces.length % 2 ? false : validBraces(`${braces.slice(0,)}${braces.slice()}`)
}

console.log(validBraces('([{}])'))