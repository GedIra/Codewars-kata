// Link: https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

function listSquared(m, n) {
  const divisors = num => {
    const arr = []
    for(let i=1; i <= num / 2; i++){
      !(num % i) ? arr.push(i) : ''
    }
    return [...arr, num]
  }
  let dvs = 0
  const arr = []
  for(let i=m; i<=n; i++){
    dvs = Math.sqrt(divisors(i).reduce((sum, num) => sum += num**2, 0))
    Number.isInteger(dvs) ? arr.push([i, dvs**2]) : ''
  }
  return arr
}

console.log(listSquared(250,500))

