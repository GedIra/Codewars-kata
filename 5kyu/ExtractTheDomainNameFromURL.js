// Link: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url){
  const first_url = url.slice(url.indexOf('//')+2, url.lastIndexOf('.'))
  const new_url = first_url.slice(first_url.search('.'))
  const sec_new = new_url.includes('.') ? new_url.slice(new_url.lastIndexOf('.')+1) : new_url.includes('/') ? new_url.slice(new_url.lastIndexOf('/')+1) : new_url
  return sec_new
}


const x = 'www.xakep.ru'

console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName(x))