/**
 * Link: https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
 */
function humanReadable (seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return [hours, minutes, secs].map(el => String(el).length > 1 ? el : `0${el}`).join(':')
  
}

console.log(humanReadable(359075))