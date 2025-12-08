function primeFactors(n){
  primeCheck = n => {
    if( n <= 1) return false
    let i = 2
    while( i < Math.sqrt(n)){
      if (!(n % i)) return false
      i++
    }
    return true
  }
  let rem = n
  const obj = {}

  for(let i = 2; i <= rem; i++){
    if(primeCheck(i))
      while(!(rem % i)){
        obj[i] = (obj[i] ?? 0) + 1
        rem = rem / i
      }
  }
  let str = ''
  Object.keys(obj).forEach( key => str += obj[key] != 1 ?  `(${key}**${obj[key]})` : `(${key})` ) 

  return str
}

//console.log(primeFactors(86240)) //(2**5)(5)(7**2)(11)
console.log(primeFactors(7775460)) //(2**2)(3**3)(5)(7)(11**2)(17)