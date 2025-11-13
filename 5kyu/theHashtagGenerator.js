//link: https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str='') {
  const length = str.replaceAll(' ', '').length
  return str ? length && length < 140
  ? '#'+str.toUpperCase().split(' ').filter(el => el.length > 0).map(el => el[0]+ el.slice(1).toLowerCase()).join('') : false : false
}

console.log(generateHashtag("code wars kata"))
