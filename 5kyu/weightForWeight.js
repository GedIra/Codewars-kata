//Link: https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

const orderWeight =  str  => 
  str.split(' ').filter(el => el != '').sort()
  .reduce((acc, num) => [...acc, [num, num.split('').reduce((acc, c) => acc+= Number(c), 0)]], [])  
  .sort((a, b) => a[1] - b[1]).map(el => el[0]).join(' ')

console.log(orderWeight('23  98  900 78 69'))