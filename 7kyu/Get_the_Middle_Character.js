const getMiddle = s =>
  s.length % 2 ? s.slice((s.length / 2), s.length/2 + 1) : s.slice((s.length / 2) - 1, s.length/2 + 1)

console.log(getMiddle('aa'))