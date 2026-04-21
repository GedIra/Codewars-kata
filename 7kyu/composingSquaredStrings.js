// Link: https://www.codewars.com/kata/56f253dd75e340ff670002ac/train/javascript


function compose(s1, s2) {
  const arr1 = s1.split('\n')
  const arr2 = s2.split('\n')
  const result = Array(arr1.length).fill(0).map((w, idx) => {
    return arr1.at(idx).slice(0, idx+1) + arr2.at(-(idx) - 1).slice(0, idx ? -idx : arr2.length) 
  })

  return result.join('\n')
}

const g = "tSrJ\nOONy\nsqPF\nxMkB"
const c = "hLqw\nEZuh\nmYFl\nzlYf"

// tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf", "tzlYf\nOOmYF\nsqPEZ\nxMkBh"

console.log(compose(g, c))