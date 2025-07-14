rowSumOddNumbers = n => {
    sum = a => a>0? a+sum(a-1) : 0
    const arr = Array(sum(n))
    let count = 1
    for(let i = 1; count <= arr.length; i++){
        if( i % 2 !== 0) {
            arr[count - 1] = i
            count += 1
        }
    }
    return arr.slice(-n).reduce((sum, crr) => sum + crr)   
}


console.log(rowSumOddNumbers(3))