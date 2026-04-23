// Link: https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

function jumpingNumber(n){
  const diff = (a, b=0) => Math.abs(a-b) === 1 ? true : false
  return `${n}`.split('').map(Number)
  .every((num, idx, arr) => idx ? diff(num, arr[idx-1]): true) ?
  "Jumping!!" : "Not!!"
}


console.log(jumpingNumber(204))

