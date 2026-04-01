// Link: https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript

function maxRot(n) {
  const str = `${n}`
  const len = str.length
  const obj = Object.fromEntries(str.split('').map((el, idx) => [idx, Number(el)]))
  const rotate = obj => {
    const swap = obj[0]
    obj[0] = obj[len-1]
    obj[len-1] = swap
    return obj
  }
  console.log(obj)
  console.log(rotate(obj))
}

maxRot(234)

