// variable vegetables that contain all the objects
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 20,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 40,
    plumpness: 3
  }
]
// variable metric that is used to define the property that is to be compared
const metric = 'redness'
//function
const judgeVegetable = function(vegetables,metric){
// loop to compare the values of the property
  let i = 0;
  for (let j = 1; j < vegetables.length; j++){
    if (vegetables[i][metric] < vegetables[j][metric]){
      i = j;
    }
  }
  return vegetables[i].submitter;
}
console.log(judgeVegetable(vegetables,metric));