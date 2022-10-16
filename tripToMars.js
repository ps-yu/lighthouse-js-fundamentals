const howManyHundreds = function(number){
  let remainder = number % 100;
  let numberOfBotttles = (number - remainder) / 100;
  return numberOfBotttles;
}