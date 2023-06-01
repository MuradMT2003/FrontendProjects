"use strict";
table();
function table() {
  //debugger
  let tabel = document.getElementById("tbl");
  let data = "";
  for (let i = 0; i < 8; i++) {
    let trs = `<tr >`;
    for (let j = 0; j < 8; j++) {
      let td = "";
      (j % 2 == 0 && i % 2 == 0) || (j % 2 != 0 && i % 2 != 0)
        ? (td = `<td class="text-bg-dark"></td>`)
        : (td = `<td ></td>`);
      trs += td;
    }
    trs += `<tr/>`;
    data += trs;
  }
  tabel.innerHTML = data;
}
function validation() {
  let username = "admin@gmail.com";
  let password = "12345";
  let userid = document.getElementById("text").value;
  let passid = document.getElementById("pass").value;
  userid == username && password == passid
    ? alert("You logged succesfully!")
    : alert("Your credentials is not true!");
}
