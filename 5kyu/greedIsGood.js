// Link: https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

score =  dice => {
  let scores = 0
  const obj = {}
  for (die of dice){
    obj[die] = ++obj[die] || 1
  }
  Object.keys(obj).forEach((sc)=>{
    scores += sc == 1 ? obj[sc] >= 3 ? 1000 + (obj[sc] - 3) * 100 : obj[sc] * 100 : 0  ||
    sc == 5 ?( obj[sc] >= 3 ? 500 + (obj[sc] - 3) * 50 : obj[sc] * 50) : 0 ||
    obj[sc] >= 3 ? sc * 100 : 0
  })
  return scores
}

console.log(score([2,2,2,2,3]))