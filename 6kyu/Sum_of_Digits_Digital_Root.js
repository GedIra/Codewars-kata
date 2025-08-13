/**
 * Link: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
 */

function digitalRoot(n) {
  let str = String(n).split('')
  while(str.length > 1){
    str = String(str.reduce((acc, char) => acc += Number(char), 0)).split('')
  }
  return Number(str[0])
}

//OR
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

console.log(digital_root(23999))