// Link: https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
  return ! str.split('.').some((el, idx, arr) => arr.length != 4 || el == '' || (el.indexOf('0') === 0 && el.length != 1) || Number(el) < 0 || Number(el) > 255 || el.split('').some(el => el.charCodeAt(0) < 48 || el.charCodeAt(0) > 58))
}

console.log(isValidIP('12.255.56.1'))