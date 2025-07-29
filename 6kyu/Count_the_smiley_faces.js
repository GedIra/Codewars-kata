/**
 *  Link: https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
 */

function countSmileys(arr) {
  const smiles = arr.filter(el => el.length <= 3 )
  .filter(el => el.at(0) === ':' || el.at(0) === ';')
  .filter(el => el.at(-1) === 'D' || el.at(-1) === ')')
  .filter(el => el.length < 3 || el.at(1) === '~' || el.at(1) === '-')
  return smiles.length;
}

console.log(countSmileys([":)" , ";(" , ";}" , ":-D"]))