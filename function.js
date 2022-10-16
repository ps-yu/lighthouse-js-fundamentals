const lastIndexOf = (array, value) => {
  let index = -1;
  let i = array.length-1;
  while (i>=0){
    if (array[i] === value){
      index = i;
      break;
    }
    i --;
  }return index;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));