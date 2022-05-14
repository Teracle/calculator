const num1=document.getElementById('num1');
const result=document.getElementById('result');
const plus=document.getElementById('plus');

const data=document.querySelector('[data-operation]');

data.addEventListener('click',()=>{
    console.log('clicked');
})

num1.addEventListener('click',()=>{
    result.innerHTML=num1.getAttribute('value');
    
})

plus.addEventListener('click',()=>{
    alert(result.value);
})