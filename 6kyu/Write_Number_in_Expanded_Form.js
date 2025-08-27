

const expandedForm = num => [...`${num}`]
  .reverse()
  .reduce((acc, num, idx) => 
    num !== '0' 
    ? [Number(num) * Number(`1${'0'.repeat(idx)}`), ...acc] 
    : [...acc], []
  ).join(' + ')

