/** 
 * Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 */

isPangram = string => 
    string.toLowerCase().split('').reduce((s,w) => s+= !s.includes(w) && w.charCodeAt(0) >= 97 && w.charCodeAt(0) >= 122 ? w : '')
    .length >= 26

console.log(isPangram('abcdefghijklmnopqrstuvwxyz '))