toJadenCase = s => 
 s.split(' ')
 .map(ele => ele.replace(ele[0], ele[0].toLocaleUpperCase()))
 .join(' ')
