const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let i = 0;
while (ingredients.length < i){
  console.log(ingredients[i]);
  i ++;
}

for (let k = 0; k < ingredients.length-1; k++){
  console.log(ingredients[k]);
}

for (let j = ingredients.length; j >=0; j --){
  console.log(ingredients[j]);
}