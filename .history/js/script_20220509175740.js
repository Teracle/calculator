const calculator=document.querySelector('.calculator');
const result=document.querySelector('.result-field');
const buttons=document.querySelectorAll('.button');

let resultPressed=0;

let pattern='^\d*\.?(\d{1,3})?\-?\d*\.?(\d{1,3})?$';

let res=pattern.test('eee');

console.log(res);

const buttonClick=(e)=>{

  if(result.textContent.length>2){
    
    result.innerHTML+='.';
  }

  if(e.target.innerHTML==='C'){
  result.innerHTML='';
  }

  else if(e.target.innerHTML==='AC'){
    result.innerHTML='';
    delete localStorage.value;
    delete localStorage.previous;
    delete localStorage.result;
  }

  else if (e.target.innerHTML === '=') {
    result.innerHTML = eval(result.innerHTML);
    resultPressed++;
    localStorage.setItem('result',result.textContent);
  }
  
  else if(e.target.innerHTML==='&lt;-') {
    result.innerHTML=result.textContent.slice(0, -1);
  }

  else if(e.target.innerHTML==='MS'){
    localStorage.setItem('value',result.textContent);
    console.log(localStorage.getItem('value'));
  }

  else if(e.target.innerHTML==='MR'){
    result.innerHTML=localStorage.getItem('value');
  }

  else if(e.target.innerHTML==='MC'){
    delete localStorage.value; 
    console.log(localStorage.getItem('value'));  
  }

  else if(e.target.innerHTML==='M+'){
    localStorage.setItem('value',Number(localStorage.getItem('value'))+Number(result.textContent));
    console.log(localStorage.getItem('value'));
  }

  else if(e.target.innerHTML==='M-'){
    localStorage.setItem('value',Number(localStorage.getItem('value'))-Number(result.textContent));
    console.log(localStorage.getItem('value'));
  }

  else if(e.target.innerHTML==='+/-'){
    
    if(result.textContent>'0'){
      result.innerHTML='-'+result.textContent;
    }

    else if(result.textContent<'0'){
      result.innerHTML='';
      let negative=result.textContent.charAt(0);
      let result1=negative.replace('-','+');
      result.innerHTML=result1+localStorage.getItem('previous');
    }

  }

  else if(e.target.innerHTML==='Rvt'){
    
    if(resultPressed>0){
      result.innerHTML=localStorage.getItem('result');
    }

  }

  else {
    result.innerHTML += e.target.innerHTML;
    localStorage.setItem('previous',result.innerHTML);
  }

}


buttons.forEach((button)=>{
  button.addEventListener('click',buttonClick);
});

