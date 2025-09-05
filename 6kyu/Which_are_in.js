/**
 * Link: https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
 */

const inArray = (array1,array2) =>
  array1.filter(ele => array2.filter(el => el.includes(ele)).length).sort()


console.log(inArray(
  ["arp", "live", "strong"], 
  ["lively", "alive", "harp", "sharp", "armstrong"])
) 
  
// [ 'arp', 'live', 'strong' ]