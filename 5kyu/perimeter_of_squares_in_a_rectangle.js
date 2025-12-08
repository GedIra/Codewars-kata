// Link: https://www.codewars.com/kata/559a28007caad2ac4e000083

function perimeter(n){
  const tiles = n + 1
  const fibbo = (arr=[1]) => { 
    while(arr.length < tiles) arr.push((arr.at(-1) ?? 0) + ( arr.at(-2) ?? 0))
    return arr.reduce((acc, el) => acc += el, 0)
  }
  return fibbo() * 4
}

console.log(perimeter(20)) //14098308 //20