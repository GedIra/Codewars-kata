/**
 * Link: https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
 */

twoSum = (numbers, target) => {
    const finder = idx1 => numbers.findIndex((itm, idx2) => idx1 !== idx2 && numbers[idx1] + itm === target ) 
    return numbers.reduce((acc, el, idx) => finder(idx, numbers) !== -1  && !acc.includes(idx) ?
        [...acc, idx, finder(idx, numbers)] : [...acc],[])
}
console.log(twoSum([2,1,3,4,7,9], 5)) // returns [0,2,1,3]