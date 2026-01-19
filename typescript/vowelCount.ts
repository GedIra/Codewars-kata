function getCount(str: string): number{
  const vowels: string[] = ['a', 'i', 'e', 'u', 'o']
  return str.split('').reduce((n: number, c:string) => vowels.includes(c) ? ++n : n, 0)
}

console.log(getCount('Gedeon'))