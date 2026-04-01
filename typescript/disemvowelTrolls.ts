// Link: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

export class Kata {
  static disemvowel(str: string): string {
    const vowels = 'aeiouAEIOU'.split('')
    return str.split('').map(el => vowels.includes(el) ? '' : el).join('')
  }
}


console.log(Kata.disemvowel("This website is for losers LOL!")) // Ths wbst s fr lsrs LL!
