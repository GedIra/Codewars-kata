//Link: https://www.codewars.com/kata/54da539698b8a2ad76000228

const isValidWalk = walk =>
    walk.length == 10 && 
    walk.filter(go => go == 'n').length == walk.filter(go => go == 's').length &&
    walk.filter(go => go == 'w').length == walk.filter(go => go == 'e').length


console.log(isValidWalk(['n','s','n','s','n','s','n','s']))