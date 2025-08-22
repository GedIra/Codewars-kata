function rot13(message){
  const l_alphas = 'abcdefghijklmnopqrstuvwxyz'
  const U_alphas = l_alphas.toUpperCase()
  return message.split('').map(el => {

    const index = Alphas.indexOf(el) < -1
    const char = (index + 13) < 25 ? Alphas[index+13] : Alphas.at(-(39 - index))
    return char
  }).join('')
}

console.log(rot13('Test')) //grfg