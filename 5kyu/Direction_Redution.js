/**
 * Link: https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
 */

function dirReduc(arr){
  const Opp = { 'NORTH': 'SOUTH', 'SOUTH': 'NORTH', 'WEST': 'EAST', 'EAST': 'WEST' }
  return arr.reduce((dir, pth) => 
    Opp[pth] === dir.at(-1) ? [...dir.slice(0, -1)] : [...dir, pth], [])
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "NORTH", "WEST"])) // WEST