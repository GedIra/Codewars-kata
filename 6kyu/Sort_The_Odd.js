/** 
 * Link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
 */

sortArray = arr => {
    let i = 0
    const odds = arr.filter(el => el % 2 !== 0).sort((a,b) => a - b)
    return arr.map(el => el % 2 !== 0 ? odds[i++] : el)
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))