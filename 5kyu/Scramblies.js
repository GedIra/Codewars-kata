// Link: https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2){
  const obj1 = {};
  const obj2 = {};
  [...str1].forEach((el) => obj1[el] = obj1[el]+  1 || 1 );
  [...str2].forEach((el) => obj2[el] = obj2[el]+  1 || 1 );

  console.log(obj1)
  console.log(obj2)

  for (val of Object.keys(obj2)){
    if (obj1[val] == undefined || obj1[val] < obj2[val] ) return false
  }
  return true
}

console.log(scramble('katas', 'steak'))
