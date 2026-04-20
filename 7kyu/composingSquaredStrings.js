// Link: https://www.codewars.com/kata/56f253dd75e340ff670002ac/train/javascript


function compose(s1, s2) {
  const arr1 = s1.split('\n')
  const arr2 = s2.split('\n')
  const result = Array(arr1.length).fill(0).map((w, idx) => {
    return arr1.at(idx).slice(0, idx+1) + arr2.at(-(idx) - 1).slice(0, -idx)
  })

  return result
}

const g = "abcd\nefgh\nijkl\nmnop"
const c = "qrst\nuvwx\nyz12\n3456"

console.log(compose(g, c))