/**
 * Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
 */

towerBuilder = nFloors => {
    let seq = num => 1 + 2*(num - 1)
    let setr = 1
    let spaceL = nFloors - 1
    let spaceR = nFloors - 1
    return nFloors > 0 ? 
        new Array(nFloors).fill('')
        .map(el => `${' '.repeat(spaceL--) + '*'.repeat(seq(setr++)) +' '.repeat(spaceR--)}`) 
        : []
}

console.log(towerBuilder(6))



/* Alternatively:

towerBuilder = nFloors => {
    let seq = num => 1 + 2*(num - 1)
    return nFloors > 0 ? 
        new Array(nFloors).fill(`${'*'.repeat(seq(nFloors))}`)
            .reduce((occ, el,idx,arr) => 
                [...occ, " ".repeat((el.length - seq(idx+1))/2) + "*".repeat(seq(idx+1)) + " ".repeat((el.length - seq(idx+1))/2)], []) 
        : []
}
 */


