//link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString (strng) {
  const arr = strng.split('')
  const index = arr.findLastIndex(el => el != 0 && !Number(el)) + 1 
  const abc = arr.slice(0, index).join('')
  const $123 = arr.slice(index).join('')
  const num = `${Number($123) + 1}`
  return  $123.length > num.length ? abc + '0'.repeat($123.length - num.length) + num : abc + num
}

console.log(incrementString('foobar000'))


