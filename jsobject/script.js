"use strict";
function opt() {
  let opt = document.getElementById("cars");
  let list = document.getElementById("list");
  let mercedes = {
    model: "s-class",
    year: 1990,
    color: "red",
  };
  let bmw = {
    model: "x-6",
    year: 1995,
    color: "blue",
  };
  let data = "";
  if (opt.options[opt.selectedIndex].text === "Mercedes") {
    for (var item in mercedes) {
      data += `<li>${item}:${mercedes[item]}</li>`;
    }
  } else if (opt.options[opt.selectedIndex].text === "Bmw") {
    for (var item in bmw) {
      data += `<li>${item}:${bmw[item]}</li>`;
    }
  }
  list.innerHTML=data;
}
function wordcount(){
    let text=document.getElementById('text').value.trim();
    let par=document.getElementById('res');
    const res=text.split(" ");
    par.textContent=`Result of textarea:${res.length}`;
}