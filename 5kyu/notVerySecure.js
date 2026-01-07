//Link: https://www.codewars.com/kata/526dbd6c8c0eb53254000110

function alphanumeric(string){
  const isAlpha = char => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90
  const isNum = num => num.charCodeAt(0) >= 48 && num.charCodeAt(0) <= 57
  if( string.length )
    return string.toUpperCase().split('').every(el => isAlpha(el) || isNum(el))
  return false
}


console.log(alphanumeric("Mazinkaise34r"))
console.log(alphanumeric("hello world_"))
console.log(alphanumeric("PassW0rd"))
console.log(alphanumeric("         "))