const num1=document.getElementById('num1');
const result=document.getElementById('result');

num1.addEventListener('click',()=>{
    result.innerHTML=num1.getAttribute('value');
    
})