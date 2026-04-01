function addedChar(s1, s2){
  const arr1 = s1.split('')
  const arr2 = s2.split('')
    .find((num, _, arr) => 
      arr1.filter(char => char === num).length + 3 === arr.filter(char => char === num).length)
  return arr2
}


let string1 = "aabbcc"
let string2 = "aacccbbcc"

console.log(addedChar(string1, string2))