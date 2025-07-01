sumTwoSmallestNumbers = numbers => 
  numbers.sort((a,b) => a - b).slice(0,2).reduce((sum, item) => sum + item)

//console.log(sumTwoSmallestNumbers([0,-9,3,4]))