/**
 * Link: https://www.codewars.com/kata/5264d2b162488dc400000001/javaScript
 */

const spinWords = string =>
    string.split(' ').reduce(
        (stc, w) => w.length > 4 ? 
        `${stc} ${w.split('').reverse().join('')}`: `${stc} ${w}`, '')
        .trim()

console.log(spinWords('Just kidding there is still one more'))