function solution(roman){
    const numerals = {"M": 1000, "D": 500, "C": 100, "L":50, "X":10, "V":5, "I":1}
    let integer = 0;
    roman.split("").forEach((num,idx,arr) =>{
        const next = arr[idx+1];
        next
        ? integer += (numerals[next] > numerals[num])? -numerals[num] : numerals[num]
        : integer += numerals[num];
    })
    return integer
}
