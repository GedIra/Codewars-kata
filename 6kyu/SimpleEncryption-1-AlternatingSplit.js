/**
 * Link: https://www.codewars.com/kata/57814d79a56c88e3e0000786
 */

function encrypt(text, n) {
  while(n){
    n = n - 1;
    text = [...text].reduce(([odd, even], char, idx) => idx % 2 ? [odd+char, even] : [odd, even+char], ['', '']).join('')
  }
  return text

}

function decrypt(encryptedText, n) {
  const len = encryptedText.length
  while(n){
    n = n - 1;
    const [odds, evens] = len % 2 ? 
      [[...encryptedText.slice(0, Math.floor(len/2))], [...encryptedText.slice(Math.floor(len/2))]]
      : [[...encryptedText.slice(0, len/2)], [...encryptedText.slice(len/2)]]
    encryptedText = [...encryptedText].map((el, idx) => idx % 2 ? odds.shift() : evens.shift()).join('')
  }
  return encryptedText
}

//console.log(encrypt("012345", 1))//  =>  "135024"
//console.log(encrypt("012345", 2))//  =>  "135024"  ->  "304152"
//console.log(encrypt("012345", 3))//  =>  "135024"  ->  "304152"  ->  "012345"
//console.log(encrypt("01234", 1))//  =>  "13024"


console.log(decrypt("012345", 3))
