// Link: https://www.codewars.com/kata/5503013e34137eeeaa001648/

function diamond(n){
  return n < 0 || !(n%2) ? 'null' : Array(n).fill('*')
  .map((el, idx) => idx < Math.floor(n/2) ? ' '.repeat((n/2) + 1 - idx) + el.repeat(idx+1) + '\n'
   : idx !== Math.floor(n/2) ?  ' '.repeat(idx+1 - (n/2))+el.repeat(idx-1) +'\n'
   : el.repeat(n)+'\n'
  )
  .join('') 
  
}

console.log(diamond(5))