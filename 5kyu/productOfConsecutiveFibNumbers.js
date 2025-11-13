// Link: https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(prod){
  const maxx = Math.floor(prod / 2)
  const fibo = ( max => {
    const nums = [0, 1]
    while( Math.max(...nums) < max ){
      nums.push(nums.at(-1) + nums.at(-2))

    }
    return nums
  })(maxx)

  const factors = fibo.filter(num => !(prod % num) && num != 0)
  const ans = fibo.filter((num, idx) => factors.includes(num) && (num * fibo.at(idx+1) == prod || num * fibo.at(idx-1) == prod) ).slice(0,2)
  return ans.length ? [...ans, true] : [...fibo.filter( (num, idx) => num * fibo.at(idx+1) > prod || num * fibo.at(idx-1) > prod ).slice(0,2), false]
}

//clever

function clever(prod){
  let [a, b] = [0, 1]
  while(a * b < prod) [a, b] = [b, a+b];
  return [a, b, a*b === prod]
}


console.log(clever(800))