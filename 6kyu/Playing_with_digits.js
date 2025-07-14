/**
 * Link: https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
 */
digPow = (n, p) => {
    const sum = (''+n).split('').reduce((sum, num) => sum + Number(num) ** p++, 0)
    return sum % n ? -1 : sum / n
}

console.log(digPow(89, 1))