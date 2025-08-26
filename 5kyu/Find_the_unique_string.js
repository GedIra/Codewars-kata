/**
 * Link: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript
 */

function findUniq(arr) {
  let sorted_arr = arr.map(el =>el.toLowerCase().split(' ').join('').split('').sort().join(''))
  const mapped = sorted_arr.filter((el, _, acc)=> acc.indexOf(el) == acc.lastIndexOf(el))

  if(mapped.length > 1 ){
    sorted_arr = arr.map(el =>el.toLowerCase().split(' ').join('').split('').sort().slice(0,1).join(''))
    const obj = {}
    for(let arr of sorted_arr){
      obj[arr] = obj[arr]+ 1 || 1
    }
    let skey = ''
    for(let key of Object.keys(obj)){
      skey = obj[key] === 1 ? key : skey
    }

    const diff = arr[sorted_arr.findIndex(el => el === skey)]
    return diff
  }
  return arr.find((el, idx) => el.toLowerCase().split(' ').join('').split('').sort().join('') === mapped.at(0))
  
}
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]))
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]))
