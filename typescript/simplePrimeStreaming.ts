function solve(a: number,b: number): string{
  const primes: number[] = [2,3]
  let num = primes.at(-1) || 0 + 1
  while(primes.length <= a+b){
    if (primes.some( el => num % el === 0)) {
      num++
      continue
    }
    primes.push(num)
  }
  return primes.join('').slice(a, a+b)
}

console.log(solve(2,2))