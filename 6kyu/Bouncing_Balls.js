/**
 * Link: https://www.codewars.com/kata/5544c7a5cb454edb3c000047/javascript
 */

function bouncingBall(h,  bounce,  window) {
    const times = (h,  b,  w) => (
        count = 1,
        (b > 0 && b < 1) ? h > w ? count += times(h*b, b, w) : 1 : 1
    )
    return 2 * times(h, bounce, window) - 3
}

console.log(bouncingBall(5, -1, 1.5))