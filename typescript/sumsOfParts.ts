export function partsSums(ls: number[]): number[] {
  function sum(arr: number[]): number { return arr.reduce((crr: number, num: number) => num + crr, 0)}
  return [...ls.reduce((acc: number[], itm:number, idx:number, arr: number[]) => [...acc, sum(arr.slice(idx))], []), 0]
}

console.log(partsSums([1,2,3,5]))