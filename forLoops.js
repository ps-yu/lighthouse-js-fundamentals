for (let startNumber = 100; startNumber <= 200;startNumber++){
  if (startNumber % 3 === 0 && startNumber % 4 === 0){
    console.log("LoopyLighthouse");
  }else if (startNumber % 3 === 0){
    console.log("Loopy");
  }else if (startNumber % 4 === 0){
    console.log("Lighthouse");
  }else {
    console.log(startNumber);
  }
}