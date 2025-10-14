/**
 * Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e
 */

const longestConsec = (strarr, k) => k <= 0 ? '' : k > strarr.length ? '' :
  strarr.reduce(
    (acc, w, idx) =>[...acc, strarr.slice(idx, idx+k).join('')], [])
    .reduce((long, el) => el.length > long.length ? el : long, '')

const arr = ["zone", "abigail", "theta", "form", "libe", "zas"]

console.log(longestConsec(arr, -4))