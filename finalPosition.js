const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 
const finalPosition = function(moves){
  let verticalMotion = 0;
  let horizontalMotion = 0;
  for (let move of moves){
    if (move === "north" || move === "south"){
      if (move === "north"){
        verticalMotion += 1;
      }else {
        verticalMotion -= 1;
      }
    }
    if ( move === "east" || move === "west"){
      if (move === "east"){
        horizontalMotion += 1;
      }else {
        horizontalMotion -= 1;
      }
    }
  }
  let pointers = [horizontalMotion,verticalMotion];
  return pointers;
}
console.log(finalPosition(moves));

