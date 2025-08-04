/**
 * Link: https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
 */

twoSum = (numbers, target) => {
    const finder = idx1 => numbers.findIndex((itm, idx2) => idx1 !== idx2 && numbers[idx1] + itm === target ) 
    return numbers.reduce((acc, el, idx) => finder(idx, numbers) !== -1  && !acc.includes(idx) ?
        [...acc, idx, finder(idx, numbers)] : [...acc],[])
}


const arry = [ 22, 45, 23, 25, 5,6,7,21,45
]
const arr = [ 944, 79, 866, -222, 401, -678, -166, 67, 799,
    -55, 190, -351, -811, -120, -861, 887, 376, -49, -572, 78, -285,
    -391, 601, -297, 949, -241, -236, -791, -341, -265, 805, 564,
    -277, 199, 486, -44, 622, 198, 184, 582, -124, 147, 276, -769
]

//console.log(arr) // returns [0, 2] or [2, 0]
console.log(twoSum([2,1,3,4,7,9], 5)) // returns [0,2,1,3]

// console.log(arr[6])
// console.log(arr[38])
// console.log(arr[7])
// console.log(arr[17])