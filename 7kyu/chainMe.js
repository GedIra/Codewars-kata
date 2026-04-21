// Link: https://www.codewars.com/kata/54fb853b2c8785dd5e000957

function chain(input, fs) {
  const numbers = '0123456789'
  const arr = fs.map((el) => {
    const idx = el.split('').findIndex(el => numbers.includes(el))
    return [ el.slice(0, idx), Number(el.slice(idx))]
  })

  const result = (num1, operator, num2) => {
    switch(operator){
      case 'add':
        return num1 + num2
      case 'sub':
        return num1 - num2
      case 'mulBy':
        return num1 * num2
      default:
        return num1
    }
  }

 
  return arr.reduce((acc, val) =>)
}


console.log(chain(23, ['add10']))