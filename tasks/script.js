const longWord = (str) => {
  //debugger;
  let gen = str.split(" ");
  let max = "";
  for (let item of gen) {
    console.log(item);
    if (item.length > max.length) {
      max = item;
    }
  }
  return max;
};

//console.log(longWord('salam abi neecesen'));
//let arr=[];
function ArrayofOnlyEvenSumCount() {
  //debugger;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 == 0) {
      arr.push(arguments[i]);
    }
  }
  return arr.length;
}
//console.log(ArrayofOnlyEvenSumCount(1,23,43,1212,122,45));
let arr = [];
let list = document.getElementById("list");
function Solve() {
  let input = document.getElementById("input");
  if (!input.value) {
    console.log("You must be enter something!");
  } else {
    arr.push(input.value);
    Show();
    input.value = "";
  }
}
function Remove(num) {
  arr.splice(num, 1);
  Display();
}
function Show() {
    
  let data = "";
  for (let i = 0; i < arr.length; i++) {
    data += `<li class="list-group-item d-flex justify-content-between">
      ${arr[i]} <button onclick="Remove(${i})" class="btn btn-danger btn=sm">Delete</button> </li> `;
  }
  list.innerHTML = data;
}
