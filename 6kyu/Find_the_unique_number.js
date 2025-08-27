function findUniq(arr) {
  const array = arr.reduce((acc, num) => acc.includes(num) ? [...acc, num] : [...acc], [arr[0]]).slice(1)
  console.log(array)
  return array.length > 1 ? arr.filter(num => ! array.includes(num))[0] : array[0]
}

console.log(findUniq([ 0, 1, 1 ]))