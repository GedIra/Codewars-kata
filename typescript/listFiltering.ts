function filter_list(l:Array<any>):Array<number> {
  return l.reduce((nbrs, el) => typeof el === 'number' ? [...nbrs, el] : nbrs, []) 
}

console.log(filter_list([1,2,3,4,'f','t',3,'g','h']))

console.log(typeof 'r')