/**
 * Link: https://www.codewars.com/kata/530e15517bc88ac656000716
 */

function rot13(message){
  const Alphas = 'abcdefghijklmnopqrstuvwxyz'
  return message.split('').map(el => {
    if((Alphas.includes(el) || Alphas.includes(el.toLowerCase()))){
      let index = Alphas.indexOf(el)
      const upper = index > -1 ? false : true
      index = Alphas.indexOf(el.toLowerCase())
      const char = (index + 13) < 26 ? Alphas[index+13] : Alphas.at(-(39 - index))
      return upper ? char.toLocaleUpperCase() : char
    }
    return el
  }).join('')
}
