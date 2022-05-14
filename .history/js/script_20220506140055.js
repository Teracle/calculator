const num1=document.getElementById('num1');
const result=document.getElementById('result');
const plus=document.getElementById('plus');

const data=document.querySelector('[data-operation]');

const resultBtn=document.querySelector('#result-btn');

const clearBtn=document.getElementById('clear');

data.addEventListener('click',()=>{
    console.log(this.nextElementSibling);
})

num1.addEventListener('click',()=>{
    result.innerHTML=num1.getAttribute('value');
    
})

resultBtn.addEventListener('click',()=>{
    alert('result');
})


const clear=result.innerHTML="";


clearBtn.addEventListener('click',clear);


// plus.addEventListener('click',()=>{
//     alert(result.value);
// })