/**
 * Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 */

const likes = names => {
    count = names.length
    return count == 1 ? `${names[0]} likes this` :
    count == 2 ? `${names[0]} and ${names[1]} like this`:
    count == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`:
    count > 3 ? `${names[0]}, ${names[1]} and ${count - 2} others like this`:
    'no one likes this'
}

console.log(likes(["Alex", "Jacob", "Mark"]))
