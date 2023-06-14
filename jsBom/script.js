 "use strict";
let card=document.querySelector('#myval');
let btn=document.querySelectorAll('.mybutton');
let btnr=document.querySelectorAll('.mybuttonr');
let elements=[];
btn.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        if(elements.includes(item)){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'This product already added to card!',
                showConfirmButton: false,
                timer: 1200
              })
        }
        else{
            card.innerText++;  
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product added to card!',
                showConfirmButton: false,
                timer: 1200
              })
            elements.push(item);
            localStorage.setItem(`producties`,card.innerText);

        } 
   });
});

btnr.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        let sectemp=0;
        if(elements.includes(elements[sectemp])){
            elements.pop(item);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Removed succesfully!',
                showConfirmButton: false,
                timer: 1200
              })
            card.innerText--;
            localStorage.setItem(`producties`,card.innerText);
        }
        else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'You can not remove this item,please add first!',
                showConfirmButton: false,
                timer: 1200
              })
        }
        sectemp++;
   });
});
localStorage.getItem('producties')!==null?card.innerText=localStorage.getItem('producties'):card.innerText;
