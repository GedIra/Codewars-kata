/**
 * Link: https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript

 * You have to sort the inner content of every word of a string in descending order.
 * The inner content is the content of a word without first and the last char.
 */



function sortTheInnerContent(words){
  return words.split(' ').reduce((srt, w) =>[
    ...srt, w.at(0) +
    [...w.slice(1,-1)].sort().reverse().join('')
    + (w.length > 1 ? w.at(-1) : '')
  ], []).join(' ');
}

console.log(sortTheInnerContent("sort the inner content in descending order"))