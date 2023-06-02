"use strict";
//#region Task-1
let date = new Date();
let day = date.getDay();
switch (day) {
  case 0:
    console.log("Today is:Sunday");
    break;
  case 1:
    console.log("Today is:Monday");
    break;
  case 2:
    console.log("Today is:Tuesday");
    break;
  case 3:
    console.log("Today is:Wednesday");
    break;
  case 4:
    console.log("Today is:Thursday");
    break;
  case 5:
    console.log("Today is:Wednesday");
    break;
  case 6:
    console.log("Today is:Saturday");
    break;
}
//#endregion
//#region  Task-2
// let age=prompt("Yas daxil et:");
// alert(ageChecker(age)?"Yaş 20-dən böyükdür.":age==20?"Yaş 20-dir.":"Yaş 20-dən kiçikdir.");
// function ageChecker(age){
//   return age>20;
// }
//#endregion
//#region Task-3
let number=document.getElementById('num').value;
function numcheck{
  if(number%2==0){
      alert("<p>This is even number<p/>")
  }
  else{
    alert("<p>This is odd number<p/>")
  }
}
//#endregion