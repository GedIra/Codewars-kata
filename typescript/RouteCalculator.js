// https://www.codewars.com/kata/581bc0629ad9ff9873000316/train/javascript
function calculate(sum){
  const acceptables = '.0123456789+-*$'
  const numSign = sum.split('').reduce((acc, char) => '0123456789.'.includes(char) ? [...acc, char] : [...acc,' ', char], [])
  console.log(typeof numSign)
  if(numSign.split(' ').some(c => !acceptables.includes(c))) return new Error('400: Bad request')
  
  const ans = (a, b, sign='+') => {
    let result = 0
    switch(sign){
      case '+':
        result = a + b || 0
        break

      case '-':
        result = a - b || 0
        break

      case '$':
        result = a / b || 1
        break

      case '*':
        result = a * b || 1
        break

      default:
        result = a + b || 0
    }
  }

  return numSign
}


console.log(calculate('233h4'))




