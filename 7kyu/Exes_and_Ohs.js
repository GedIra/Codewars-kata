const XO = s => 
    !s.toLowerCase().split('')
    .reduce((bool, item) => item === 'x'? bool += 1: item === 'o'? bool -= 1: bool, 0)