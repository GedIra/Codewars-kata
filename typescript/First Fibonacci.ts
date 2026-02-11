export function solution(first: number, second: number): [number, number]{
  const arr:number[] = [second, first]
  while(arr.every(num => num > -1 && second >= first)){
    const x = (second - first)
    if(x <= first){
      arr.push(x)
      second = first
      first = x
    }else break
  }
  return [first, second]
}