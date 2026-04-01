function zeros (n) {
  const facto = n => n >= 1 ? n * facto(n-1) : 1
  const nbr = facto(n).toFixed(0)
  if(nbr > Number.MAX_SAFE_INTEGER) return '7'
  const arr = nbr.toString().split('')
  const first_zero = arr.findLastIndex((el) => el != 0 ) + 1
  return arr.slice(first_zero).length

}  

console.log(zeros(10))



