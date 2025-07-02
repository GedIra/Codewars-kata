// basicOp = (operation, value1, value2) =>(
//     operation === '+'? value1+value2:
//     operation === '-'? value1-value2:
//     operation === '*'? value1*value2:
//     operation === '/'? value1/value2:undefined
// )

//You can also use switch case 

basicOp = (operation, value1, value2) => ({
    '+': value1+value2, '-': value1 - value2,
    '*': value1*value2, '/': value1/value2
    }[operation])


console.log(basicOp('*', 5, 6))