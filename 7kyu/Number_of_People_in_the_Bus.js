/** 
 * Link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
 */

var number = function(busStops){
 return busStops.reduce((w,i) => w += i[0] - i[1], 0)
}


