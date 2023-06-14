"use strict";
// class User{
//     constructor(name,surname){
//         this.name=name,
//         this.surname=surname;

//     }
//     get stu(){
//         return this.name;
//     }
//     set stud(item){
//         this.name=item;
//     }
// }
// const some=new User('mirad','m');
// console.log(some.stu);
// some.stud='murad';
// console.log(some.stu);
let btn=document.querySelector('button');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
console.log(e);
});