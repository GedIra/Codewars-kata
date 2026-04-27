// Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

const getCount = str =>
  str.split('').filter(c => "aieuo".includes(c)).length


console.log(getCount('akafhf aicofawaor'))