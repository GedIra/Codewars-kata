/**
 * Link: https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript
 */

// it should return the places from the given routes
function findRoutes(routes) {
  //const obj = Object.fromEntries(routes)
  
  const obj = {}
  for(let [key, value] of routes){
    obj[key] = value
  }

  let start = routes.reduce((start, itm) => 
    routes.map(el => el[1]).includes(itm[0]) ? start : itm[0], '')
 
  const route = []

  while(start){
    route.push(start)
    start = obj[start] || 0
  }

  return route.join()

}




console.log(findRoutes([["Chicago", "Winnipeg"], ["Halifax", "Montreal"], ["Montreal", "Toronto"], ["Toronto", "Chicago"], ["Winnipeg", "Seattle"]]));
//"Halifax, Montreal, Toronto, Chicago, Winnipeg, Seattle")
console.log(findRoutes([["UK", "GER"], ["GER", "BEL"], ["BEL", "CAN"]]));
// ["UK, GER, BEL, CAN"];

